"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { NewsCard } from "@/components/NewsCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchTopHeadlines,
  selectTopHeadlines,
  selectTopHeadlinesLoading,
} from "@/redux/reducers/topHeadlinesReducer";
import { convertDate, setConfig } from "../../../public/functions/functions";
import { Loader } from "react-feather";
import { URLS } from "@/redux/helpers/api-urls";
import { SOMETHING_WENT_WRONG } from "@public/constants/constants";

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

    console.log("topHeadlinesData: ", topHeadlinesData);
  }, [language]);
  return (
    <div className="flex min-h-[55rem] w-full grow-0 flex-row flex-wrap items-center justify-center gap-12 pb-32 pt-24">
      {loading && <Loader />}
      {topHeadlinesData &&
        topHeadlinesData?.length > 0 &&
        topHeadlinesData?.map(
          (element: any, index: number) =>
            element?.title !== "[Removed]" && (
              <NewsCard
                title={element?.title}
                description={element?.description}
                url={element?.url}
                imgUrl={element?.urlToImage}
                publishedAt={convertDate(element?.publishedAt)}
                sourceName={element?.source?.name}
                author={element?.author}
                key={index}
              />
            ),
        )}
      {!topHeadlinesData && (
        <Image
          src={SOMETHING_WENT_WRONG}
          priority
          width={1920}
          height={1080}
          alt="Something_Went_Wrong"
          className="object-fit absolute bottom-0 z-0 rounded-[8px]"
        />
      )}
    </div>
  );
}
