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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
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
        <section className="flex flex-col items-center p-8 bg-white bg-opacity-20 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold font-poppins mb-6">
            Explore Examples
          </h2>
          <p className="font-poppins mb-6 text-justify">
            Check out these examples to see the Share ChatGPT Chat extension in
            action.
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 mt-4">
            <a
              href="https://www.sharechatgptchat.com/chat/jscodeshift_crash_course--c9cb5392-6525-4f87-a16b-c6b318cf4ce1"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFFFFF] text-[#8B0000] p-6 rounded-lg shadow-lg flex flex-col items-center font-semibold hover:bg-[#F0F0F0] transition-colors duration-300"
            >
              <p className="text-center">A crash course on JSCodeShift</p>
            </a>
            <a
              href="https://www.sharechatgptchat.com/chat/mastering_ssh_security--32bb738e-807c-4549-99f4-b023c22557c6"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFFFFF] text-[#8B0000] p-6 rounded-lg shadow-lg flex flex-col items-center font-semibold hover:bg-[#F0F0F0] transition-colors duration-300"
            >
              <p className="text-center">
                A walkthrough of SSH with a hands-on project
              </p>
            </a>
            <a
              href="https://www.sharechatgptchat.com/chat/chrome_extension_landing_page--06f35912-4613-440a-bd35-2752177a8902"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFFFFF] text-[#8B0000] p-6 rounded-lg shadow-lg flex flex-col items-center font-semibold hover:bg-[#F0F0F0] transition-colors duration-300"
            >
              <p className="text-center">
                Getting GPT-4 to build this landing page
              </p>
            </a>
          </div>
        </section>
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
        <section className="flex flex-col items-center p-8 bg-white bg-opacity-20 rounded-lg shadow-lg mt-12">
          <h2 className="text-3xl font-semibold font-poppins mb-6">
            Watch the Demo
          </h2>
          <p className="font-poppins mb-6 text-justify">
            Click the button below to watch a video demo of the Share ChatGPT
            Chat extension in action.
          </p>
          <div className="mt-4">
            <a
              href="https://www.loom.com/share/92f33131a46c48f19e67cab7f35d28af"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFFFFF] text-[#8B0000] font-semibold px-8 py-3 rounded hover:bg-[#F0F0F0] transition-colors duration-300"
            >
              Watch Demo
            </a>
          </div>
        </section>
      </main>
      <footer className="py-4 px-4 text-center mt-12">
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
    </div>
  );
}
