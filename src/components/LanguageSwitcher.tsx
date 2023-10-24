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
      className="neonCarrot-default-gradient flex items-center justify-center self-center rounded-md border-2 border-zinc-50 p-2 dark:border-neonCarrot-950 max-[1280px]:h-9  max-[1280px]:w-9"
      onClick={() => switchLanguage()}
    >
      {language === "TR" ? "US" : "TR"}
    </button>
  );
};
