import InfinteFetch from "@/components/Infinite fetch game/infinteFetch";
import { decode } from "next-auth/jwt";

const Page = ({ params }) => {
  return (
    <div>
      <h1 className={'text-[1.75rem] leading-[4.2rem] px-20 pt-12  font-bold"'}>
        Search For "{decodeURI(params.slug)}"
      </h1>
      <InfinteFetch url={`search=${params?.slug}`} />
    </div>
  );
};

export default Page;
