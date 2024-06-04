import Logo from "@/components/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container lg:h-[230px] flex flex-col sm:flex-row items-center justify-center sm:items-start sm:justify-between gap-5 lg:gap-0">
        <div className="hidden lg:block flex-[2] space-y-5">
          <Logo />

          <p className="max-w-[400px] font-medium">
            Suxz is a platform that helps you to learn and grow in your career.
            We provide you with the best courses and resources to help you
            achieve your goals.
          </p>
        </div>

        <div className="flex-1 space-y-4 text-center">
          <h3 className="text-2xl font-bold">Company</h3>
          <div className="flex flex-col gap-4 text-xl font-medium">
            <Link href="/">Home</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/portofolios">Portofolios</Link>
          </div>
        </div>

        <div className="flex-1 space-y-4 text-center">
          <h3 className="text-2xl font-bold">Links</h3>
          <div className="flex flex-col gap-4 text-xl font-medium">
            <Link href="/privacy-policy">Privacy & Policy</Link>
            <Link href="/github">Github</Link>
            <Link href="/supports">Supports</Link>
            <Link href="/faqs">FAQs</Link>
          </div>
        </div>

        <div className="flex-1 space-y-4 text-center">
          <h3 className="text-2xl font-bold">Contact</h3>
          <div className="flex flex-col gap-4 text-xl font-medium">
            <p className="text-primary">(021) 31048184</p>
            <p className="text-primary">fitronansori7@gmail.com</p>
            <p>
              Jl. Narogong. Perum Cileungsi Elok Blok A No.5. Jakarta Selatan.
              12240.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
