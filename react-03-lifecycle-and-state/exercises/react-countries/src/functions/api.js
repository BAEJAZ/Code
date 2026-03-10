// A simple reusable function to fetch the list of countries
export async function fetchCountries() {
    const res = await fetch("https://d6wn6bmjj722w.population.io/1.0/countries");
    const BASE_URL = "https://d6wn6bmjj722w.population.io/1.0";

  const data = await res.json();
  return data.countries;
}

export async function fetchPopulation(country, year) {
  const date = `${year}-01-01`;
  const res = await fetch(`${BASE_URL}/population/${country}/${date}/`);
  const data = await res.json();

  return data.total_population.population;
  
}


export async function fetchPopulation() {
  //Do something with this

}
