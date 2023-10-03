"use client";
import React, { useState } from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";
import Newspaper from "../../public/assets/newspaper.svg";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import {
  CustomerServiceTwoTone,
  ExperimentTwoTone,
  HomeTwoTone,
  MedicineBoxTwoTone,
  ProjectTwoTone,
  PushpinTwoTone,
  RocketTwoTone,
  TrophyTwoTone,
} from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    label: (
      <Image
        src={Newspaper}
        alt="Newspaper"
        width={40}
        height={40}
        className="self-center"
      />
    ),
    key: "logo",
    disabled: true,
  },
  {
    label: (
      <Link href={"/home"} className="nav-link">
        <HomeTwoTone />
        <p className="hidden xl:flex"> Home Page</p>
      </Link>
    ),
    key: "home",
  },
  {
    label: (
      <Link href={"/business"} className="nav-link">
        <ProjectTwoTone />
        <p className="hidden xl:flex"> Business News</p>
      </Link>
    ),
    key: "business",
  },
  {
    label: (
      <Link href={"/entertainment"} className="nav-link">
        <CustomerServiceTwoTone />
        <p className="hidden xl:flex"> Entertainment News</p>
      </Link>
    ),
    key: "entertainment",
  },
  {
    label: (
      <Link href={"/general"} className="nav-link">
        <PushpinTwoTone />
        <p className="hidden xl:flex"> General News</p>
      </Link>
    ),
    key: "general",
  },
  {
    label: (
      <Link href={"/health"} className="nav-link">
        <MedicineBoxTwoTone />
        <p className="hidden xl:flex"> Health News</p>
      </Link>
    ),
    key: "health",
  },
  {
    label: (
      <Link href={"/science"} className="nav-link">
        <ExperimentTwoTone />
        <p className="hidden xl:flex"> Science News</p>
      </Link>
    ),
    key: "science",
  },
  {
    label: (
      <Link href={"/sports"} className="nav-link">
        <TrophyTwoTone />
        <p className="hidden xl:flex"> Sports News</p>
      </Link>
    ),
    key: "sports",
  },
  {
    label: (
      <Link href={"/technology"} className="nav-link">
        <RocketTwoTone />
        <p className="hidden xl:flex"> Technology News</p>
      </Link>
    ),
    key: "technology",
  },
  {
    label: <ThemeSwitcher />,
    key: "theme-switcher",
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Navbar;