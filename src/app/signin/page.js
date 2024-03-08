"use client";
import { useSession, signIn, signOut } from "next-auth/react";
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

const Page = () => {
  return (
    <div
      className={" h-screen w-screen bg-cover "}
      style={{ backgroundImage: "url('registerBackground.jpg')" }}
    >
      <Card
        className={
          " text-white border-none bg-[#151B25] w-max mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2   shadow-lg"
        }
      >
        <CardHeader>
          <CardTitle className={" text-primaryWhite"}>Sign In</CardTitle>
          <CardDescription>Build You Awesome Game Library</CardDescription>
        </CardHeader>
        <CardContent className={"space-y-4"}>
          <Button
            className={"bg-red-500 hover:bg-red-600 w-full  "}
            onClick={() => signIn("google")}
          >
            Google Login
          </Button>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default Page;
