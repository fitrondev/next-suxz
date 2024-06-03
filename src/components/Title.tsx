import { cn } from "@/lib/utils";

const Title = ({
  section,
  title,
  description,
  className,
}: {
  section?: string;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <span className="tracking-[.2rem] uppercase text-primary text-sm lg:text-base font-bold">
        {section}
      </span>

      <h3 className="lg:max-w-[550px] text-2xl lg:text-[44px] lg:leading-[60px] font-bold">
        {title}
      </h3>

      <p className="lg:max-w-[450px] text-sm lg:text-2xl font-medium text-muted-foreground">
        {description}
      </p>
    </div>
  );
};
export default Title;
