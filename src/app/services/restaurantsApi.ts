import { Cuisine, Location, PRICE } from "@prisma/client";
import prisma from "./prisma";

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
}

interface Restaurant {
  id: number;
  slug: string;
  description: string;
  name: string;
  images: string[];
}

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

export async function searchRestaurantLocations(name: string | undefined) {
  const restaurantSelection = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };
  if (!name) return prisma.restaurant.findMany({ select: restaurantSelection });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: name.toLowerCase().trim(),
        },
      },
    },
    select: restaurantSelection,
  });
}
