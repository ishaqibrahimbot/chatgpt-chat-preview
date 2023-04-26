import AWS from "aws-sdk";

export function getS3Client() {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "ap-south-1",
  });

  const s3 = new AWS.S3();

  return s3;
}

export async function fetchHtmlContentFile(
  s3Client: AWS.S3,
  bucket: string,
  key: string
) {
  try {
    const params = {
      Bucket: bucket,
      Key: key,
    };

    const response = await s3Client.getObject(params).promise();

    return response.Body ? response.Body.toString() : "";
  } catch (err) {
    console.error("Error fetching HTML content from S3: ", err);
    return "";
  }
}
