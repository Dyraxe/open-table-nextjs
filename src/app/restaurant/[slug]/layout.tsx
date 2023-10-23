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
    title: `${slug} | OpenTable`,
  };
}
export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
      ;
    </main>
  );
}
