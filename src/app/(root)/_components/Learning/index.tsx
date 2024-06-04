import Title from "@/components/Title";
import { learningData } from "@/constants";
import LearningCard from "./LearningCard";

const Learning = () => {
  return (
    <section
      className="bg-[#F8F8FF] dark:bg-gray-900 py-10 lg:py-20"
      id="learnings">
      <div className="container space-y-16">
        <div>
          <Title
            section="Learnings"
            title="Online Learning Platform International Curriculum"
            description="Study and understand the material class is more relaxed without time limit."
          />
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-between gap-5 sm:gap-10 lg:gap-0">
          {learningData.map((item, index) => (
            <LearningCard
              key={index}
              index={index}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Learning;
