"use client";
import React from "react";
import "./Sidebar.css";
import { useSidebarStore } from "@/zustand/sidebar";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "linkedin",
    href: "https://linkedin.com/in/juliet-ikegwuonu",
    src: "/Vector (1).svg",
  },
  {
    name: "github",
    href: "https://github.com/ikegwuonu",
    src: "/ri_github-fill.png",
  },
];
const contactDetails = [
  {
    type: "phone",
    value: "+234 812 083 274",
    icon: "/gridicons_phone.png",
    name: "Phone",
  },
  {
    type: "email",
    value: "juliet.kegwuonu@gmail.com",
    icon: "/mail.svg",
    name: "Email",
  },
  {
    type: "location",
    value: "Abuja, Nigeria",
    icon: "/locate.svg",
    name: "Location",
  },
];

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  return (
    <div className={`left-side ${isSidebarOpen ? "toggle" : ""}`}>
      <Image
        alt="Close"
        width={30}
        height={30}
        src="/closee.png"
        className="display"
        onClick={toggleSidebar}
      />

      <Image
        width={150}
        height={150}
        src="/3d-img.png"
        alt="profile pic"
        className="profile-pic"
      />
      <p className="text-lg font-bold">Juliet Ikegwuonu</p>
      <p>Software Developer</p>

      <div className="socials-div">
        {socials.map((social) => (
          <Link key={social.name} target="_blank" href={social.href}>
            <Image
              width={30}
              height={30}
              src={social.src}
              className="socials"
              alt={social.name}
            />
          </Link>
        ))}
      </div>

      <div className="contact">
        {contactDetails.map((contact) => (
          <div key={contact.type}>
            <div className="contact-detail " key={contact.type}>
              <Image
                width={30}
                height={30}
                src={contact.icon}
                alt={contact.name}
              />
              <div className="contact-info">
                <p>{contact.name}</p>
                <p>
                  <b>{contact.value}</b>
                </p>
              </div>
            </div>
            <div className="h-[3px] w-full rounded-md bg-gray-500"></div>
          </div>
        ))}
      </div>

      <a href="/Juliet_FE_CV.pdf" download="Juliet_CV_FE">
        <div className="download">
          <Image width={30} height={30} src="/doenload.svg" alt="download cv" />
          <p>Download CV</p>
        </div>
      </a>
    </div>
  );
};

export default Sidebar;
