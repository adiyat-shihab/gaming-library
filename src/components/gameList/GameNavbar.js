"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const GameNavbar = () => {
  const path = usePathname();
  return (
    <div className={"flex justify-between px-10 pt-12 z-10 "}>
      <h1 className={"text-[3.5rem] leading-[4.2rem]  font-semibold"}>Games</h1>
      <div>
        <Link href={"/dashboard/games"}>
          <motion.button
            className={` ${
              path === "/dashboard/games" && "bg-primaryOrange"
            } rounded-[50rem] px-6 py-[0.78rem] transition`}
            whileTap={{
              scale: 0.7,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
            whileHover={{ scale: 1 }}
          >
            Best Games
          </motion.button>
        </Link>
        <Link href={"/dashboard/games/new-releases"}>
          <motion.button
            className={` ${
              path === "/dashboard/games/new-releases" && "bg-primaryOrange"
            } rounded-[50rem] px-6 py-[0.78rem] transition-all`}
            whileTap={{
              scale: 0.7,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
            whileHover={{ scale: 1 }}
          >
            New Releases
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default GameNavbar;
