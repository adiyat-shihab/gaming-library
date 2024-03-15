import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const GamesList = ({ game }) => {
  return (
    <Card className="bg-[#0D0F12] rounded-[1.5rem] hover:border-[#F6571E] border-[#242829] w-fit text-white hover:scale-105 transition">
      <CardHeader>
        <Image
          src={game.background_image}
          width={500}
          height={500}
          alt={game.name}
          quality={100}
          className="object-cover w-[382.75px] h-[215.3px] rounded-[0.75rem]"
        />
      </CardHeader>
      <CardContent className="space-y-4 relative">
        <h1 className={"text-[1.5rem] font-semibold  leading-[1.95rem]"}>
          {game.name}
        </h1>
      </CardContent>
    </Card>
  );
};

export default GamesList;
