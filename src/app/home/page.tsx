"use client";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { URLS } from "../../../public/constants/api-urls";
import { getTopHeadlines } from "@/redux/actions/topHeadlinesActions";
import React, { useEffect } from "react";

export default function Page() {
  const topHeadlinesData = useSelector(
    (state: any) => state?.topHeadlines?.topHeadlinesData,
  );
  const dispatch = useDispatch();

  const fetchTopHeadlines = async () => {
    await axios.get(URLS.TR.TOP_HEADLINES).then((res) => {
      dispatch(getTopHeadlines(res.data));
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchTopHeadlines();
    console.log(topHeadlinesData);
  }, []);
  return (
    <div className="flex min-h-[55rem] w-full flex-col items-center justify-center gap-4">
      <p>Home Page</p>
    </div>
  );
}