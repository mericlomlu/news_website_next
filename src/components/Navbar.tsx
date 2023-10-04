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
    <nav className="fixed top-0 flex h-auto min-h-[3rem] w-full items-end justify-between overflow-hidden bg-regentBlue-400 px-4 dark:bg-regentBlue-700">
      <div className="hidden items-center justify-center self-center min-[1280px]:flex">
        <Image src={Newspaper} alt="Newspaper" width={40} height={40} />
      </div>
      <div className="flex items-center justify-center self-center min-[1280px]:hidden">
        <Image src={Newspaper} alt="Newspaper" width={32} height={32} />
      </div>
      <Link
        href={"/home"}
        className={pathName === "/home" ? "nav-link-active" : "nav-link"}
      >
        <Home width={20} />
        <p className="line-clamp-1 hidden xl:flex"> Home Page</p>
      </Link>
      <Link
        href={"/business"}
        className={pathName === "/business" ? "nav-link-active" : "nav-link"}
      >
        <BriefCase width={20} />
        <p className="line-clamp-1 hidden xl:flex"> Business News</p>
      </Link>
      <Link
        href={"/entertainment"}
        className={
          pathName === "/entertainment" ? "nav-link-active" : "nav-link"
        }
      >
        <HeadPhones width={20} />
        <p className="line-clamp-1 hidden xl:flex"> Entertainment News</p>
      </Link>
      <Link
        href={"/general"}
        className={pathName === "/general" ? "nav-link-active" : "nav-link"}
      >
        <Tv width={20} />
        <p className="line-clamp-1 hidden xl:flex"> General News</p>
      </Link>
      <Link
        href={"/health"}
        className={pathName === "/health" ? "nav-link-active" : "nav-link"}
      >
        <Activity width={20} />
        <p className="line-clamp-1 hidden xl:flex"> Health News</p>
      </Link>
      <Link
        href={"/science"}
        className={pathName === "/science" ? "nav-link-active" : "nav-link"}
      >
        <Thermometer width={20} />
        <p className="line-clamp-1 hidden xl:flex"> Science News</p>
      </Link>
      <Link
        href={"/sports"}
        className={pathName === "/sports" ? "nav-link-active" : "nav-link"}
      >
        <Dribbble width={20} />
        <p className="line-clamp-1 hidden xl:flex"> Sports News</p>
      </Link>
      <Link
        href={"/technology"}
        className={pathName === "/technology" ? "nav-link-active" : "nav-link"}
      >
        <SmartPhone width={20} />
        <p className="hidden xl:flex "> Technology News</p>
      </Link>
      <ThemeSwitcher />
    </nav>
  );
};
export default Navbar;