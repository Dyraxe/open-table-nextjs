"use client";
import { Review } from "@prisma/client";
import calculateReviewRatingAvg from "../utils/calculateReviewRatingAvg";
import renderStars from "./renderStars";
export default function StarRating({
  reviews,
  rating,
}: {
  reviews?: Review[];
  rating?: number;
}) {
  const ratingAvg = rating || calculateReviewRatingAvg(reviews!);
  if (!ratingAvg) return null;
  return <div className="flex items-center">{renderStars(ratingAvg)}</div>;
}
