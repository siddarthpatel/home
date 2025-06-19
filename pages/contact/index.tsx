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
                    href="https://stuff-personal-sid.s3.us-east-1.amazonaws.com/Resume.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA5SVHHPOCUIFOQMTS%2F20250619%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250619T024834Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEVYPPtwSq%2FmUbVVoPnkwNZLPun5Auu8UhdLKHVYZ7HSAiEAlVpuqe58ZV9ge1jBNOOGMqTbWgqc5DE357NFzHqAJ7oq3wIInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw5MzM0MzIzNTk4MTMiDIFMYRD5nxrXCbk2SyqzAo4lyHiVJZTu43uhNBd1V2ULxUPzlb3urbxTWgcwnZpugHf0L%2BiCphOLdQJlcI9Slr2nr2RaMOQOawHW06O0POPw6cZgWab9uhmK7UePrzmYrzRLgmat1IW7FM59uN%2FgY%2FSDPH5C8a8FQEMyh7m34eBg7OmMkHHI2TjeRdN%2BDT4rUKlrhG%2BRiYe1wENWFgAYcbEzfuevMWT8pnGak0a98jW5H1KVkphZWHfm4mtmRPmaewbEyYMpwmFZM4dI0OxXuyI0SglBakNCNsL6Yg9c%2FriGyAi660G7M8kWBAqPmPwanpTMVo%2F1cZl%2FnCWFeQsBUqHFYLFE8S7SVRw1luzZNFreg16E094TwjqFbTVP3XTEj0puqzL1CxuoN8SdnBY374xqy27sN4%2BOSoF8giikjQe9ndAwuPHNwgY6rQIW%2BJd6NezISI0wN02na4xJin3e%2FzVr43DOhPjyw9MH%2BlS3Qb%2F6iQBGb2VN1JwOK%2FiYtEIoSzZafsD9KayBRmDNxYP4EcIwMEvtYy3%2BywI002EYtapMP0ajapXBTAsMEc%2FTFg4q3Rkqx8xkETQBjeNsxl4ZiY%2BRe6fAy%2BJH4PNUHLlqssEYISoO3c35cxfCRho0pNpQ%2Bvdm4e28kK3ThTB%2F%2FDcgLsOMrD4ubyE8ppKCxp%2BDpUQ6KccBkkAlnHR6UHBwCmTa4zZSM2B0wsVwIStYMMlECS%2B7BVTkfWCxhXmZJXtrmhvXn8twnrMQ90%2F%2FIYOwD3EqbRWw34d5FROqpVWVMWCAFFFL8DrlEXg3GVQ%2B3ff%2BhGqp%2BsEkLdsO9tQjkuFfCKAm4q6KELPHn%2BWr&X-Amz-Signature=5f09e9937a8f69fc30747732113c822f54d74b1f5cf2b0767f526d85ab0cb77b&X-Amz-SignedHeaders=host&response-content-disposition=inline"
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