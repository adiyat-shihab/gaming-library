"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const GameNavbar = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      <Link href={"/games"}>
        <Button>Top Picks</Button>
      </Link>
      <Link href={"/games/new-releases"} prefetch={true}>
        <Button>New Releases</Button>
      </Link>
    </div>
  );
};

export default GameNavbar;
