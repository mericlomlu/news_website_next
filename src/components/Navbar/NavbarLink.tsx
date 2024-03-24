"use client";
import Link from "next/link";
import React from "react";

type NavbarLinkProps = {
  href: string;
  icon: any;
  label: string;
  pathName: string;
};

const NavbarLink = (props: NavbarLinkProps) => {
  return (
    <div className="flex-2 items-center justify-center">
      <Link
        href={props?.pathName}
        className={
          props?.pathName === props?.href ? "nav-link-active " : "nav-link"
        }
      >
        {props?.icon}
        <p className="line-clamp-1">{props?.label}</p>
      </Link>
    </div>
  );
};
export default NavbarLink;
