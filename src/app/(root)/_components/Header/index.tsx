import Logo from "@/components/Logo";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header>
      <div className="container h-20 flex items-center justify-between">
        <div className="flex items-center space-x-16">
          <div>
            <Logo />
          </div>

          <div className="hidden lg:block">
            <NavLinks className="text-gray-700 dark:text-foreground gap-6" />
          </div>
        </div>

        <div className="inline-flex items-center gap-5">
          <ThemeToggle />
          <MobileMenu />

          <div className="hidden lg:inline-flex items-center gap-5">
            <Button
              variant={"ghost"}
              asChild
              className="text-primary/70 dark:text-primary-foreground">
              <Link href={"/auth/login"}>Log in</Link>
            </Button>

            <Button asChild>
              <Link href={"/auth/register"}>Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
