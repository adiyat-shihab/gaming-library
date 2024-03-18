import GameSideBar from "@/components/gameList/GameSideBar";
import Navbar from "@/components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={"  bg-black text-white"}>
        <div className={"flex gap-7 relative"}>
          <GameSideBar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
