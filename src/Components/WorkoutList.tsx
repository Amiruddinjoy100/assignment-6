import WorkoutCard from "@/Components/WorkoutCard";
import type { Workout } from "@/types/workout";

const WorkoutList = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts: Workout[] = await res.json();

  return (
    <section
      id="library"
      className="bg-black px-5 py-12 text-white sm:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="text-4xl font-black uppercase sm:text-5xl">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default WorkoutList;