export default function CountrySelect({ countries, selected, onChange }) {
    return (
      <div className="control">
        <label>Country:</label>
        <select value={selected} onChange={(event) => onChange(event.target.value)}>
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    );
}
