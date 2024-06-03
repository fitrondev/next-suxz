import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const LearningCard = ({
  title,
  description,
  img,
  index,
}: {
  title: string;
  description: string;
  img: string;
  index: number;
}) => {
  return (
    <Card
      className={cn(
        "w-[250px] h-[330px]",
        index === 2 && "bg-primary/70 text-white"
      )}>
      <CardContent className="size-full rounded-lg p-0">
        <div className="w-full h-[180px] bg-gray-200 dark:bg-foreground flex items-center justify-center rounded-t-lg">
          <div className="relative size-40">
            <Image src={img} alt="" fill className="size-auto object-contain" />
          </div>
        </div>

        <div className="pt-4 px-4 space-y-2">
          <div className="space-y-2">
            <h4 className="text-xl font-bold">{title}</h4>

            <p
              className={cn(
                "text-sm text-muted-foreground",
                index === 2 && "text-white"
              )}>
              {description}
            </p>
          </div>

          <div>
            <Button size={"sm"} className="w-full text-sm" asChild>
              <Link href="/learning/id">See Class</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default LearningCard;
