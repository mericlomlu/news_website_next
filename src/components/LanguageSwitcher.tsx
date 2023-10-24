"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import { setLanguage } from "@/redux/reducers/languageReducer";

export const LanguageSwitcher = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language.language);

  const switchLanguage = () => {
    if (language === "TR") {
      dispatch(setLanguage("ENG"));
    } else {
      dispatch(setLanguage("TR"));
    }
  };

  return (
    <button
      className="neonCarrot-default-gradient flex h-9 w-9 items-center justify-center self-center rounded-md border-2 border-zinc-50 p-2 dark:border-neonCarrot-950"
      onClick={() => switchLanguage()}
    >
      {language === "TR" ? "US" : "TR"}
    </button>
  );
};
