import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const GamesList = ({ game }) => {
  return (
    <Card className="bg-[#0D0F12] hover:border-[#F6571E] border-[#242829] w-fit text-white hover:scale-105 transition">
      <CardHeader>
        <Image
          src={game.background_image}
          width={500}
          height={500}
          alt={game.name}
          quality={100}
          className="object-cover w-[382.75px] h-[215.3px] rounded-md"
        />
      </CardHeader>
      <CardContent className="space-y-4 relative">
        <h1>{game.name}</h1>
      </CardContent>
    </Card>
  );
};

export default GamesList;
