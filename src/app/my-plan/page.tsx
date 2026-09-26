'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";

import {
  Check,
  ChevronDown,
  Clock,
  Flame,
  Star,
  X,
} from "lucide-react";

import toast from "react-hot-toast";

import { useWorkoutContext } from "@/app/context/workoutContext";


type Tab = "today" | "saved";

type SortOption =
  | "duration"
  | "calories"
  | "rating";


const MyPlanPage = () => {

  const {
    todaysPlan,
    saveForLater,
    removeFromPlan,
    removeSaved,
  } = useWorkoutContext();


  const [activeTab, setActiveTab] =
    useState<Tab>("today");


  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const currentList =
    activeTab === "today" ? todaysPlan : saveForLater;

  const sortedList = [...currentList].sort(
    (a, b) => {

      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return (
          a.caloriesBurned -
          b.caloriesBurned
        );
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;

    }
  );
  const totalExercises =
    todaysPlan.length;


  const totalMinutes =
    todaysPlan.reduce(
      (total, workout) =>
        total + workout.duration,
      0
    );


  const totalCalories =
    todaysPlan.reduce(
      (total, workout) =>
        total + workout.caloriesBurned,
      0
    );


  const handleDone = (id: number) => {

    removeFromPlan(id);

    toast.success(
      "Workout marked as done"
    );

  };

  const handleRemove = (id: number) => {

    if (activeTab === "today") {

      removeFromPlan(id);

      toast.success(
        "Workout removed from today's plan"
      );

    } else {

      removeSaved(id);

      toast.success(
        "Workout removed from saved"
      );

    }

  };



  return (

    <main className="min-h-screen bg-black text-white">

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">

        <h1 className="text-4xl font-black uppercase sm:text-5xl">
          MY PLAN
        </h1>


        <p className="mt-2 text-gray-400">
          Cap of five lifts for today.
          Finish them, then load more.
        </p>

        <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-xl border border-[#292f3a] bg-[#15181f] sm:grid-cols-3">


          <Metric
            label="Exercises"
            value={totalExercises}
            accent
          />


          <Metric
            label="Minutes"
            value={totalMinutes}
          />


          <Metric
            label="Calories"
            value={totalCalories}
          />
        </div>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex w-fit rounded-xl border border-[#292f3a] bg-[#15181f] p-1">


            <button
              onClick={() =>
                setActiveTab("today")
              }
              className={`rounded-lg px-6 py-2 text-sm font-semibold transition ${
                activeTab === "today"
                  ? "bg-[#222731] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>


            <button
              onClick={() =>
                setActiveTab("saved")
              }
              className={`rounded-lg px-6 py-2 text-sm font-semibold transition ${
                activeTab === "saved"
                  ? "bg-[#222731] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>


          </div>

          <div className="flex items-center gap-3">


            <span className="text-sm font-semibold text-gray-400">
              Sort By
            </span>


            <div className="relative">


              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(
                    event.target
                      .value as SortOption
                  )
                }
                className="appearance-none rounded-lg border border-[#292f3a] bg-[#15181f] py-2.5 pl-4 pr-10 text-sm text-white outline-none"
              >

                <option value="duration">
                  Duration
                </option>

                <option value="calories">
                  Calories
                </option>

                <option value="rating">
                  Rating
                </option>

              </select>


              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />


            </div>


          </div>


        </div>

        {sortedList.length === 0 ? (

          <div className="mt-7 flex min-h-[310px] flex-col items-center justify-center rounded-xl border border-dashed border-[#3a404b] bg-[#14171d] px-5 text-center">


            <h2 className="text-2xl font-black uppercase">
              NOTHING HERE YET
            </h2>


            <p className="mt-2 text-gray-400">
              Browse the library and add a
              lift to get today moving.
            </p>


            <Link
              href="/#library"
              className="mt-7 rounded-full bg-[#ccff00] px-7 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
            >
              Go to workouts
            </Link>


          </div>

        ) : (

          <div className="mt-7 space-y-5">


            {sortedList.map(
              (workout) => (

                <article
                  key={workout.id}
                  className="flex flex-col gap-5 rounded-xl border border-[#292f3a] bg-[#15181f] p-5 md:flex-row md:items-center md:justify-between"
                >

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                    <div className="relative h-[110px] w-full shrink-0 overflow-hidden rounded-lg sm:w-[190px]">

                      <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />

                    </div>

                    <div>


                      <h2 className="text-xl font-black uppercase">
                        {workout.name}
                      </h2>


                      <p className="mt-1 text-sm text-gray-400">
                        {workout.equipment}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-gray-300">


                        <Stat
                          icon={
                            <Clock size={17} />
                          }
                          value={`${workout.duration} min`}
                        />


                        <Stat
                          icon={
                            <Flame size={17} />
                          }
                          value={`${workout.caloriesBurned} kcal`}
                        />


                        <Stat
                          icon={
                            <Star size={17} />
                          }
                          value={`${workout.rating}`}
                        />


                      </div>


                    </div>


                  </div>

                  <div className="flex flex-wrap items-center gap-3 md:justify-end">

                    <Link
                      href={`/workouts/${workout.id}`}
                      className="rounded-full border border-gray-600 px-5 py-2.5 text-sm transition hover:bg-[#222731]"
                    >
                      View Details
                    </Link>

                    {activeTab ===
                      "today" && (

                      <button
                        onClick={() =>
                          handleDone(
                            workout.id
                          )
                        }
                        className="inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-lime-300"
                      >
                        <Check size={16} />

                        Mark as Done
                      </button>

                    )}

                    <button
                      onClick={() =>
                        handleRemove(
                          workout.id
                        )
                      }
                      aria-label="Remove workout"
                      title="Remove"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-300 transition hover:border-red-500 hover:text-red-400"
                    >
                      <X size={17} />
                    </button>


                  </div>


                </article>

              )
            )}


          </div>

        )}


      </section>

    </main>

  );

};


interface MetricProps {
  label: string;
  value: number;
  accent?: boolean;
}


const Metric = ({
  label,
  value,
  accent = false,
}: MetricProps) => {

  return (

    <div className="border-[#292f3a] p-7 sm:border-r last:sm:border-r-0">

      <p className="text-sm text-gray-400">
        {label}
      </p>


      <h2
        className={`mt-2 text-5xl font-black ${
          accent
            ? "text-[#ccff00]"
            : "text-white"
        }`}
      >
        {value}
      </h2>

    </div>

  );

};


interface StatProps {
  icon: ReactNode;
  value: string;
}


const Stat = ({
  icon,
  value,
}: StatProps) => {

  return (

    <span className="flex items-center gap-1.5">

      <span className="text-[#ccff00]">
        {icon}
      </span>


      <span>
        {value}
      </span>

    </span>

  );

};


export default MyPlanPage;