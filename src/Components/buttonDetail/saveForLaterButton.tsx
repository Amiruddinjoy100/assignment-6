'use client';

import { Bookmark } from "lucide-react";
import toast from "react-hot-toast";

import { useWorkoutContext } from "@/app/context/workoutContext";
import type { Workout } from "@/types/workout";

interface SaveForLaterProps {
  workout: Workout;
}

const SaveForLater = ({ workout }: SaveForLaterProps) => {
  const { saveWorkout, saveForLater } = useWorkoutContext();

  const alreadySaved = saveForLater.some(
    (item) => item.id === workout.id
  );

  const handleClick = () => {
    const result = saveWorkout(workout);

    if (result === "added") {
      toast.success("Workout saved for later");
    }

    if (result === "duplicate") {
      toast.error("Workout is already saved");
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={alreadySaved}
      className="inline-flex items-center gap-2 rounded-md border border-gray-600 px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Bookmark size={18} />

      {alreadySaved ? "Saved" : "Save for later"}
    </button>
  );
};

export default SaveForLater;