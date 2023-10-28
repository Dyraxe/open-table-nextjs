import Link from "next/link";
// import PriceButtons from "./PriceButtons";
// import SearchOptions from "./SearchOption";
import { PRICE } from "@prisma/client";
const prices = [
  {
    price: "cheap",
    label: "$",
  },
  {
    price: "regular",
    label: "$$",
  },
  {
    price: "expensive",
    label: "$$$",
  },
];
export default function SearchSideBar({
  options,
  searchParams,
}: {
  options: {
    locations: { name: string }[];
    cuisines: { name: string }[];
  };
  searchParams: {
    city?: string;
    cuisine?: string;
    price?: PRICE;
  };
}) {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {/* <SearchOptions param="city" data={options.locations} /> */}
        {options.locations.map((loc) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                city: loc.name,
              },
            }}
            key={loc.name}
            className="font-light text-reg capitalize"
          >
            <p className="font-light text-reg capitalize">{loc.name}</p>
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {/* <SearchOptions param="cuisine" data={options.cuisines} /> */}

        {options.cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            key={cuisine.name}
            className="font-light capitalize text-reg"
          >
            <p className="font-light text-reg capitalize">{cuisine.name}</p>
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {/* <PriceButtons /> */}
          {prices.map(({ price, label }) => (
            <Link
              className="border-r border-t border-b w-full text-reg font-light p-2"
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  price: price,
                },
              }}
              key={price}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
