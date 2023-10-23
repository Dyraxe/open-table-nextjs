import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard />
      </div>
    </main>
  );
}
