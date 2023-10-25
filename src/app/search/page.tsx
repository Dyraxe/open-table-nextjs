import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { Metadata } from "next";
import { searchRestaurantLocations } from "../services/restaurantsApi";

export const metadata: Metadata = {
  title: "Search | OpenTable",
};
export default async function SearchPage({
  searchParams: { city },
}: {
  searchParams: { city: string };
}) {
  const restaurants = await searchRestaurantLocations(city);
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}
        <SearchSideBar />
        {/* SEARCH SIDE BAR */}
        <div className="w-5/6">
          {restaurants?.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            ))
          ) : (
            <div>
              <p>No restaurants could be found within your search</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
