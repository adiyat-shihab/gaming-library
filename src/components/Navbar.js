"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Image from "next/image";

const Navbar = () => {
  const { data } = useSession();
  const [games, setGames] = useState([]);
  console.log(games);
  const handleOnSearch = async (string) => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_KEY}&search=${string}&page_size=5`,
    );
    setGames(data.results);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const formatResult = (item) => {
    console.log(item);
    return (
      <div className={"z-50 flex items-center gap-6 py-2"}>
        {item?.background_image && (
          <Image
            src={item?.background_image}
            alt={"background image"}
            width={60}
            height={60}
            priority={true}
            quality={71}
          />
        )}
        <p className={"text-white"}>{item.name}</p>
      </div>
    );
  };

  return (
    <div className={"w-full h-[94px] relative"}>
      <div
        className={
          "bg-[#0D0F12] z-40  fixed top-0 left-0 right-0   flex py-6 px-20 items-center justify-between text-white"
        }
      >
        <h1>brand name</h1>
        <div className={"flex gap-32 "}>
          {/*<Input*/}
          {/*  className={*/}
          {/*    "w-[44rem] px-[1.31rem] bg-black focus-visible:border-primaryOrange  text-white border-gray-600  rounded-full placeholder:text-[#FFFFFF80] border-2"*/}
          {/*  }*/}
          {/*  type={"text"}*/}
          {/*  placeholder={"Search"}*/}
          {/*  onchange={(e) => console.log(e.target.value)}*/}
          {/*/>*/}
          <div className={"relative"}>
            <ReactSearchAutocomplete
              items={games}
              onSearch={handleOnSearch}
              onSelect={handleOnSelect}
              autoFocus
              formatResult={formatResult}
              className={" w-[44rem] px-[1.31rem]  focus-visible"}
              placeholder={"Search"}
              styling={{
                backgroundColor: "#0D0F12",
                border: "1px solid #242829",
                color: "white",
                hoverBackgroundColor: "#242829",
                zIndex: 50,
              }}
            />
          </div>

          <Avatar>
            <AvatarImage src={data?.user?.image} />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
