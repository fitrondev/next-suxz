import Link from "next/link";

type NavItemProps = {
  item: {
    title: string;
    href: string;
  };
};

const NavItem = ({ item }: NavItemProps) => {
  return (
    <Link
      href={item.href}
      className="hover:text-primary/70 dark:hover:text-primary transition-colors duration-300 ease-in-out">
      {item.title}
    </Link>
  );
};
export default NavItem;
