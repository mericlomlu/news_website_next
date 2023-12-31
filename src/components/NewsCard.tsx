"use client";
import React, { useState } from "react";
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
    <div className="neonCarrot-default-gradient flex h-96 w-72 min-w-[14rem] basis-1/2 flex-col items-center justify-between gap-2 rounded-xl border-4 border-neonCarrot-500 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
      <div className="flex h-2/5 w-full">
        <Image
          src={props?.imgUrl || something_went_wrong}
          width={284}
          height={158}
          alt="Something_Went_Wrong"
          style={{
            objectFit: "cover",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            float: "left",
          }}
        />
      </div>
      <div className="flex h-2/5 w-full flex-col gap-4 px-4 pt-2">
        <div className="flex flex-row justify-between self-stretch ">
          <p className="line-clamp-1 text-left text-sm font-thin text-zinc-900">
            {props?.sourceName || "Google"}
          </p>
          <p className="line-clamp-1 text-right text-sm font-thin text-zinc-900">
            {props?.publishedAt || "11/04/1996"}
          </p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <p className="text-m line-clamp-1  text-left font-bold text-zinc-950">
            {props?.title || "Test Başlığı"}
          </p>
          <p className="line-clamp-3  text-left text-sm font-thin text-zinc-900">
            {props?.description || testDescription}
          </p>
        </div>
      </div>
      <div className="flex h-1/5 w-full flex-row items-center justify-between justify-self-end  p-4">
        <p className="... line-clamp-1 overflow-hidden text-clip text-left text-sm font-thin text-zinc-900">
          {props?.author?.startsWith("http")
            ? props?.sourceName
            : props?.author || props.sourceName}
        </p>
        {isClicked ? (
          <button
            className="zinc-default-gradient flex items-center justify-center self-center justify-self-end rounded-md border-2 border-zinc-50 p-2 dark:border-neonCarrot-950  max-[1280px]:h-10 max-[1280px]:w-20"
            onClick={() => onClick()}
          >
            <a href={props?.url} target="_blank">
              {buttonLabel}
            </a>
          </button>
        ) : (
          <button
            className="regentBlue-default-gradient flex items-center justify-center self-center justify-self-end rounded-md border-2 border-zinc-50 p-2 dark:border-neonCarrot-950  max-[1280px]:h-10 max-[1280px]:w-20"
            onClick={() => onClick()}
          >
            <a href={props?.url} target="_blank">
              {buttonLabel}
            </a>
          </button>
        )}
      </div>
    </div>
  );
};
