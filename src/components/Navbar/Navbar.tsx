"use client";
import React, { useEffect, useState } from "react";
import { ThemeSwitcher } from "@/components/Navbar/ThemeSwitcher";
import Image from "next/image";
import Newspaper from "../../../public/assets/newspaper.svg";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useAppSelector } from "@/redux/hooks";
import {
  english_nav_labels,
  nav_href,
  turkish_nav_labels,
} from "@public/constants/constants";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const pathName = usePathname();
  const language = useAppSelector((state) => state.language.language);
  const [navLabels, setNavLabels] = useState<string[]>([]);
  const [navHrefs, setNavHrefs] = useState<string[]>(nav_href);

  useEffect(() => {
    if (language === "TR") {
      setNavLabels(turkish_nav_labels);
    } else {
      setNavLabels(english_nav_labels);
    }
  }, [language]);

  return (
    <nav className="fixed top-0 z-50 flex max-h-[50px] min-h-[50px]  w-full justify-center gap-4 bg-regentBlue-400 px-4 dark:bg-regentBlue-700">
      <Image
        priority
        src={Newspaper}
        alt="Newspaper"
        width={0}
        height={0}
        className="h-[40px] w-auto self-center justify-self-center"
      />
      {navLabels?.map((element: any, index: number) => (
        <NavbarLink
          pathName={pathName}
          index={index}
          label={element}
          href={navHrefs[index]}
          key={index}
        />
      ))}
      <div className=" flex items-center justify-center gap-2 self-center">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;
