import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";

export default function Menu({ menu }: { menu: Item[] }) {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-center text-4xl">Menu</h1>
        </div>
        {menu.length ? (
          <div className="flex flex-wrap justify-between">
            {/* MENU CARD */}
            {menu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
            {/* MENU CARD */}
          </div>
        ) : (
          <div className="text-center">
            <p>This restaurant doesn't provide a menu</p>
          </div>
        )}
      </div>
    </main>
  );
}
