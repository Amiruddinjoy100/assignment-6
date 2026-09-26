import { Suspense } from "react";

import Hero from "@/Components/Hero";
import WorkoutList from "@/Components/WorkoutList";
import WorkoutLoading from "@/Components/WorkoutLoading";

export default function Home() {
  return (
    <>
      <Hero />

      <Suspense fallback={<WorkoutLoading />}>
        <WorkoutList />
      </Suspense>
    </>
  );
}