'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png";
import { useWorkoutContext } from "@/app/context/workoutContext";


const Navbar = () => {

  const pathname = usePathname();

  const {
    todaysPlan,
    saveForLater
  } = useWorkoutContext();


  const workoutActive =
    pathname === "/" ||
    pathname.startsWith("/workouts");


  const planActive =
    pathname.startsWith("/my-plan");


  return (

    <nav className="w-full h-16 bg-[#090b0f] border-b border-[#1b1f26] text-white">

      <div className="max-w-7xl mx-auto h-full px-3 sm:px-5 md:px-8 flex flex-nowrap items-center justify-between gap-3">

        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >

          <Image
            src={logo}
            alt="FitLog logo"
            width={30}
            height={30}
            className="object-contain"
          />


          <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em]">
            FITLOG
          </span>

        </Link>


        <div className="flex flex-1 items-center justify-center gap-1 sm:gap-2 md:gap-4">


          <Link
            href="/#library"
            className={`rounded-full px-3 md:px-5 py-1.5 text-[11px] sm:text-xs font-semibold whitespace-nowrap ${
              workoutActive
                ? "bg-[#243000] text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workout
          </Link>


          <Link
            href="/my-plan"
            className={`rounded-full px-3 md:px-5 py-1.5 text-[11px] sm:text-xs font-semibold whitespace-nowrap ${
              planActive
                ? "bg-[#243000] text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>


        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-5 text-[10px] sm:text-xs">

          <Link
            href="/my-plan"
            className="flex items-center gap-1 sm:gap-2 whitespace-nowrap text-gray-300"
          >

            <span>
              Plan
            </span>


            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[10px] font-bold text-black">

              {todaysPlan.length}

            </span>

          </Link>


          <Link
            href="/my-plan"
            className="flex items-center gap-1 sm:gap-2 whitespace-nowrap text-gray-300"
          >

            <span>
              Saved
            </span>


            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-gray-700 px-1 text-[10px]">

              {saveForLater.length}

            </span>

          </Link>


        </div>


      </div>

    </nav>

  );
};


export default Navbar;