import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import { Metadata } from "next";
import { fetchRestaurantMenu } from "@/app/services/restaurantsApi";

export const metadata: Metadata = {
  title: "Menu",
};

export default async function MenuPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const restaurantMenu = await fetchRestaurantMenu(slug);
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar slug={slug} />
      <Menu menu={restaurantMenu} />
    </div>
  );
}
