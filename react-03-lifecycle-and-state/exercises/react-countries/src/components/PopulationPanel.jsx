export default function PopulationPanel({population, country, year}) {
    return (
        <div className="populationResult">
            <h3>{country}</h3>
            <h3>{year}</h3>
            <h1>{population}</h1>
        </div>

    )
}


