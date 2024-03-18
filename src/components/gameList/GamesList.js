import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const GamesList = ({ game }) => {
  return (
    <Card className="bg-[#0D0F12] z-10  rounded-[0.75rem] hover:border-primaryOrange hover:border-[1px]  border-[#242829] w-fit text-white  transition-all duration-300">
      <CardHeader className={"p-0"}>
        <Image
          src={game.background_image || ""}
          width={500}
          height={500}
          alt={game.name}
          priority={true}
          quality={100}
          className="object-cover transition duration-500  w-[382.75px] h-[215.3px] rounded-t-[0.75rem] "
        />
      </CardHeader>
      <CardContent className=" relative ">
        <div className={"flex justify-between space-y-4 relative items-start"}>
          <h1
            className={
              "text-[1.23rem] pt-4 cursor-pointer w-[80%] font-medium  leading-[1.95rem]"
            }
          >
            {game.name}
          </h1>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge
                  variant={"outline"}
                  className={`h-fit rounded-md  py-2 cursor-pointer ${
                    game.rating > 3
                      ? " text-primaryOrange border-primaryOrange"
                      : game.rating < 1
                      ? "border-red-500 text-red-500"
                      : "border-yellow-600 text-yellow-600"
                  } ${game.rating === 0 && "hidden"}`}
                >
                  {game.rating}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {game.rating > 3
                    ? "Recommend"
                    : game.rating < 1
                    ? "Bad"
                    : "Mixed"}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

export default GamesList;
