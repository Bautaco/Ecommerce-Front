import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import { cn } from "../utils/utils";

export function MainLayout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header
        className={cn(
          "fixed z-50 w-full",
          scrolled
            ? "bg-gradient-to-b from-transparent to-red-100 shadow-lg"
            : "bg-transparent"
        )}
      />
      <div className="text-white font-sans">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
