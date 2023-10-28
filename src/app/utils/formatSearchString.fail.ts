import { ReadonlyURLSearchParams } from "next/navigation";

export default function formatSearchString(
  toReplace: string,
  newValue: string,
  searchParams: ReadonlyURLSearchParams
) {
  let params = searchParams.toString() || "";

  switch (toReplace) {
    case "city":
      return (params = defineParams("city", params, newValue, searchParams));
    case "cuisine":
      return (params = defineParams("cuisine", params, newValue, searchParams));

    case "price":
      return (params = defineParams("price", params, newValue, searchParams));

    default:
      break;
  }
  return params;
}

function defineParams(
  param: string,
  params: string,
  newValue: string,
  searchParams: ReadonlyURLSearchParams
) {
  const currentParam = searchParams.get(param);
  if (params.length < 1) return (params = `${param}=${newValue}`);

  if (currentParam === newValue) {
    params = params.replace(`${param}=${currentParam}`, "");
    if (params.startsWith("&")) params = params.replace("&", "");
    return params;
  }

  if (!params.match(param)) return `${params}&${param}=${newValue}`;

  return (params = params.replace(
    `${param}=${currentParam}`,
    `${param}=${newValue}`
  ));
}
