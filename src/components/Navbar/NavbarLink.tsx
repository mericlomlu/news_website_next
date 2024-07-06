import { returnNavIcons } from "@public/functions/functions";
import Link from "next/link";
import React from "react";

type NavbarLinkProps = {
  href: string;
  label: string;
  pathName: string;
  index: number;
};

const NavbarLink = (props: NavbarLinkProps) => {
  return (
    <div className="h-full flex-1 self-end">
      <Link
        href={props?.href}
        className={
          props?.pathName === props?.href ? "nav-link-active" : "nav-link"
        }
      >
        {returnNavIcons(props?.index)}
        <p className="line-clamp-1">{props?.label}</p>
      </Link>
    </div>
  );
};
export default NavbarLink;
