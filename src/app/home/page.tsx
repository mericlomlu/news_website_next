"use client";
import React, { useEffect } from "react";
import { NewsCard } from "@/components/NewsCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchTopHeadlines,
  selectTopHeadlines,
  selectTopHeadlinesLoading,
} from "@/redux/reducers/topHeadlinesReducer";
import { setConfig } from "../../../public/functions/functions";
import { Loader } from "react-feather";
import { URLS } from "@/redux/helpers/api-urls";

export default function Page() {
  const dispatch = useAppDispatch();
  const topHeadlinesData = useAppSelector(selectTopHeadlines);
  const loading = useAppSelector(selectTopHeadlinesLoading);
  const language = useAppSelector((state) => state.language.language);

  useEffect(() => {
    let config;
    if (language === "TR") {
      config = setConfig("get", URLS.TR.TOP_HEADLINES);
    } else {
      config = setConfig("get", URLS.ENG.TOP_HEADLINES);
    }
    const response = dispatch(fetchTopHeadlines(config));
  }, [language]);
  return (
    <div className="flex min-h-[55rem] w-full grow-0 flex-row flex-wrap items-center justify-center gap-12 pb-32 pt-24">
      {loading && <Loader />}
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
