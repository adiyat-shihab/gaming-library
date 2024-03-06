import { igdb } from "@/component/igdb";

export default async function Home() {
  const data = await igdb();
  console.log(data);
  return <></>;
}
