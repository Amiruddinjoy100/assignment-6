import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-black px-5 text-center text-white">

      <p className="text-sm font-bold tracking-widest text-[#ccff00]">
        404
      </p>

      <h1 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
        PAGE NOT FOUND
      </h1>

      <p className="mt-4 max-w-md text-gray-400">
        The page or workout you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-7 rounded-full bg-[#ccff00] px-7 py-3 text-sm font-bold text-black"
      >
        Back to workouts
      </Link>

    </main>
  );
};

export default NotFound;