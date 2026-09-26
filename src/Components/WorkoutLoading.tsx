const WorkoutLoading = () => {
  return (
    <section
      id="library"
      className="bg-black px-5 py-16 text-white sm:px-8"
    >
      <div className="mx-auto flex min-h-[300px] max-w-7xl flex-col items-center justify-center gap-4">

        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-[#ccff00]" />

        <p className="text-sm text-gray-400">
          Loading workouts…
        </p>

      </div>
    </section>
  );
};

export default WorkoutLoading;