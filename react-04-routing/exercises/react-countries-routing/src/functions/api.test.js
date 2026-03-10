// src/functions/api.test.js

/**
 * NOTE FOR LEARNERS
 *
 * In these tests, we are stubbing (faking) network requests made by `fetch()`.
 *
 * There are two main ways to do this in Vitest:
 *
 * 1️ global.fetch = vi.fn(...)
 *    - This completely replaces the real fetch function with our fake one.
 *    - It’s simple, direct, and ideal for unit tests of pure functions like these.
 *    - We use this here because our functions call fetch directly.
 *
 * 2️ vi.spyOn(global, "fetch").mockResolvedValue(...)
 *    - This *wraps* the real fetch function so we can intercept or inspect calls.
 *    - Useful when testing React components or modules that also rely on fetch elsewhere.
 *    - It’s easier to restore afterwards using vi.restoreAllMocks().
 *
 * TLDR — use vi.fn() for simple function tests, and vi.spyOn() for shared/global mocking.
 */

import { fetchCountries, fetchPopulation } from "./api";

describe("API utilities", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("fetchCountries returns list of countries", async () => {
    const mockData = { countries: ["Japan", "France", "Italy"] };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    );

    const result = await fetchCountries();

    expect(global.fetch).toHaveBeenCalledWith(
      "https://d6wn6bmjj722w.population.io/1.0/countries"
    );
    expect(result).toEqual(mockData.countries);
  });

  it("fetchPopulation returns population number", async () => {
    const mockData = { total_population: { population: 123456 } };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    );

    const result = await fetchPopulation("Japan", 2020);

    expect(global.fetch).toHaveBeenCalledWith(
      "https://d6wn6bmjj722w.population.io/1.0/population/Japan/2020-01-01/"
    );
    expect(result).toBe(123456);
  });

  // --- Unhappy paths ---

  it("throws an error if fetchCountries fails", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({ ok: false, status: 500 })
    );

    await expect(fetchCountries()).rejects.toThrow("Failed to fetch countries");
  });

  it("throws an error if fetchPopulation fails", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({ ok: false, status: 404 })
    );

    await expect(fetchPopulation("NowhereLand", 2020)).rejects.toThrow(
      "Failed to fetch population"
    );
  });
});
