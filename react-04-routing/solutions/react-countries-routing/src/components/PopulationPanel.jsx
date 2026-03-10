export default function PopulationPanel({ population, country, year }) {
    if (!population) return null;
  
    return (
      <div className="population-panel">
        <h3>
          {country} ({year})
        </h3>
        <p>Population: {population.toLocaleString()}</p>
      </div>
    );
}
