import { useEffect, useState } from "react";
import { fetchCountries } from "./api";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchCountries();
        setCountries(result);
      } catch (err) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);
  
  return (
    <div className="app">
      <h1>World Population API Demo</h1>
      {loading && <p>Loading data…</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && (
        <>
          <p>Number of countries: {countries.length}</p>
          <ul className="list">
            {countries.map((country) => (
              <li key={country}>{country}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
