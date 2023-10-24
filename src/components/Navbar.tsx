"use client";
import React, { useEffect, useState } from "react";
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
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useAppSelector } from "@/redux/hooks";
import { constants } from "buffer";
import { texts } from "../../public/constants/constants";

const Navbar = () => {
  const pathName = usePathname();
  const language = useAppSelector((state) => state.language.language);
  const [navLabels, setNavLabels] = useState<{
    TOP_HEADLINES: string;
    BUSINESS: string;
    ENTERTAINMENT: string;
    GENERAL: string;
    HEALTH: string;
    SCIENCE: string;
    SPORTS: string;
    TECHNOLOGY: string;
  }>();
  useEffect(() => {
    if (language === "TR") {
      setNavLabels(texts.TR);
    } else {
      setNavLabels(texts.ENG);
    }
  }, [language]);

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
        <p className="line-clamp-1 hidden xl:flex">
          {navLabels?.TOP_HEADLINES}
        </p>
      </Link>
      <Link
        href={"/business"}
        className={pathName === "/business" ? "nav-link-active" : "nav-link"}
      >
        <BriefCase width={20} />
        <p className="line-clamp-1 hidden xl:flex"> {navLabels?.BUSINESS}</p>
      </Link>
      <Link
        href={"/entertainment"}
        className={
          pathName === "/entertainment" ? "nav-link-active" : "nav-link"
        }
      >
        <HeadPhones width={20} />
        <p className="line-clamp-1 hidden xl:flex">
          {" "}
          {navLabels?.ENTERTAINMENT}
        </p>
      </Link>
      <Link
        href={"/general"}
        className={pathName === "/general" ? "nav-link-active" : "nav-link"}
      >
        <Tv width={20} />
        <p className="line-clamp-1 hidden xl:flex"> {navLabels?.GENERAL}</p>
      </Link>
      <Link
        href={"/health"}
        className={pathName === "/health" ? "nav-link-active" : "nav-link"}
      >
        <Activity width={20} />
        <p className="line-clamp-1 hidden xl:flex"> {navLabels?.HEALTH}</p>
      </Link>
      <Link
        href={"/science"}
        className={pathName === "/science" ? "nav-link-active" : "nav-link"}
      >
        <Thermometer width={20} />
        <p className="line-clamp-1 hidden xl:flex"> {navLabels?.SCIENCE}</p>
      </Link>
      <Link
        href={"/sports"}
        className={pathName === "/sports" ? "nav-link-active" : "nav-link"}
      >
        <Dribbble width={20} />
        <p className="line-clamp-1 hidden xl:flex"> {navLabels?.SPORTS}</p>
      </Link>
      <Link
        href={"/technology"}
        className={pathName === "/technology" ? "nav-link-active" : "nav-link"}
      >
        <SmartPhone width={20} />
        <p className="hidden xl:flex "> {navLabels?.TECHNOLOGY}</p>
      </Link>
      <div className="flex items-center justify-center gap-2 self-center">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;
