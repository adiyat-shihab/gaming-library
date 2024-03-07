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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Page = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className={""}>
      <Card className={"bg-[#141416] text-white w-max mx-auto"}>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Build You Awesome Game Library</CardDescription>
        </CardHeader>
        <CardContent className={"space-y-4"}>
          <div className={"flex gap-3"}>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label>First Name</Label>
              <Input
                type="text"
                placeholder="First Name"
                className={"text-black"}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label>Last Name</Label>
              <Input
                type="text"
                placeholder="Last Name"
                className={"text-black"}
              />
            </div>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label>Email</Label>
            <Input type="email" placeholder="Email" className={"text-black"} />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Password"
              className={"text-black"}
            />
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Button onClick={() => signIn("google")}>Google Login</Button>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
};

export default Page;
