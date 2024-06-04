import { cn } from "@/lib/utils";
import NavItem from "./NavItem";

const data = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Learnings",
    href: "#learnings",
  },
  {
    title: "About Us",
    href: "#about-us",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "Log in",
    href: "/",
  },
  {
    title: "Sign up",
    href: "/",
  },
];

const NavLinks = ({ className }: { className?: string }) => {
  return (
    <nav className={cn("text-xl font-semibold flex", className)}>
      {data.slice(0, 4).map((item, index) => (
        <NavItem key={index} item={item} />
      ))}

      <div className="lg:hidden flex flex-col gap-5">
        {data.slice(4).map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </div>
    </nav>
  );
};
export default NavLinks;
