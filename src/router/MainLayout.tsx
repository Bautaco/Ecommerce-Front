import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import { cn } from "../utils/utils";
import { SideBar } from "../components/Sidebar/SideBar";
import SidebarButton from "../components/Sidebar/SidebarButton";

export function MainLayout() {
  const [scrolled, setScrolled] = useState(false);

  const [open, setIsOpen] = useState(false);
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
      <div className="text-white font-sans  ">
        <SideBar open={open} setIsOpen={setIsOpen}>
          <SidebarButton route={"/ListaProductos"} title="Lista de productos" />
        </SideBar>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
