import { fetchHtmlContentFile, getS3Client } from "@/lib/s3-helper";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import ReactHtmlParser, {
  convertNodeToElement,
  Transform,
} from "react-html-parser";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ key: string }>) {
  if (!params?.key) {
    return {
      notFound: true,
    };
  }

  const s3Key = params?.key + ".html";

  const s3Client = getS3Client();
  const htmlContent = await fetchHtmlContentFile(
    s3Client,
    "chat-gpt-html-content-files",
    s3Key
  );

  return {
    props: {
      htmlContent,
      s3Key,
    },
  };
}

export default function Page({
  htmlContent,
  s3Key,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const transformFunction: Transform = (node, index) => {
    if (node.type === "tag") {
      switch (node.name) {
        case "button": {
          node.attribs.class = "hidden";
          return convertNodeToElement(node, index, transformFunction);
        }

        case "img": {
          node.attribs.src = "/user-icon-2.png";
          node.attribs.srcset = "";
          node.attribs.class = "bg-transparent";
          return convertNodeToElement(node, index, transformFunction);
        }

        default:
          return convertNodeToElement(node, index, transformFunction);
      }
    }
  };

  const transformedHtml = ReactHtmlParser(htmlContent, {
    transform: transformFunction,
  });

  //   console.log("TransformedHtml", transformedHtml);
  return (
    <div
      //   dangerouslySetInnerHTML={{ __html: htmlContent }}
      className="bg-gray-200"
    >
      {transformedHtml}
    </div>
  );
}
