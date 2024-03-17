import { ScrollArea } from "@/components/ui/scroll-area";
import GameNavbar from "@/components/gameList/GameNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <ScrollArea className={"h-[90.7vh] z-10  w-full px-8"}>
          <GameNavbar />
          {children}
        </ScrollArea>
      </div>
    </div>
  );
};

export default Layout;
