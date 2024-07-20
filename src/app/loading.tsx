"use client";

import { Loader } from "react-feather";

export default function Loading() {
  return (
    <div className="flex min-h-[55rem] w-full items-center justify-center">
      <Loader />
    </div>
  );
}
