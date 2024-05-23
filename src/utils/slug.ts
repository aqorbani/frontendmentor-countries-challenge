export function createSlug(name: string) {
  const url = name.split(" ").join("-");
  return url;
}

export function extractSlug(url: string) {
  const name = url.split("-").join(" ");
  return name;
}
