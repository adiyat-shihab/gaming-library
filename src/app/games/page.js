import InfinteFetch from "@/components/Infinite fetch game/infinteFetch";
import GameNavbar from "@/components/gameList/GameNavbar";

const Page = () => {
  return (
    <div>
      <GameNavbar />
      <InfinteFetch url={"metacritic=70,100&page_size=12"} />
    </div>
  );
};

export default Page;
