export async function fetchCountries() {
    const response = await fetch("https://d6wn6bmjj722w.population.io/1.0/countries");

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    return data.countries || [];
}
