import Link from "next/link";
import Price from "./Price";
import { RestaurantCardType } from "../services/restaurantsApi";
import StarRating from "./StarRating";

interface Props {
  restaurant: RestaurantCardType;
}
function renderReview(arrLength: number) {
  if (arrLength > 1) return `${arrLength} reviews`;
  if (arrLength === 1) return `${arrLength} review`;
}
export default function RestaurantCard({ restaurant }: Props) {
  const reviewAmount = restaurant.review?.length;
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img src={restaurant.main_image} alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
          <div className="flex items-center">
            <StarRating reviews={restaurant.review} />
            <p className="ml-2 pt-1">
              {reviewAmount ? renderReview(reviewAmount) : "No reviews yet!"}
            </p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
