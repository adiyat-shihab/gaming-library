import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GamesList = ({ game }) => {
  console.log(game);
  return (
    <Card className="bg-[#0D0F12] z-10  rounded-[0.75rem] hover:border-primaryOrange hover:border-[1px]  border-[#242829] w-fit text-white  transition">
      <CardHeader className={"p-0"}>
        <Image
          src={game.background_image}
          width={500}
          height={500}
          alt={game.name}
          priority={true}
          quality={100}
          className="object-cover transition duration-500  w-[382.75px] h-[215.3px] rounded-t-[0.75rem] "
        />
      </CardHeader>
      <CardContent className="space-y-4 relative flex justify-between items-start">
        <h1
          className={
            "text-[1.23rem] pt-4 w-[80%] font-medium  leading-[1.95rem]"
          }
        >
          {game.name}
        </h1>
        <Badge className={`h-fit rounded-md py-2 bg-primaryOrange  text-black`}>
          {game.rating}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default GamesList;
