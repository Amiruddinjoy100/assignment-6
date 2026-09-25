import WorkoutCard from "./WorkoutCard";


const WorkoutFetch = async () => {

    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );


    const data = await res.json();


    return data;

};



const WorkoutList = async () => {


    const datas = await WorkoutFetch();



    return (

        <section
            id="library"
            className="
                px-5
                sm:px-8
                py-12
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                "
            >


                {/* Heading */}

                <h2
                    className="
                        text-4xl
                        sm:text-5xl
                        font-black
                        uppercase
                        text-white
                    "
                >
                    THE LIBRARY
                </h2>



                <p
                    className="
                        mt-2
                        text-sm
                        text-gray-400
                    "
                >
                    Twelve lifts covering every major muscle group.
                </p>




                {/* Workout Grid */}

                <div
                    className="
                        mt-8
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-6
                    "
                >


                    {
                        datas.map((data)=>(
                            <WorkoutCard
                                key={data.id}
                                workout={data}
                            />
                        ))
                    }


                </div>


            </div>


        </section>

    );

};


export default WorkoutList;