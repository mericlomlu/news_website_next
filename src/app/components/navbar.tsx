import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import {Menu} from 'antd';
import {
    CustomerServiceTwoTone,
    ExperimentTwoTone,
    FundTwoTone,
    HomeTwoTone,
    MedicineBoxTwoTone, PushpinTwoTone, RocketTwoTone, TrophyTwoTone,

} from "@ant-design/icons";
import newspaper from "../assets/newspaper.svg";
import Image from "next/image";
const items: MenuProps['items'] = [
    {
        label: <Image src={newspaper} alt="Newspaper" width={32} height={32}/>,
        key: "newspaper",
        disabled: true
    },
    {
        label: 'Home',
        key: 'home',
        icon: <HomeTwoTone />
    },
    {
        label: 'Business',
        key: 'business',
        icon: <FundTwoTone />,
    },
    {
        label: 'Entertainment',
        key: 'entertainment',
        icon: <CustomerServiceTwoTone />,
    },
    {
        label: 'General',
        key: 'General',
        icon: <PushpinTwoTone />,
    },
    {
        label: 'Health',
        key: 'health',
        icon: <MedicineBoxTwoTone />,
    },
    {
        label: 'Science',
        key: 'science',
        icon: <ExperimentTwoTone />,
    },
    {
        label: 'Sports',
        key: 'sports',
        icon: <TrophyTwoTone />,
    },
    {
        label: 'Technology',
        key: 'technology',
        icon:  <RocketTwoTone />,
    },
];

const Navbar = () => {
    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return(
       <div className="flex">
           <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}  className="w-full flex items-center min-lg:gap-4 gap-2">

           </Menu>
       </div>
    );
}
export default Navbar;

