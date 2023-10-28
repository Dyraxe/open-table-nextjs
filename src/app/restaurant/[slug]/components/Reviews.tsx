import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) return null;
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        What people are saying
      </h1>
      <div>
        {reviews.map((rev) => (
          <ReviewCard key={rev.id} review={rev} />
        ))}
      </div>
    </div>
  );
}
