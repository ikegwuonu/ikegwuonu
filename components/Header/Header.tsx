"use client";

import "./Header.css";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSidebarStore } from "@/zustand/sidebar";
import Image from "next/image";

const pages = [
  { name: "Home", icon: "/Vector.png", path: "/" },
  { name: "Resume", icon: "/resume icon.png", path: "/resume" },
  { name: "Portfolio", icon: "/work icon.svg", path: "/portfolio" },
  { name: "Contact", icon: "/contact icon.svg", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebarStore();
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="Header">
      <div className="logo">
        <button onClick={toggleSidebar} className="display">
          <Image
            width={25}
            height={25}
            alt="menu"
            src="/icons8-menu-bar.svg"
            className="display"
          />
        </button>
        <p>
          Juliet <span className="header-color">Ikegwuonu</span>{" "}
        </p>
        <Image width={50} height={50} src="/ph_moon.png" alt="moon" />
      </div>
      {/*menu begins*/}
      <div className="menu-intro">
        <div> </div>
        <div className="menu">
          {pages.map((page, index) => (
            <Link
              href={page.path}
              key={page.path}
              className={`flex flex-col p-3! max-md:p-1! rounded items-center justify-center ${isActive(page.path) ? "active" : "not-active"}`}
            >
              <Image
                width={35}
                height={35}
                src={page.icon}
                alt=""
                className="object-cover max-sm:w-5 max-lg:w-7"
              />
              <p className="max-md:text-sm">{page.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
