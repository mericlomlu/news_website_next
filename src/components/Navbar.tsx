import React from "react";
import {ThemeSwitcher} from "@/components/ThemeSwitcher";
import Image from "next/image";
import Newspaper from '../../public/assets/newspaper.svg';


const Sun = require('react-feather/dist/icons/sun').default;
const Moon = require('react-feather/dist/icons/moon').default;
const Navbar = () => {
  return (
    <nav className="w-screen h-16 bg-amber-800 flex justify-center items-center gap-4">
        <ul  className="w-screen h-16 flex justify-center items-center gap-4">
            <li className="justify-self-start">
                <Image src={Newspaper} alt="Newspaper" width={32} height={32} />
            </li>
            <li className="flex justify-center items-start gap-3 justify-self-end">

                    <Moon className="dark:text-slate-50 text-[#0d1117] text-xl"/>
                    <ThemeSwitcher />
                    <Sun className="dark:text-slate-50 text-[#0d1117] text-xl"/>
            </li>
        </ul>


    </nav>
  );
};
export default Navbar;