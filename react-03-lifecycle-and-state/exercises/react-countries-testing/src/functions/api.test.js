import { fetchCountries } from "../functions/api";

it("returns list of countries from stubbed fetch", async () => {
  // Arrange
  const fakeResponse = { countries: ["Japan", "Italy"] };

  vi.spyOn(global, "fetch").mockResolvedValueOnce({
    ok: true,
    json: async () => fakeResponse,
  });

  // Act
  const result = await fetchCountries();

  // Assert
  expect(result).toEqual(["Japan", "Italy"]);

  // Cleanup
  vi.restoreAllMocks();
});
