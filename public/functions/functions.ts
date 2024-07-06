import React from "react";
import { nav_icons } from "@public/constants/constants";

export const setConfig = (method: string, url: string) => {
  return {
    method,
    url: url,
  };
};

export const returnNavIcons = (index: number) => {
  const icon = React?.createElement(nav_icons[index], { width: 20 });
  return icon;
};
