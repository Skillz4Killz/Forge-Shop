"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-100 transition-all ${
        hasScrolled ? "bg-gray-800 backdrop-blur-md h-12 text-white" : ""
      }`}
    >
      <div className="flex items-center w-full box-border mx-auto px-8 justify-center">
        <Link href="/" passHref className="-ml-2">
          <HeaderLogo />
        </Link>
        <div className="flex flex-row items-center absolute right-4 top-1.5 m-2.5 space-x-4">
          <Link
            href="/overview"
            passHref
            className={`${
              hasScrolled ? "text-white" : "text-black"
            } text-sm font-semibold uppercase`}
          >
            Blueprints
          </Link>
          <Link
            href="/guides"
            passHref
            className={`${
              hasScrolled ? "text-white" : "text-black"
            } text-sm font-semibold uppercase`}
          >
            Guides
          </Link>
          <Link
            href="/settings"
            passHref
            className={`${
              hasScrolled ? "text-white" : "text-black"
            } text-sm font-semibold uppercase`}
          >
            Settings
          </Link>
          <Link
            href="/about"
            passHref
            className={`${
              hasScrolled ? "text-white" : "text-black"
            } text-sm font-semibold uppercase`}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
