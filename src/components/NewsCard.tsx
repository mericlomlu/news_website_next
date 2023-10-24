"use client";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "../../public/constants/icons";
import Image from "next/image";

const something_went_wrong = require("../../public/assets/something_went_wrong.svg");

const testDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra." +
  "Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.";

type NewsCardProps = {
  title?: string;
  description?: string;
  url?: string;
  imgUrl?: string;
  publishedAt?: string;
  sourceName?: string;
  author?: string;
};

export const NewsCard = (props: NewsCardProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [buttonLabel, setButtonLabel] = useState<string>("Git");

  const onClick = () => {
    setIsClicked(true);
    setButtonLabel("Okundu");
  };

  return (
    <div className="flex h-96 w-72 flex-col items-center gap-2 rounded-xl border-4 border-neonCarrot-500">
      <Image
        src={props?.imgUrl || something_went_wrong}
        width={284}
        height={158}
        alt="Something_Went_Wrong"
        style={{
          objectFit: "contain",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
      <div className="flex flex-row justify-around self-stretch px-4">
        <p className="text-left text-sm font-thin text-zinc-900">
          {props?.sourceName || "Google"}
        </p>
        <p className="text-right text-sm font-thin text-zinc-900">
          {props?.publishedAt || "11/04/1996"}
        </p>
      </div>
      <p className="text-m px-4 text-center font-bold text-zinc-950 line-clamp-1">
        {props?.title || "Test Başlığı"}
      </p>
      <p className="line-clamp-3 px-4 text-center text-sm font-thin text-zinc-900">
        {props?.description || testDescription}
      </p>
      <div className="flex flex-row items-center justify-around w-full justify-self-end pt-4">
        <p className="text-left text-sm font-thin text-zinc-900">
          {props?.author || "Meriç Lomlu"}
        </p>
        <button
          className="neonCarrot-default-gradient flex items-center justify-center self-center rounded-md border-2 border-zinc-50 p-2 dark:border-neonCarrot-950 max-[1280px]:h-10  max-[1280px]:w-20"
          onClick={() => onClick()}
        >
          <a href={props?.url}>{buttonLabel}</a>
        </button>
      </div>
    </div>
  );
};
