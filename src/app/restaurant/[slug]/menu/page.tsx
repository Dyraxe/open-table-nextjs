import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
};
export default function MenuPage() {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      {/* RESTAURANT NAVBAR */}
      <RestaurantNavBar />
      {/* RESTAURANT NAVBAR */} {/* MENU */}
      <Menu />
      {/* MENU */}
    </div>
  );
}
