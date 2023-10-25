export default function Header({ name }: { name: string }) {
  function renderTitleSlug(title: string): string {
    let titleMod = title.split(/-/);
    titleMod[titleMod.length - 1] = `(${titleMod.at(-1)})`;
    return titleMod.join(" ");
  }
  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white capitalize text-shadow text-center">
          {renderTitleSlug(name)}
        </h1>
      </div>
    </div>
  );
}
