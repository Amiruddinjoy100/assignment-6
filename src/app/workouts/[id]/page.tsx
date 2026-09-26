import Image from "next/image";
import { notFound } from "next/navigation";

import TodayButton from "@/Components/buttonDetail/todayButton";
import SaveForLater from "@/Components/buttonDetail/saveForLaterButton";

import type { Workout } from "@/types/workout";


interface WorkoutDetailsProps {
  params: Promise<{
    id: string;
  }>;
}


interface InfoProps {
  title: string;
  value: string | number;
}


const WorkoutDetails = async ({
  params,
}: WorkoutDetailsProps) => {

  const { id } = await params;


  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );


  if (!res.ok) {
    notFound();
  }


  const workout: Workout = await res.json();


  if (!workout?.id) {
    notFound();
  }


  return (

    <section className="min-h-screen bg-black px-5 py-12 text-white sm:px-8">

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">


        <div className="relative min-h-[420px] overflow-hidden rounded-xl sm:min-h-[550px] lg:min-h-[700px]">

          <Image
            src={workout.image}
            alt={workout.name}
            fill
            unoptimized
            className="object-cover"
          />

        </div>

        <div>


          <h1 className="text-4xl font-black uppercase sm:text-5xl">
            {workout.name}
          </h1>


          <p className="mt-5 text-base leading-7 text-gray-400">
            {workout.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            {workout.muscleGroups.map((item) => (

              <span
                key={item}
                className="rounded-full bg-[#ccff00] px-4 py-1 text-xs font-bold text-black"
              >
                {item}
              </span>

            ))}

          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[#242933] bg-[#15181f]">

            <Info
              title="EQUIPMENT"
              value={workout.equipment}
            />

            <Info
              title="DIFFICULTY"
              value={workout.difficulty}
            />

            <Info
              title="SETS"
              value={workout.sets}
            />

            <Info
              title="REPS"
              value={workout.reps}
            />

            <Info
              title="DURATION"
              value={`${workout.duration} min`}
            />

            <Info
              title="CALORIES"
              value={`${workout.caloriesBurned} kcal`}
            />

            <Info
              title="RATING"
              value={workout.rating}
            />

          </div>

          <h2 className="mt-10 text-xl font-black uppercase">
            INSTRUCTIONS
          </h2>


          <ol className="mt-5 list-decimal space-y-3 pl-5 text-gray-300">

            {workout.instructions.map((step) => (

              <li key={step}>
                {step}
              </li>

            ))}

          </ol>

          <div className="mt-10 flex flex-wrap gap-4">

            <TodayButton workout={workout} />

            <SaveForLater workout={workout} />

          </div>


        </div>


      </div>

    </section>

  );
};



const Info = ({
  title,
  value,
}: InfoProps) => {

  return (

    <div className="flex justify-between border-b border-[#242933] px-5 py-4 text-sm last:border-b-0">

      <span className="font-semibold text-gray-400">
        {title}
      </span>

      <span className="text-white">
        {value}
      </span>

    </div>

  );
};


export default WorkoutDetails;