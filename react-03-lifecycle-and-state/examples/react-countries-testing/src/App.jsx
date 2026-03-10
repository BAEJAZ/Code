import { useEffect, useState } from "react";
import { fetchCountries, fetchPopulation } from "./functions/api";
import CountrySelect from "./components/CountrySelect";
import YearSelect from "./components/YearSelect";
import PopulationPanel from "./components/PopulationPanel";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [population, setPopulation] = useState(null);
  const [error, setError] = useState("");

  // fetch countries on mount
  useEffect(() => {
    async function loadCountries() {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (err) {
        setError("Failed to load countries");
      }
    }
    loadCountries();
  }, []);

  // fetch population when both country & year are selected
  useEffect(() => {
    async function loadPopulation() {
      if (!selectedCountry || !selectedYear) return;
      setError(""); // reset error before fetching
      try {
        const pop = await fetchPopulation(selectedCountry, selectedYear);
        setPopulation(pop);
      } catch (err) {
        setError("Failed to load population");
      }
    }
    loadPopulation();
  }, [selectedCountry, selectedYear]);

  return (
    <div className="app">
      <h1>World Population App</h1>

      {error && <p className="error">{error}</p>}

      <CountrySelect
        countries={countries}
        selected={selectedCountry}
        onChange={setSelectedCountry}
      />

      <YearSelect year={selectedYear} onChange={setSelectedYear} />

      <PopulationPanel
        population={population}
        country={selectedCountry}
        year={selectedYear}
      />
    </div>
  );
}
