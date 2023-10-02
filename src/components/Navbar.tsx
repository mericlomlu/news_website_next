"use client";
import React from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";
import Newspaper from "../../public/assets/newspaper.svg";
import Link from "next/link";
import {
  Activity,
  BriefCase,
  Dribbble,
  HeadPhones,
  Home,
  SmartPhone,
  Thermometer,
  Tv,
} from "../../public/constants/icons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="bg-regentBlue-400 dark:bg-regentBlue-700 inline-flex h-16 w-screen items-end  gap-2 self-stretch px-4">
      <Image
        src={Newspaper}
        alt="Newspaper"
        width={40}
        height={40}
        className="self-center"
      />
      <div className="flex w-[80%] flex-grow items-end justify-center">
        <Link
          href={"/home"}
          className={pathName === "/home" ? "nav-link-active" : "nav-link"}
        >
          <Home />
          <p className="hidden xl:flex"> Home Page</p>
        </Link>
        <Link
          href={"/business"}
          className={pathName === "/business" ? "nav-link-active" : "nav-link"}
        >
          <BriefCase />
          <p className="hidden xl:flex"> Business News</p>
        </Link>
        <Link
          href={"/entertainment"}
          className={
            pathName === "/entertainment" ? "nav-link-active" : "nav-link"
          }
        >
          <HeadPhones />
          <p className="hidden xl:flex"> Entertainment News</p>
        </Link>
        <Link
          href={"/general"}
          className={pathName === "/general" ? "nav-link-active" : "nav-link"}
        >
          <Tv />
          <p className="hidden xl:flex"> General News</p>
        </Link>
        <Link
          href={"/health"}
          className={pathName === "/health" ? "nav-link-active" : "nav-link"}
        >
          <Activity />
          <p className="hidden xl:flex"> Health News</p>
        </Link>
        <Link
          href={"/science"}
          className={pathName === "/science" ? "nav-link-active" : "nav-link"}
        >
          <Thermometer />
          <p className="hidden xl:flex"> Science News</p>
        </Link>
        <Link
          href={"/sports"}
          className={pathName === "/sports" ? "nav-link-active" : "nav-link"}
        >
          <Dribbble />
          <p className="hidden xl:flex"> Sports News</p>
        </Link>
        <Link
          href={"/technology"}
          className={
            pathName === "/technology" ? "nav-link-active" : "nav-link"
          }
        >
          <SmartPhone />
          <p className="hidden xl:flex "> Technology News</p>
        </Link>
      </div>
      <ThemeSwitcher />
    </nav>
  );
};
export default Navbar;