import { companyData } from "@/constants";
import Image from "next/image";

const Company = () => {
  return (
    <section className="py-16 bg-[#F8F8FF] dark:bg-gray-900">
      <div className="container flex flex-col gap-10 lg:gap-16">
        <div className="text-center">
          <h3 className="text-2xl lg:text-[44px] lg:leading-[60px] font-bold">
            Companies That Recruit Our Graduates
          </h3>

          <p className="text-sm lg:text-2xl font-medium text-muted-foreground">
            Our graduates have worked in more than 400 companies around the
            World.
          </p>
        </div>

        <div className="lg:max-w-[910px] mx-auto flex flex-wrap gap-5 lg:gap-x-16 lg:gap-y-5 justify-between">
          {companyData.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              alt={item.name}
              width={150}
              height={60}
              priority
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Company;
