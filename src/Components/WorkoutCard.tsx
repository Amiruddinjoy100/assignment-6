import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="block cursor-pointer overflow-hidden rounded-xl border border-[#242933] bg-[#14171d] transition hover:border-[#ccff00]"
    >

      <div className="relative h-[190px] w-full">

        <Image
          src={workout.image}
          alt={workout.name}
          fill
          unoptimized
          className="object-cover"
        />

      </div>

      <div className="p-5">

        <div className="mb-4 flex flex-wrap gap-2">

          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}

        </div>

        <h3 className="text-lg font-black uppercase leading-none text-white">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {workout.equipment}
        </p>

        <div className="mt-5 flex items-center justify-between border border-[#242933] px-3 py-2 text-xs text-gray-400">

          <span className="flex items-center gap-1">
            <Clock size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={14} />
            {workout.rating}
          </span>

        </div>

      </div>

    </Link>
  );
};

export default WorkoutCard;