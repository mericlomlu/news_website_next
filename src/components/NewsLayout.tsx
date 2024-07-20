import React from "react";
import Image from "next/image";
import { NewsCard } from "@/components/NewsCard";
import { convertDate } from "@public/functions/functions";
import { Loader } from "react-feather";
import { SOMETHING_WENT_WRONG } from "@public/constants/constants";

interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: null; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

interface NewsLayoutProps {
  newsData: Article[] | null;
}

export default function NewsLayout(props: NewsLayoutProps) {
  return (
    <div className="flex min-h-[55rem] w-full grow-0 flex-row flex-wrap items-center justify-center gap-12 pb-32 pt-24 ">
      {props?.newsData &&
        props?.newsData?.length > 0 &&
        props?.newsData?.map(
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
      {!props?.newsData && (
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
