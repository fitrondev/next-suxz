import Title from "@/components/Title";
import { testimonialsData } from "@/constants";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <section className="py-10 lg:py-20" id="testimonials">
      <div className="container flex flex-col gap-16 lg:gap-24">
        <div>
          <Title
            className="flex flex-col items-center justify-center"
            section="Testimonials"
            title="Our Alumni Say"
          />
          <p className="text-sm lg:text-2xl font-medium text-muted-foreground text-center">
            These are the words of people who have taken our class
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-between gap-y-16 sm:gap-16 lg:gap-y-0">
          {testimonialsData.map((item, index) => (
            <TestimonialsCard
              key={index}
              name={item.name}
              job={item.job}
              comment={item.comment}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
