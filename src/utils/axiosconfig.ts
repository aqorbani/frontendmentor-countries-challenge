export function axiosGetConfig() {
  let config = {
    method: "get",
    url: "https://restcountries.com/v3.1/all",
    timeout: 150000,
  };
  return config;
}
