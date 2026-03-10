// src/components/CountriesPage.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CountrySelect from "./CountrySelect.jsx";
import YearSelect from "./YearSelect.jsx";
import PopulationPanel from "./PopulationPanel.jsx";
import { fetchCountries, fetchPopulation } from "../functions/api.js";

export default function CountriesPage() {
  // If the route is /country/France, for example,
  // useParams() will return { countryName: "France" }
  const { countryName } = useParams();

  // useNavigate() allows us to move to another route in code
  const navigate = useNavigate();

  // State to hold list of countries, user selections, and population result
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(countryName ?? "");
  const [year, setYear] = useState("");
  const [population, setPopulation] = useState(null);

  // -------------------------------
  // 1. Fetch list of countries once on mount
  // -------------------------------
  useEffect(() => {
    fetchCountries().then((list) => setCountries(list));
  }, []);

  // -------------------------------
  // 2. Sync selectedCountry with URL param
  // (If user lands on /country/France directly)
  // -------------------------------
  useEffect(() => {
    if (countryName) {
      setSelectedCountry(countryName);
    }
  }, [countryName]);

  // -------------------------------
  // 3. Fetch population whenever both
  //    country and year are selected
  // -------------------------------
  useEffect(() => {
    if (!selectedCountry || !year) return;

    fetchPopulation(selectedCountry, year).then((result) =>
      setPopulation(result)
    );
  }, [selectedCountry, year]);

  // -------------------------------
  // 4. Handle when user picks a new country
  //    - Update state
  //    - Update URL using navigate()
  // -------------------------------
  const handleCountryChange = (newCountry) => {
    setSelectedCountry(newCountry);

    // If a country is chosen, navigate to /country/{name}
    if (newCountry) {
      navigate(`/country/${encodeURIComponent(newCountry)}`);
    } else {
      // If they clear the selection, go back to homepage
      navigate("/");
    }
  };

  // -------------------------------
  // 5. Render UI
  // -------------------------------
  return (
    <section>
      <h2>Country Population Finder</h2>
      <p>Select a country and a year to view the population.</p>

      {/* Country selector */}
      <CountrySelect
        countries={countries}
        selected={selectedCountry}
        onChange={handleCountryChange}
      />

      {/* Year selector */}
      <YearSelect year={year} onChange={setYear} />

      {/* Population display */}
      <PopulationPanel
        population={population}
        country={selectedCountry}
        year={year}
      />
    </section>
  );
}
