"use client";
import React, { useState } from "react";
import "./Portfolio.css";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";
import Link from "next/link";

// Create an array of filter buttons
const filterOptions = [
  { label: "All", value: "All" },
  { label: "Node.js", value: "Node.js" },
  { label: "Next.js", value: "Next.js" },
  { label: "React", value: "react" },
  { label: "Bootstrap", value: "html" },
  { label: "SCSS", value: "scss" },
  { label: "Tools", value: "Tools" },
];

const Portfolio = () => {
  const [menuProducts, setMenuProducts] = useState(portfolioData);
  const [active, setActive] = useState("All");

  const filter = (framework: string) => {
    setActive(framework);
    if (framework === "All") {
      setMenuProducts(portfolioData);
    } else {
      setMenuProducts(
        portfolioData.filter((portfolio) => portfolio.framework === framework),
      );
    }
  };

  return (
    <div className="Portfolio-container ">
      <div className="contact-one flex gap-2 pb-2.5!">
        <p className="font-bold text-xl">Portfolio</p>
        <Image
          width={400}
          height={4}
          src="/Line 5.png"
          alt="Line"
          className="line"
        />
      </div>

      <div className="portfolio-menu">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => filter(option.value)}
            className={` cursor-pointer ${active === option.value ? "active-menu" : ""}`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="portfolio-list">
        {menuProducts.map((portfolio, index) => (
          <Link href={portfolio.link} className="portfolio" key={index}>
            <Image
              src={portfolio.img}
              alt={portfolio.name}
              height={200}
              width={400}
              className="w-full"
            />
            <div className="sm:p-3">
              <p>{portfolio.name}</p>
              <p>{portfolio.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
