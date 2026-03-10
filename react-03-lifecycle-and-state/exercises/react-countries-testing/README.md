# Exercise: Testing the Countries App

Now that your Countries and Population app is working, it is time to test its behaviour.
You will use Vitest and React Testing Library to simulate user actions, verify state changes, and stub API responses.

## Objectives

By the end of this exercise, you should be able to:

- Render React components inside a test environment
- Simulate user interactions (for example selecting a country or year)
- Assert that your UI updates correctly
- Stub fetch() calls to control API responses
- Write clean Arrange–Act–Assert tests

## Tasks

### 1. Test the CountrySelect component
Write a test to ensure the list of options renders and that selecting a new country calls the provided handler.

### 2. Test the YearSelect component
Write a test to confirm that:
- All expected year options (2020–2030) render correctly
- Selecting a year triggers the onChange handler with the chosen value
- The currently selected year is reflected in the UI

### 3. Test the PopulationPanel component
Write a test to confirm that:
- The panel renders the country name, year, and formatted population when data is provided
- The component renders nothing when the population prop is missing or null

### 4. Test the API utility functions
The API module (src/functions/api.js) defines two async functions:
fetchCountries() and fetchPopulation(country, year).
Stub the fetch() calls to avoid hitting the real API.

### 5. Test error handling
Simulate failing API responses and thrown network errors to ensure your app handles errors gracefully.

### 6. Integrate with the main App
(Optional, stretch task)
Render your full <App /> and use vi.spyOn(global, "fetch") to return fake country and population data.
Then simulate user selections with userEvent.selectOptions() and assert that population text updates.

## Success Criteria

- Tests run with npm run test
- Components respond correctly to simulated user input
- API calls are stubbed and no real network requests are made
- Error states and loading text are handled correctly
- All tests pass consistently and quickly

## Hints

- Use screen.findByText() or findByRole() for async renders
- Always await user interactions
- Restore mocks with vi.restoreAllMocks() to avoid cross-test interference
- Keep each test small and focused — one expectation per behaviour

Stretch goal:
Write one test that simulates rapid country changes and ensures only the latest population result is rendered (testing your AbortController logic).
