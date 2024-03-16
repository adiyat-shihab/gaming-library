import GameSideBar from "@/components/gameList/GameSideBar";
import { ScrollArea } from "@/components/ui/scroll-area";

const Layout = ({ children }) => {
  return (
    <div className={"px-8 py-11 bg-black text-white"}>
      <div className={"flex gap-7"}>
        <GameSideBar />
        <div>
          <ScrollArea className={"h-screen  w-full px-8"}>
            {children}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Layout;
