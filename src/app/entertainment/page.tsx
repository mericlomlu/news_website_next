"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setConfig } from "@public/functions/functions";
import { Loader } from "react-feather";
import { URLS } from "@/redux/helpers/api-urls";
import NewsLayout from "@/components/NewsLayout";
import {
  fetchNews,
  selectNewsData,
  selectNewsLoading,
} from "@/redux/reducers/newsReducer";
import { selectLanguage } from "@/redux/reducers/languageReducer";

export default function Page() {
  const dispatch = useAppDispatch();
  const newsData = useAppSelector(selectNewsData);
  const loading = useAppSelector(selectNewsLoading);
  const language = useAppSelector(selectLanguage);

  useEffect(() => {
    let config;
    if (language === "TR") {
      config = setConfig("get", URLS.TR.ENTERTAINMENT);
    } else {
      config = setConfig("get", URLS.ENG.ENTERTAINMENT);
    }
    dispatch(fetchNews(config));
  }, [language]);
  return (
    <>
      {loading && <Loader />}
      {!loading && <NewsLayout newsData={newsData} />}
    </>
  );
}
