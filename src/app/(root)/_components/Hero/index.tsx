import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:h-[calc(100vh-80px)] lg:flex items-center justify-center">
      <div className="container h-[calc(100vh-80px)] lg:h-[500px] flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-5">
          <div className="flex flex-col items-center lg:items-start justify-center gap-5">
            <span className="tracking-[.5rem] uppercase lg:text-xl font-bold text-primary">
              Suxz Make It Easy
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-center lg:text-start">
              Find Your Way <br />
              Of Success
            </h1>

            <p className="sm:max-w-[550px] text-lg lg:text-2xl font-medium text-muted-foreground text-center lg:text-start">
              We help you to increase self-confidence and train yourself in a
              direction, and make you more creative in developing a work.
            </p>
          </div>

          <div className="space-x-5">
            <Button className="sm:py-6 sm:px-6" asChild>
              <Link href="/">Get Started</Link>
            </Button>

            <Button variant={"outline"} className="sm:py-6 sm:px-6" asChild>
              <Link href="/">Our Services</Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative size-full -z-10">
            <Image src={"/blob.svg"} alt="hero blob" fill className="" />
            <Image
              src={"/man.png"}
              alt="hero blob"
              fill
              priority
              className="object-contain"
            />
          </div>

          <Image
            src={"/members.png"}
            alt="hero blob"
            width={280}
            height={280}
            priority
            className="hidden sm:block object-contain absolute top-0 left-0 sm:-top-10 sm:left-10 lg:top-0 lg:left-0"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
