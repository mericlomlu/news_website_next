import React from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";
import Newspaper from "../../public/assets/newspaper.svg";

const Navbar = () => {
  return (
    <nav className="bg-amber-800 bg-rose-400 flex h-16 w-screen items-center justify-center gap-4">
      <ul className="flex h-16 w-screen items-center justify-center gap-4">
        <li className="justify-self-start">
          <Image src={Newspaper} alt="Newspaper" width={32} height={32} />
        </li>
        <li className="flex items-start justify-center gap-3 justify-self-end">
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;