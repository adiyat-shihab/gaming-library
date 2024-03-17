import GameSideBar from "@/components/gameList/GameSideBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import GameNavbar from "@/components/gameList/GameNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={"  bg-black text-white"}>
        <div className={"flex gap-7"}>
          <GameSideBar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
