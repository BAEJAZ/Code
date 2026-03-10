import { useEffect, useState } from "react";
import { fetchCountries } from "./functions/api";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    //Utilise fetchCountries function imported from /api here to set the state of countries 

    // fetch countries on mount

    // fetch population when both country & year are selected

  }, []);

  return (
    <div className="app">
      <CountrySelect ></CountrySelect>
      <h1>World Population Countries</h1>
    </div>
  );
}
