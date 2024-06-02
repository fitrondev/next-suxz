import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="inline-flex items-center gap-2">
      <div className="relative size-8 sm:size-10">
        <Image src={"/logo.svg"} alt={"Suxz Logo"} fill />
      </div>
      <span className="text-2xl sm:text-3xl font-bold">Suxz</span>
    </Link>
  );
};
export default Logo;
