import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const TestimonialsCard = ({
  name,
  job,
  comment,
  img,
}: {
  name: string;
  job: string;
  comment: string;
  img: string;
}) => {
  return (
    <Card className={cn("relative w-[240px] h-[290px]")}>
      <CardContent className="size-full rounded-lg p-0">
        <div
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-2
        ">
          <div className="relative size-16">
            <Image
              src={img}
              alt={name}
              fill
              sizes="100%"
              className="object-cover rounded-full brightness-75"
            />
          </div>
        </div>

        <div className="pt-14 text-center">
          <h4 className="text-2xl font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{job}</p>
        </div>

        <div className="pt-10 px-5">
          <p className="text-center">&quot;{comment}&quot;</p>
        </div>
      </CardContent>
    </Card>
  );
};
export default TestimonialsCard;
