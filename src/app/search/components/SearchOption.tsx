"use client";
import formatSearchString from "@/app/utils/formatSearchString.fail";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function SearchOptions({
  data,
  param,
}: {
  data: { name: string }[];
  param: string;
}) {
  const searchParams = useSearchParams();

  return (
    <>
      {data.map((item) => (
        <Link
          key={item.name}
          href={`/search?${formatSearchString(param, item.name, searchParams)}`}
        >
          <p className="font-light text-reg capitalize">{item.name}</p>
        </Link>
      ))}
    </>
  );
}
