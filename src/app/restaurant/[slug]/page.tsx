import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Ratings from "./components/Ratings";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <NavBar/>
        {/* NAVBAR */} 
        {/* HEADER */}
        <Header />
        {/* HEADER */}
         {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Ratings />
            <Description />
            <Images />
            <Reviews />
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
        </div>

      </main>
    </main>
  );
}
