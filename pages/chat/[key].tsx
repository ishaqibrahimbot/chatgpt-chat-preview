import Head from "next/head";
import { fetchHtmlContentFile, getS3Client } from "@/lib/s3-helper";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import ReactHtmlParser, {
  convertNodeToElement,
  Transform,
} from "react-html-parser";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";

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
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const transformFunction: Transform = (node, index) => {
    if (node.type === "tag") {
      switch (node.name) {
        case "button": {
          node.attribs.class = "hidden";
          return convertNodeToElement(node, index, transformFunction);
        }

        case "div": {
          if (node.attribs.class && node.attribs.class.includes("m-auto")) {
            node.attribs.class.replace("m-auto", "mx-auto");
          }

          if (
            node.attribs.class &&
            node.attribs.class.includes("break-words")
          ) {
            node.attribs.class += " overflow-auto";
          }

          return convertNodeToElement(node, index, transformFunction);
        }

        case "img": {
          node.attribs.src = "/user-icon-2.png";
          node.attribs.srcset = "";
          node.attribs.class = "bg-transparent max-h-[30px] max-w-[30px]";
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

  return (
    <>
      <Head>
        <title>View Your Chat</title>
        <meta
          name="description"
          content="View your ChatGPT chat and share it with everyone else!"
        />
        <link rel="icon" href="/128x128.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Navbar />
      <div className="bg-gray-200 dark:bg-gray-800">{transformedHtml}</div>
      <footer className="py-8 px-4 text-center bg-gradient-to-r from-[#8B0000] to-[#FFFFAF]">
        <p className="font-poppins mb-4">Made with ❤️ by Ishaq Ibrahim</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/ishaqibrahimbot"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#F0F0F0] transition-colors duration-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ishaq-ibrahim/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#F0F0F0] transition-colors duration-300"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
