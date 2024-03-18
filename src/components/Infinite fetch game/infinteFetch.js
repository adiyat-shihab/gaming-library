"use client";
import InfiniteScroll from "react-infinite-scroll-component";
import GameLoader from "@/components/GameLoader";
import GamesList from "@/components/gameList/GamesList";
import { useEffect, useState } from "react";
import axios from "axios";

const InfinteFetch = ({ url }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    try {
      axios
        .get(
          `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_KEY}&${url}&page=${page}`,
        )
        .then((r) => setItems((prevItems) => [...prevItems, ...r.data.results]))
        .catch((e) => console.log(e));

      setPage((prevPage) => prevPage + 1);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_KEY}&${url}&page=${page}`,
        )
        .then((r) => {
          setItems(r.data.results);
          setPage((prevPage) => prevPage + 1);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="bg-black px-20">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={true}
        loader={<GameLoader />}
        endMessage={<p>No more data to load.</p>}
        className={"z-10"}
      >
        <ul className="grid z-10 grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-7 pt-[3.75rem]">
          {items.map((item, index) => (
            <GamesList game={item} key={index} />
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};
export default InfinteFetch;
