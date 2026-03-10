export default function YearSelect({ year, onChange }) {
    const years = Array.from({ length: 11 }, (_, i) => 2020 + i);
  
    return (
      <div className="control">
        <label>Year:</label>
        <select value={year} onChange={(event) => onChange(event.target.value)}>
          <option value="">Select a year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    );
  }
