import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="grid gap-12 md:gap-24 font-light text-sm mt-16">
        <div className="font-light text-sm">
          <p className="dark:text-white text-black">Contact</p>
          <div className="grid gap-6 mt-3">
            <div className="grid grid-cols-1 items-start md:grid-cols-1 text-neutral-500">
              <p>
                Feel free to shoot me a message on{" "}
                <a
                  className="text-black duration-200 hover:no-underline underline after:content-['_↗']"
                  href='https://x.com/GojoSatoru27788'
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                , or you can also send me an email at{" "}
                <a
                  className="text-black duration-200 hover:no-underline underline after:content-['_↗']"
                  href="mailto:siddarthjpatel@gmail.com"
                  title="Email"
                >
                  siddarthjpatel@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="font-light text-sm">
          <p className="dark:text-white text-black">Other Links</p>
          <div className="grid gap-6 mt-3">
            <div className="grid grid-cols-1 items-start md:grid-cols-3 text-neutral-500">
              <div>
                <p className="dark:text-neutral-400 text-neutral-400">
                  LinkedIn
                </p>
              </div>
              <div className="md:col-span-2 w-full">
                <p className="dark:text-white text-black">
                  <a
                    title="LinkedIn"
                    className="text-black duration-200 hover:no-underline underline after:content-['_↗']"
                    href="https://linkedin.com/in/siddarthpatel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    siddarthpatel
                  </a>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-start md:grid-cols-3 text-neutral-500">
              <div>
                <p className="dark:text-neutral-400 text-neutral-400">Resume</p>
              </div>
              <div className="md:col-span-2 w-full">
                <p className="dark:text-white text-black">
                  <a
                    title="Resume"
                    className="text-black duration-200 hover:no-underline underline after:content-['_↗']"
                    href="../../public/Resume-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    siddarth.patel
                  </a>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-start md:grid-cols-3 text-neutral-500">
              <div>
                <p className="dark:text-neutral-400 text-neutral-400">Github</p>
              </div>
              <div className="md:col-span-2 w-full">
                <p className="dark:text-white text-black">
                  <a
                    title="Github"
                    className="text-black duration-200 hover:no-underline underline after:content-['_↗']"
                    href="https://github.com/siddarthpatel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    siddarthpatel
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}