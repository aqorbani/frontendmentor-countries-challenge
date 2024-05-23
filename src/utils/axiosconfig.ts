export function axiosGetConfig() {
  let config = {
    method: "get",
    url: "https://restcountries.com/v3.1/all",
    timeout: 150000,
  };
  return config;
}

export function axiosGetConfig_FullName(name: string) {
  let config = {
    method: "get",
    url: "https://restcountries.com/v3.1/name/" + name + "?fullText=true",
    timeout: 150000,
  };
  return config;
}

export function axiosGetConfig_FilterByRegion(region: string) {
  let config = {
    method: "get",
    url: "https://restcountries.com/v3.1/region/" + region,
    timeout: 150000,
  };
  return config;
}
