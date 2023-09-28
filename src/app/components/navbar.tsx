import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import {Button, Menu} from 'antd';
import {
    CustomerServiceTwoTone,
    ExperimentTwoTone,
    FundTwoTone,
    HomeTwoTone,
    MedicineBoxTwoTone, PushpinTwoTone, RocketTwoTone, TrophyTwoTone,

} from "@ant-design/icons";
const items: MenuProps['items'] = [
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
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}  className="w-full flex justify-end items-center gap-4">
            <Button></Button>
        </Menu>
    );
}
export default Navbar;

