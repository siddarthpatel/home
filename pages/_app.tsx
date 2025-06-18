import "../styles/global.css";
import { useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Header from "../components/Header";

NProgress.configure({ showSpinner: false });

const DEFAULT_HEADER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const headerLinks: IHeader[] = pageProps?.headerLinks || DEFAULT_HEADER_LINKS;

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router.events]);

  const isWideLayout =
    router.pathname === "/admin" || router.pathname === "/blog/[id]";
  const containerClasses = `mx-auto max-w-xl ${isWideLayout ? "md:max-w-2xl" : ""} lg:pt-24`;

  return (
    <main className="flex-1 overflow-y-visible">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <Header links={headerLinks} />
        <div className={containerClasses}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </div>
      </div>
    </main>
  );
}

export default MyApp;