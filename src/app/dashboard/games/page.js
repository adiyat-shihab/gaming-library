import InfinteFetch from "@/components/Infinite fetch game/infinteFetch";

const Page = () => {
  return (
    <div>
      <InfinteFetch url={"metacritic=70,100&page_size=12"} />
    </div>
  );
};

export default Page;
