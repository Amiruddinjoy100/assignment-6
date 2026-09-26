'use client';

import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import { useWorkoutContext } from "@/app/context/workoutContext";
import type { Workout } from "@/types/workout";

interface TodayButtonProps {
  workout: Workout;
}

const TodayButton = ({ workout }: TodayButtonProps) => {
  const { addToPlan, todaysPlan } = useWorkoutContext();

  const alreadyAdded = todaysPlan.some(
    (item) => item.id === workout.id
  );

  const planFull = todaysPlan.length >= 5;

  const handleClick = () => {
    const result = addToPlan(workout);

    if (result === "added") {
      toast.success("Added to today's plan");
    }

    if (result === "duplicate") {
      toast.error("Workout is already in today's plan");
    }

    if (result === "full") {
      toast.error("Today's plan can only contain 5 workouts");
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={alreadyAdded || planFull}
      className="inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-6 py-3 font-bold text-black disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Plus size={18} />

      {alreadyAdded
        ? "Already in plan"
        : planFull
          ? "Plan full"
          : "Add to today's plan"}
    </button>
  );
};

export default TodayButton;