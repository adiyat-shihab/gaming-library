import { ScrollArea } from "@/components/ui/scroll-area";
import GameNavbar from "@/components/gameList/GameNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <GameNavbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
