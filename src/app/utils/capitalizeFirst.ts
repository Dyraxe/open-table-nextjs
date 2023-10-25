export default function capitalizeFirstLetter(word: string): string {
  let toFormat = word.split("");
  toFormat[0] = toFormat[0].toUpperCase();

  return toFormat.join("");
}
