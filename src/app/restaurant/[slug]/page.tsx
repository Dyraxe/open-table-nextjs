import RestaurantNavBar from "./components/RestaurantNavBar";
import Ratings from "./components/Ratings";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import Title from "./components/Title";
import { fetchRestaurantBySlug } from "@/app/services/restaurantsApi";

export default async function RestaurantDetails({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(slug);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title title={restaurant.name} />
        <Ratings />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
}
