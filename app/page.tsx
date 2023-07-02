import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>nextjs</title>
        <meta name="application-name" content="Next.js" />
        <link rel="stylesheet" href="css/globals.css" />
      </Head>
      <main>
        <h1>text csss link</h1>
        <h1>text csss link</h1>
        <h2>text csss link</h2>
        <h1>text csss link</h1>
        <h1>text csss link</h1>
        <img src="/image/images.jpg" alt="error" />
      </main>
    </div>
  );
}
