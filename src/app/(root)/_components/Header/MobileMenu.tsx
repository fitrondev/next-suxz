import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignRight className="size-6" />
      </SheetTrigger>
      <SheetContent>
        <NavLinks className="size-full flex-col justify-center gap-5 text-2xl" />
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
