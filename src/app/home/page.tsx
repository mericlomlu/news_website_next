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

  useEffect(() => {
    const config = setConfig("get", URLS.ENG.TOP_HEADLINES);
    dispatch(fetchTopHeadlines(config));
  }, []);
  return (
    <div className="flex min-h-[55rem] w-full flex-col items-center justify-center gap-4">
      <p>Home Page</p>
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
