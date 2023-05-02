import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#8B0000] to-[#FFFFAF] min-h-screen text-white py-12 px-6 sm:px-12">
      <Head>
        <title>Share ChatGPT Chat</title>
        <meta
          name="description"
          content="Share your ChatGPT chats with the world"
        />
        <link rel="icon" href="/128x128.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="text-center mb-12 flex flex-col items-center">
        <img src="/128x128.png" alt="About" className="h-24 w-24 mb-4" />
        <h1 className="text-5xl font-bold font-poppins">Share ChatGPT Chat</h1>
      </header>
      <main>
        <div className="grid gap-12 sm:grid-cols-2 mb-12">
          <section className="flex flex-col items-center p-6 bg-white bg-opacity-20 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold font-poppins mb-4">About</h2>
            <p className="font-poppins text-justify">
              Share ChatGPT Chat is a Chrome extension that allows you to
              generate a publicly accessible preview link for your ChatGPT
              chats. Show off your amazing conversations, tutorials, and
              problem-solving sessions with ChatGPT by creating a static webpage
              to share with others.
            </p>
          </section>

          <section className="flex flex-col items-center p-6 bg-white bg-opacity-20 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold font-poppins mb-4">
              Features
            </h2>
            <div className="font-poppins text-justify">
              <div className="mb-2">
                🚀 Generate static webpages for your ChatGPT chats
              </div>
              <div className="mb-2">
                🚀 Share coding tutorials, financial solutions, and more
              </div>
              <div className="mb-2">
                🚀 Showcase laughable instances of ChatGPT hallucinating
              </div>
            </div>
          </section>
        </div>
        <section className="flex flex-col items-center p-8 bg-white bg-opacity-20 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold font-poppins mb-6">
            Get the Extension
          </h2>
          <p className="font-poppins mb-6 text-justify">
            Click the button below to install the Share ChatGPT Chat extension
            from the Chrome Web Store.
          </p>
          <div className="mt-4">
            <a
              href="https://chrome.google.com/webstore/detail/share-chatgpt-chat/gebneacjfaipjcmfcejggnlkmlcmfegd?hl=en&authuser=0"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFFFFF] text-[#8B0000] font-semibold px-8 py-3 rounded hover:bg-[#F0F0F0] transition-colors duration-300"
            >
              Install Extension
            </a>
          </div>
        </section>
      </main>
      <footer className="py-4 px-4 text-center mt-12">
        <p className="font-poppins">Made with ❤️ by Ishaq Ibrahim</p>
      </footer>
    </div>
  );
}
