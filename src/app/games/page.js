"use client";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameLoader from "@/components/GameLoader";
import GamesList from "@/components/gameList/GamesList";

const Page = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setError(null);

    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_KEY}&metacritic=70,100&page_size=8&page=${page}`,
      );
      const data = await response.json();

      setItems((prevItems) => [...prevItems, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    return () => {
      setItems([]);
      fetchData().catch((err) => console.log(err));
    };
  }, []);

  return (
    <div className="bg-black">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={true}
        loader={<GameLoader />}
        endMessage={<p>No more data to load.</p>}
      >
        <ul className="grid grid-cols-4 gap-7 pt-[3.75rem]">
          {items.map((item, index) => (
            <GamesList game={item} key={index} />
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default Page;
