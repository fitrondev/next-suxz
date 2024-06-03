import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const StartSection = () => {
  return (
    <section className="relative w-full h-[390px] flex items-center justify-center">
      <Image
        src={"/start.jpg"}
        alt=""
        fill
        priority
        className="object-cover brightness-50"
      />

      <div className="px-4 absolute text-white text-center space-y-5">
        <div>
          <h3 className="text-2xl lg:text-[44px] lg:leading-[60px] font-extrabold">
            So? What Are You Waiting For
          </h3>
          <p className="text-base lg:text-2xl font-medium">
            It&apos;s time to build your career, study in a relaxed and
            purposeful manner.
          </p>
        </div>

        <div className="space-x-5">
          <Button className="sm:py-6 sm:px-6" asChild>
            <Link href="/auth/register">Get Started</Link>
          </Button>

          <Button variant={"ghost"} className="sm:py-6 sm:px-6" asChild>
            <Link href="/services">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default StartSection;
