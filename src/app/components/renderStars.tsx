import Image, { StaticImageData } from "next/image";
import fullStar from "@/app/assets/icons/full-star.png";
import halfStar from "@/app/assets/icons/half-star.png";
import emptyStar from "@/app/assets/icons/empty-star.png";

export default function renderStars(maxRating: number) {
  const stars: StaticImageData[] = [];
  for (let i = 0; i < 5; i++) {
    const diff = parseFloat((maxRating - i).toFixed(1));
    if (diff >= 1) stars.push(fullStar);
    else if (diff <= 1 && diff > 0) {
      if (diff <= 0.2) stars.push(emptyStar);
      else if (diff > 0.2 && diff <= 0.6) stars.push(halfStar);
      else stars.push(fullStar);
    } else stars.push(emptyStar);
  }
  return stars.map((img) => (
    <Image className="w-4 h-4 mr-1" src={img} alt="star" />
  ));
}
