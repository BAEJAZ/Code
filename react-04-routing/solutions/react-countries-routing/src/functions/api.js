const BASE_URL = "https://d6wn6bmjj722w.population.io/1.0";

export async function fetchCountries() {
  const res = await fetch(`${BASE_URL}/countries`);
  if (!res.ok) throw new Error("Failed to fetch countries");
  const data = await res.json();
  return data.countries;
}

export async function fetchPopulation(country, year) {
  const date = `${year}-01-01`;
  const res = await fetch(`${BASE_URL}/population/${country}/${date}/`);
  if (!res.ok) throw new Error("Failed to fetch population");
  const data = await res.json();

  return data.total_population.population;
}
