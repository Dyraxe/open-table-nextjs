import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { Metadata } from "next";
import {
  fetchCuisineAndLocations,
  searchRestaurantLocations,
} from "../services/restaurantsApi";
import { PRICE } from "@prisma/client";

export const metadata: Metadata = {
  title: "Search | OpenTable",
};
export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    city?: string;
    cuisine?: string;
    price?: PRICE;
  };
}) {
  const restaurants = await searchRestaurantLocations({
    ...searchParams,
  });
  const options = await fetchCuisineAndLocations();
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar searchParams={searchParams} options={options} />
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
