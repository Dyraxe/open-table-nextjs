import Header from "./components/Header";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: { slug: string };
};
export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `${slug.replace(/-/g, " ")} | OpenTable`,
  };
}
export default function RestaurantLayout({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <main>
      <Header name={slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
      ;
    </main>
  );
}
