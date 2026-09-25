// import { ArrowDown } from "lucide-react";
import Image from "next/image";
import banner from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="px-10 sm:px-6 lg:px-8 py-6 sm:py-8">

      <div
        className="
          relative
          overflow-hidden
          max-w-7xl
          mx-auto
          rounded-xl
          border border-[#22262f]
          bg-[#14171d]
          px-6
          py-8
          sm:px-8
          lg:px-10
          h-[calc(85vh-20px)]
          sm:min-h-[350px]
          lg:min-h-[270px]
          flex
          items-center
        "
      >

   
        <div
          className="
            z-10
            max-w-xl
            w-full
            lg:w-1/2
          "
        >


          <p
            className="
              mb-3
              text-[10px]
              sm:text-xs
              font-bold
              tracking-widest
              text-[#ccff00]
            "
          >
            WORKOUT LIBRARY
          </p>



          <h1
            className="
              text-white
              uppercase
              font-black
              leading-[0.9]
              tracking-tight
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-oswald
            "
          >
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>



          <p
            className="
              mt-4
              max-w-md
              text-xs
              sm:text-sm
              leading-relaxed
              text-gray-400
            "
          >
            FitLog is a dark, no-nonsense gym companion:
            pick a lift, lock it into today's plan,
            and watch the week's work add up.
          </p>


          <a
            href="#library"
            className="
              mt-5
              sm:mt-6
              inline-flex
              items-center
              gap-2
              rounded-md
              bg-[#ccff00]
              px-5
              py-2.5
              text-[10px]
              font-bold
              text-black
              hover:bg-lime-300
              transition
            "
          >
            BROWSE WORKOUTS
            {/* <ArrowDown size={14}/> */}
          </a>

        </div>


        <div
          className="
            absolute
            bottom-0
            right-0

            sm:right-2
            lg:right-6

            opacity-40
            sm:opacity-70
            lg:opacity-100

            pointer-events-none
          "
        >

          <Image
            src={banner}
            alt="Workout athlete"
            width={320}
            height={320}
            className="
              object-contain

              w-[180px]
              sm:w-[240px]
              lg:w-[300px]

              h-auto
            "
          />

        </div>


      </div>

    </section>
  );
};

export default Hero;