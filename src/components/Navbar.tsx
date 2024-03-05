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
    <nav className="fixed top-0 flex h-auto max-h-[3rem] min-h-[3rem] w-full items-end gap-4 overflow-hidden bg-regentBlue-400 px-4 dark:bg-regentBlue-700">
      <div className="hidden items-center justify-center self-center min-[1280px]:flex">
        <Image src={Newspaper} alt="Newspaper" width={40} height={40} />
      </div>
      <Link
        href={"/home"}
        className={
          pathName === "/home" ? "nav-link-active flex-1" : "nav-link flex-1"
        }
      >
        <Home width={20} />
        <p className="line-clamp-1 hidden xl:flex">
          {navLabels?.TOP_HEADLINES}
        </p>
      </Link>
      <Link
        href={"/business"}
        className={
          pathName === "/business"
            ? "nav-link-active flex-1"
            : "nav-link flex-1"
        }
      >
        <BriefCase width={20} />
        <p className="line-clamp-1 hidden xl:flex"> {navLabels?.BUSINESS}</p>
      </Link>
      <Link
        href={"/entertainment"}
        className={
          pathName === "/entertainment"
            ? "nav-link-active flex-1"
            : "nav-link flex-1"
        }
      >
        <HeadPhones width={20} />
        <div className=" hidden xl:flex">
          <p className="line-clamp-1">{navLabels?.ENTERTAINMENT}</p>
        </div>
      </Link>
      <Link
        href={"/general"}
        className={
          pathName === "/general" ? "nav-link-active flex-1" : "nav-link flex-1"
        }
      >
        <Tv width={20} />
        <p className="line-clamp-1 hidden xl:flex"> {navLabels?.GENERAL}</p>
      </Link>
      <Link
        href={"/health"}
        className={
          pathName === "/health" ? "nav-link-active flex-1" : "nav-link flex-1"
        }
      >
        <Activity width={20} />
        <p className="line-clamp-1 hidden xl:flex"> {navLabels?.HEALTH}</p>
      </Link>
      <Link
        href={"/science"}
        className={
          pathName === "/science" ? "nav-link-active flex-1" : "nav-link flex-1"
        }
      >
        <Thermometer width={20} />
        <p className="line-clamp-1 hidden xl:flex"> {navLabels?.SCIENCE}</p>
      </Link>
      <Link
        href={"/sports"}
        className={
          pathName === "/sports" ? "nav-link-active flex-1" : "nav-link flex-1"
        }
      >
        <Dribbble width={20} />
        <p className="line-clamp-1 hidden xl:flex"> {navLabels?.SPORTS}</p>
      </Link>
      <Link
        href={"/technology"}
        className={
          pathName === "/technology"
            ? "nav-link-active flex-1"
            : "nav-link flex-1"
        }
      >
        <SmartPhone width={20} />
        <p className="hidden xl:flex "> {navLabels?.TECHNOLOGY}</p>
      </Link>
      <div className=" flex items-center justify-center gap-2 self-center">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;
