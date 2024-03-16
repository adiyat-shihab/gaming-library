import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const GameLoader = () => {
  return (
    <div className={"grid grid-cols-4 gap-7 pt-8"}>
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </div>
  );
};

export default GameLoader;

const Loading = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className=" w-[24rem] h-[263.3px]  rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};
