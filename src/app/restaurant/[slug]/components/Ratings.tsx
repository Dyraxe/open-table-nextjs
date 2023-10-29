import StarRating from "@/app/components/StarRating";
import calculateReviewRatingAvg from "@/app/utils/calculateReviewRatingAvg";
import { Review } from "@prisma/client";

export default function Ratings({ reviews }: { reviews: Review[] }) {
  const reviewsLen = reviews?.length;
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <StarRating reviews={reviews} />
        <p className="text-reg ml-3">
          {calculateReviewRatingAvg(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviewsLen > 0
            ? reviewsLen > 1
              ? `${reviewsLen} reviews`
              : `1 review`
            : "no reviews"}
        </p>
      </div>
    </div>
  );
}
