"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
export default function SearchBar() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (location.length > 3) router.push(`/search?city=${location}`);
  }
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <form onSubmit={onSubmit}>
        <input
          className="rounded  mr-3 p-2 w-[450px]"
          type="text"
          placeholder="State, city or town"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="rounded bg-red-600 px-9 py-2 text-white">
          Let's go
        </button>
      </form>
    </div>
  );
}
