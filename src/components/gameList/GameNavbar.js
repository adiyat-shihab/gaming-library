"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const GameNavbar = () => {
  const path = usePathname();
  return (
    <div className={"pt-12 "}>
      <Link href={"/games"}>
        <motion.button
          className={` ${
            path === "/games" && "bg-primaryOrange"
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
      <Link href={"/games/new-releases"} prefetch={true}>
        <motion.button
          className={` ${
            path === "/games/new-releases" && "bg-primaryOrange"
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
  );
};

export default GameNavbar;
