import InfinteFetch from "@/components/Infinite fetch game/infinteFetch";

const Page = () => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear();
  return (
    <div>
      <InfinteFetch url={`dates=${year}-01-01,${year}-${month}-${day}`} />
    </div>
  );
};

export default Page;
