"use client";
import React, { useEffect, useState } from "react";
import { ThemeSwitcher } from "@/components/Navbar/ThemeSwitcher";
import Image from "next/image";
import Newspaper from "../../../public/assets/newspaper.svg";
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
} from "@public/constants/icons";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useAppSelector } from "@/redux/hooks";
import { texts } from "@public/constants/constants";

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
    <nav className="fixed top-0 flex w-full gap-4  bg-regentBlue-400 px-4 py-2 dark:bg-regentBlue-700">
      <div className="flex-initial items-center justify-center self-center">
        <Image src={Newspaper} alt="Newspaper" width={40} height={40} />
      </div>
      <div className="flex-1">
        <Link
          href={"/home"}
          className={pathName === "/home" ? "nav-link-active" : "nav-link"}
        >
          <Home width={20} />
          <p className="line-clamp-1">{navLabels?.TOP_HEADLINES}</p>
        </Link>
      </div>
      <div className="flex-1">
        <Link
          href={"/business"}
          className={
            pathName === "/business" ? "nav-link-active " : "nav-link "
          }
        >
          <BriefCase width={20} />
          <p className="line-clamp-1"> {navLabels?.BUSINESS}</p>
        </Link>
      </div>
      <div className="flex-1">
        <Link
          href={"/entertainment"}
          className={
            pathName === "/entertainment" ? "nav-link-active " : "nav-link "
          }
        >
          <HeadPhones width={20} />
          <p className="line-clamp-1">{navLabels?.ENTERTAINMENT}</p>
        </Link>
      </div>
      <div className="flex-1">
        <Link
          href={"/general"}
          className={pathName === "/general" ? "nav-link-active " : "nav-link "}
        >
          <Tv width={20} />
          <p className="line-clamp-1"> {navLabels?.GENERAL}</p>
        </Link>
      </div>
      <div className="flex-1">
        <Link
          href={"/health"}
          className={pathName === "/health" ? "nav-link-active " : "nav-link "}
        >
          <Activity width={20} />
          <p className="line-clamp-1"> {navLabels?.HEALTH}</p>
        </Link>
      </div>
      <div className="flex-1">
        <Link
          href={"/science"}
          className={pathName === "/science" ? "nav-link-active " : "nav-link "}
        >
          <Thermometer width={20} />
          <p className="line-clamp-1"> {navLabels?.SCIENCE}</p>
        </Link>
      </div>
      <div className="flex-1">
        <Link
          href={"/sports"}
          className={pathName === "/sports" ? "nav-link-active " : "nav-link "}
        >
          <Dribbble width={20} />
          <p className="line-clamp-1"> {navLabels?.SPORTS}</p>
        </Link>
      </div>
      <div className="flex-1">
        <Link
          href={"/technology"}
          className={
            pathName === "/technology" ? "nav-link-active " : "nav-link "
          }
        >
          <SmartPhone width={20} />
          <p className="line-clamp-1"> {navLabels?.TECHNOLOGY}</p>
        </Link>
      </div>
      <div className=" flex items-center justify-center gap-2 self-center">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;
