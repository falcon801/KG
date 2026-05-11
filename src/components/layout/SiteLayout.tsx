import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PortfolioBackdrop } from "../ui/PortfolioBackdrop";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LockHorizontalScroll() {
  useEffect(() => {
    const clamp = () => {
      if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
      }
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
    };

    clamp();
    window.addEventListener("scroll", clamp, { passive: true });
    window.addEventListener("resize", clamp);

    return () => {
      window.removeEventListener("scroll", clamp);
      window.removeEventListener("resize", clamp);
    };
  }, []);

  return null;
}

export function SiteLayout() {
  return (
    <>
      <PortfolioBackdrop />
      <ScrollToTop />
      <LockHorizontalScroll />
      <div className="relative z-10 flex min-h-dvh w-full min-w-0 max-w-full flex-col overflow-x-hidden">
        <Navbar />
        <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
          <Outlet />
        </div>
        <Footer className="mt-auto shrink-0" />
      </div>
    </>
  );
}
