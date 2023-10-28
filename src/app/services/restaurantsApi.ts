import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import prisma from "./prisma";

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
  review?: Review[];
}
// type Test = { id: number; name: string; main_image: string; images: string[]; description: string; open_time: string; close_time: string; slug: string; price: PRICE; location_id: number; cuisine_id: number; created_at: Date; updated_at: Date; }
interface Restaurant {
  id: number;
  slug: string;
  description: string;
  name: string;
  images: string[];
  review: Review[];
}
type Query = {
  location?: {
    name: {
      equals: string;
    };
  };

  cuisine?: {
    name: {
      equals: string;
    };
  };
  price?: "CHEAP" | "REGULAR" | "EXPENSIVE";
};
export async function fetchRestaurants(): Promise<RestaurantCardType[]> {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
      review: true,
    },
  });

  return restaurants;
}

export async function fetchRestaurantBySlug(slug: string): Promise<Restaurant> {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      id: true,
      slug: true,
      description: true,
      name: true,
      images: true,
      review: true,
    },
  });

  if (!restaurant) throw new Error("Invalid restaurant");
  return restaurant;
}

export async function fetchRestaurantMenu(slug: string) {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: { items: true },
  });
  if (!restaurant) throw new Error("boom");
  return restaurant.items;
}

export function searchRestaurantLocations(searchParams: {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}) {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    review: true
  };
  if (Object.keys(searchParams).length < 1)
    return prisma.restaurant.findMany({ select });

  const where: Query = {};
  if (searchParams.city)
    where["location"] = {
      name: { equals: searchParams.city.toLowerCase().trim() },
    };
  if (searchParams.cuisine)
    where["cuisine"] = { name: { equals: searchParams.cuisine } };
  if (searchParams.price)
    where["price"] = searchParams.price.toUpperCase() as PRICE;
  return prisma.restaurant.findMany({
    select,
    where,
  });
}

export async function fetchCuisineAndLocations() {
  const locations = await prisma.location.findMany({
    select: { name: true },
  });
  const cuisines = await prisma.cuisine.findMany({
    select: { name: true },
  });
  return { locations, cuisines };
}
