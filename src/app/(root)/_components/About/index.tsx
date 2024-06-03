import Title from "@/components/Title";
import { aboutData } from "@/constants";
import { Check } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-10">
      <div className="container lg:h-[570px] flex flex-col lg:flex-row-reverse sm:items-center sm:justify-center lg:items-start lg:justify-start gap-10 lg:gap-32">
        <div className="lg:flex-1 space-y-7 lg:space-y-14">
          <Title
            className="sm:flex lg:block flex-col items-center justify-center"
            section="About Us"
            title="We Help Improve Your Work Experience"
            description="We help you to increase self-confidence and train yourself in a direction."
          />

          <div className="lg:w-[380px]">
            <ul className="flex flex-col sm:items-center lg:items-start justify-center space-y-8">
              {aboutData.map((item, index) => (
                <div key={index} className="inline-flex items-center gap-4">
                  <div className="bg-[#DDFFF9] p-1 lg:p-2 rounded-full">
                    <Check className="text-[#00ADB5]" />
                  </div>
                  <li className="text-sm lg:text-xl font-semibold">
                    {item.text}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden lg:block flex-1 h-full relative">
          <Image
            src={"/about.jpg"}
            alt=""
            sizes="100%"
            fill
            priority
            className="object-cover rounded-xl brightness-75"
          />
        </div>

        <Image
          src={"/about.jpg"}
          alt=""
          width={500}
          height={600}
          priority
          className="lg:hidden object-cover rounded-lg brightness-75"
        />
      </div>
    </section>
  );
};
export default About;
