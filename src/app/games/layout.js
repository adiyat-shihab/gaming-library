import { Button } from "@/components/ui/button";
import Link from "next/link";
import GameNavbar from "@/components/gameList/GameNavbar";

const Layout = ({ children }) => {
  return (
    <div className={"px-8 py-11 bg-black text-white"}>
      <h1 className={"font-bold leading-[4.2rem] text-[3.2rem]"}>Games</h1>
      <GameNavbar />
      {children}
    </div>
  );
};

export default Layout;
