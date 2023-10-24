"use client";
import axios from "axios";
import { URLS } from "../../../public/constants/api-urls";
import React, { useEffect } from "react";
import { NewsCard } from "@/components/NewsCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchTopHeadlines } from "@/redux/reducers/topHeadlinesReducer";
import { setConfig } from "../../../public/functions/functions";

export default function Page() {
  const dispatch = useAppDispatch();
  const topHeadlinesData = useAppSelector(
    (state) => state.topHeadlines.topHeadlinesData,
  );
  const language = useAppSelector((state) => state.language.language);

  useEffect(() => {
    let config;
    if (language === "TR") {
      config = setConfig("get", URLS.TR.TOP_HEADLINES);
    } else {
      config = setConfig("get", URLS.ENG.TOP_HEADLINES);
    }
    dispatch(fetchTopHeadlines(config));
  }, [language]);
  return (
    <div className="flex min-h-[55rem] w-full flex-row items-center justify-center gap-12 pt-24 flex-wrap grow-0 pb-32">
      {topHeadlinesData?.map((element: any) => (
        <NewsCard
          title={element?.title}
          description={element?.description}
          url={element?.url}
          imgUrl={element?.urlToImage}
          publishedAt={element?.publishedAt}
          sourceName={element?.source?.name}
          author={element?.author}
        />
      ))}
    </div>
  );
}
