"use client";
import formatSearchString from "@/app/utils/formatSearchString.fail";
import { useSearchParams, useRouter } from "next/navigation";

export default function PriceButtons() {
  const router = useRouter();
  const searchParams = useSearchParams();
  function changePriceParam(amount: string) {
    return () => {
      router.push(
        `/search?${formatSearchString(
          "price",
          amount.toUpperCase(),
          searchParams
        )}`
      );
    };
  }
  return (
    <>
      <button
        onClick={changePriceParam("cheap")}
        className="border w-full text-reg font-light rounded-l p-2"
      >
        $
      </button>
      <button
        onClick={changePriceParam("regular")}
        className="border-r border-t border-b w-full text-reg font-light p-2"
      >
        $$
      </button>
      <button
        onClick={changePriceParam("expensive")}
        className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r"
      >
        $$$
      </button>
    </>
  );
}
