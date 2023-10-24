import { PRICE } from "@prisma/client";

function renderPrice(price: string) {
  if (price === "CHEAP") {
    return (
      <>
        <span>$$</span>
        <span className="text-gray-400">$$</span>
      </>
    );
  } else if (price === "REGULAR") {
    return (
      <>
        <span>$$$</span>
        <span className="text-gray-400">$</span>
      </>
    );
  } else {
    return (
      <>
        <span>$$$$</span>
      </>
    );
  }
}
export default function Price({ price }: { price: PRICE }) {
  return <p className="mr-3 flex">{renderPrice(price)}</p>;
}
