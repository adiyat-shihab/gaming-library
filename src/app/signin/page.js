"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Ripple } from "react-awesome-spinners";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Page = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div
      className={cn(
        " h-screen w-screen bg-cover ",
        loading && "opacity-95 brightness-50",
      )}
      // style={{ backgroundImage: "url('registerBackground.jpg')" }}
    >
      <Image
        alt="Mountains"
        src={"/registerBackground.jpg"}
        quality={100}
        className={"hidden lg:block"}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "left",
        }}
      />
      <Card
        className={
          " text-white border-none bg-[#151B25] w-max mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2   shadow-lg"
        }
      >
        <CardHeader>
          <CardTitle className={" text-primaryWhite"}>Sign In</CardTitle>
          <CardDescription>Build You Awesome Game Library</CardDescription>
        </CardHeader>
        <CardContent className={"space-y-4 relative"}>
          <Button
            className={"bg-red-500 hover:bg-red-600 w-full  "}
            onClick={() => {
              setLoading(true);
              signIn("google").then(() => setLoading(false));
            }}
          >
            Google Login
          </Button>
          <div
            className={cn(
              "absolute  left-1/2 -top-1/2  -translate-x-1/2 -translate-y-1/2 ",
              loading || "hidden",
            )}
          >
            {" "}
            <Ripple color={"#E10032"} />
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default Page;
