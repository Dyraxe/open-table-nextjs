import Price from "@/app/components/Price";
import { RestaurantCardType } from "@/app/services/restaurantsApi";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirst";
import Link from "next/link";

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: RestaurantCardType;
}) {
  return (
    <div className="border-b ml-4 flex pb-5">
      <img
        src={restaurant.main_image}
        alt={`${restaurant.name}'s main image`}
        className="w-44 h-36 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
