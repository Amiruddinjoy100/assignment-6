import Image from "next/image";
import Link from "next/link";


const WorkoutCard = ({ workout }) => {

    return (

        <Link
            href={`/workouts/${workout.id}`}
            className="
                block
                rounded-xl
                overflow-hidden
                border
                border-[#242933]
                bg-[#14171d]
            "
        >

            {/* Image */}

            <div
                className="
                    relative
                    h-[170px]
                    w-full
                "
            >

                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    unoptimized
                    className="
                        object-cover
                    "
                />

            </div>



            {/* Content */}

            <div className="p-5">


                {/* Tags */}

                <div className="flex gap-2 mb-4">

                    {
                        workout.muscleGroups.map((group)=>(
                            <span
                                key={group}
                                className="
                                    bg-[#ccff00]
                                    text-black
                                    rounded-full
                                    px-3
                                    py-1
                                    text-[10px]
                                    font-bold
                                    uppercase
                                "
                            >
                                {group}
                            </span>
                        ))
                    }

                </div>



                {/* Title */}

                <h3
                    className="
                        text-white
                        text-lg
                        uppercase
                        font-black
                        leading-none
                    "
                >
                    {workout.name}
                </h3>



                {/* Equipment */}

                <p
                    className="
                        mt-2
                        text-sm
                        text-gray-400
                    "
                >
                    {workout.equipment}
                </p>




                {/* Stats */}

                <div
                    className="
                        mt-5
                        h-8
                        border
                        border-[#242933]
                        flex
                        items-center
                        justify-between
                        px-3
                        text-xs
                        text-gray-400
                    "
                >

                    <span>
                        ◯ {workout.duration} min
                    </span>


                    <span>
                        🔥 {workout.caloriesBurned} kcal
                    </span>


                    <span>
                        ☆ {workout.rating}
                    </span>


                </div>


            </div>


        </Link>

    );

};


export default WorkoutCard;