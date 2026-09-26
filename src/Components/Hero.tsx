import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

import banner from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="bg-[#1b2229] px-4 py-8 sm:px-8">

      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-[#242933] bg-[#14171d] md:grid-cols-[1.15fr_0.85fr]">

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

          <p className="mb-5 text-xs font-bold tracking-widest text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-4xl font-black uppercase leading-[0.92] text-white sm:text-5xl lg:text-6xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <Link
            href="#library"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-[#ccff00] px-6 py-3 text-xs font-bold text-black"
          >
            BROWSE WORKOUTS
            <ArrowDown size={16} />
          </Link>

        </div>

        <div className="relative min-h-[280px] sm:min-h-[340px] md:min-h-[500px]">
          <Image
            src={banner}
            alt="Workout athlete"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;