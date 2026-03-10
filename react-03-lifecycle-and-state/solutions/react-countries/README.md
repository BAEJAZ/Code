# Exercise: Countries and Population (30–45 mins)

Build a small React app that:

1. Fetches the list of countries on mount  
2. Lets the user choose a country and a year  
3. Fetches and shows the population for that country and year

### 🌍 API Reference
You will use the free API at:

**List of countries:**  
`https://d6wn6bmjj722w.population.io/1.0/countries`  
→ returns  
```json
{ 
  "countries": ["Afghanistan", "Albania", "Algeria", ...] 
}
```

---

**Population for a specific country and year:**  
`https://d6wn6bmjj722w.population.io/1.0/population/{country}/{date}`  

Example:  
`https://d6wn6bmjj722w.population.io/1.0/population/United%20Kingdom/2020-01-01/`  


> Hint: always `encodeURIComponent(country)` before placing the country in the URL.

---

## Requirements

### 1. Fetch countries on mount
- In `useEffect(() => { … }, [])` fetch the countries list
- Show **Loading…** while the request is in flight
- On success render the countries in a select box
- On failure show a short error message

### 2. Filter by name
- Add a text input above the select  
- As the user types, filter the options on the client

### 3. Choose a year
- Add a year select with values `2000` to `2020` (inclusive)  
- Default to the current year or 2015

### 4. Fetch population for the chosen country and year
- When either select changes, fetch population for that pair  
- Show **Loading population…** while in flight  
- Display the population as a formatted number, for example `66,796,807`

### 5. Clean up
- Use `AbortController` in your population `useEffect` so that if the user changes country or year quickly you cancel the previous request (google it)
- If a request is aborted do not show an error

### 6. Nice touches
- Disable the population area until both selects have a value
- Button to **Refetch** the current pair
- Handle no results with a friendly message

---

## Stretch goals (if time)

- Cache per country and year in state or a ref so repeat views do not refetch  
  Key idea: a map like `{["United Kingdom-2015"]: 66796807}`
- Add a simple loading bar for the population request
- Add a tiny summary card: Country flag from `https://flagcdn.com/` by ISO code if you map names to codes, otherwise skip

---

## Acceptance criteria

- Countries are fetched on mount and shown in a select  
- Typing in the filter narrows the options without another fetch  
- Changing country or year triggers a population fetch  
- Loading and error states are visible and easy to understand  
- Aborting works when switching country or year quickly  
- UI never crashes on unexpected API shapes and shows a friendly message

---
