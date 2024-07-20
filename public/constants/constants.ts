import {
  Activity,
  BriefCase,
  Dribbble,
  HeadPhones,
  Home,
  SmartPhone,
  Thermometer,
  Tv,
} from "./icons";
import something_went_wrong from "../assets/something_went_wrong.svg";

export const texts = {
  TR: {
    TOP_HEADLINES: "Anasayfa",
    BUSINESS: "İş Haberleri",
    ENTERTAINMENT: "Eğlence Haberleri",
    GENERAL: "Genel Haberler",
    HEALTH: "Sağlık Haberleri",
    SCIENCE: "Bilim Haberleri",
    SPORTS: "Spor Haberleri",
    TECHNOLOGY: "Teknoloji Haberleri",
  },
  ENG: {
    TOP_HEADLINES: "Home Page",
    BUSINESS: "Business News",
    ENTERTAINMENT: "Entertainment News",
    GENERAL: "General News",
    HEALTH: "Health News",
    SCIENCE: "Science News",
    SPORTS: "Sports News",
    TECHNOLOGY: "Technology News",
  },
};

export const turkish_nav_labels = [
  "Anasayfa",
  "İş Haberleri",
  "Eğlence Haberleri",
  "Genel Haberler",
  "Sağlık Haberleri",
  "Bilim Haberleri",
  "Spor Haberleri",
  "Teknoloji Haberleri",
];

export const english_nav_labels = [
  "Home Page",
  "Business News",
  "Entertainment News",
  "General News",
  "Health News",
  "Science News",
  "Sports News",
  "Technology News",
];

export const nav_href = [
  "/home",
  "/business",
  "/entertainment",
  "/general",
  "/health",
  "/science",
  "/sports",
  "/technology",
];

export const nav_icons = [
  Home,
  BriefCase,
  HeadPhones,
  Tv,
  Activity,
  Thermometer,
  Dribbble,
  SmartPhone,
];

export const SOMETHING_WENT_WRONG = something_went_wrong;
