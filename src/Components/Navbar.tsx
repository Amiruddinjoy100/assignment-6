import Image from "next/image";
import logo from "@/assets/logo.png";

const Navbar=()=> {
  return (
    <nav className="w-full bg-[#090b0f] border-b border-[#1b1f26] text-white">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

       
        <div className="flex items-center gap-2">

  <Image
    src={logo}
    alt="Fitlog logo"
    width={28}
    height={28}
    className="object-contain"
  />

  <div className="text-sm font-extrabold tracking-[0.2em]">
    FITLOG
  </div>

</div>


        <div
          className="
            hidden md:flex 
            absolute left-1/2 
            -translate-x-1/2
            items-center gap-3
          "
        >

        
          <a
            href="#"
            className="
              px-4 py-1.5
              rounded-full
              text-xs
              font-semibold
              bg-[#243000]
              text-[#ccff00]
            "
          >
            Workout
          </a>


          
          <a
            href="#"
            className="
              px-4 py-1.5
              rounded-full
              text-xs
              text-gray-400
              hover:text-white
            "
          >
            My Plan
          </a>

        </div>


       
        <div className="hidden md:flex items-center gap-6 text-xs">


  
          <div className="flex items-center gap-2 text-gray-300">
            <span>
              Plan
            </span>

            <span
              className="
                px-2 py-0.5
                rounded-full
                bg-[#ccff00]
                text-black
                text-[10px]
                font-bold
              "
            >
              0
            </span>
          </div>


   
          <div className="flex items-center gap-2 text-gray-300">
            <span>
              Saved
            </span>

            <span
              className="
                px-2 py-0.5
                rounded-full
                border
                border-gray-700
                text-gray-300
                text-[10px]
                font-bold
              "
            >
              0
            </span>
          </div>


        </div>


   
        <div className="md:hidden text-xs text-gray-400">
          Menu
        </div>


      </div>
    </nav>
  );
}
export default Navbar;