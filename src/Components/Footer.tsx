import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#1b1f26] bg-[#090b0f] text-white">

      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">

        <div className="flex items-center gap-2">

          <Image
            src={logo}
            alt="FitLog logo"
            width={26}
            height={26}
          />

          <span className="font-extrabold tracking-[0.2em]">
            FITLOG
          </span>

        </div>

        <p className="text-xs text-gray-400 sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>

    </footer>
  );
};

export default Footer;