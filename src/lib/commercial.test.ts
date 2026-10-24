import { describe, it, expect } from "vitest";
import { diagnosticRules, choose } from "./commercial";
describe("commercial scopes", () => {
  it("workshop lasts two hours", () =>
    expect(diagnosticRules.workshopMinutes).toBe(120));
  it("pilot lasts thirty days", () =>
    expect(diagnosticRules.pilotDays).toBe(30));
  it("methodology lasts six weeks", () =>
    expect(diagnosticRules.methodologyWeeks).toBe(6));
  it("supports three languages", () => {
    expect(choose("es", "ES", "CA", "EN")).toBe("ES");
    expect(choose("ca", "ES", "CA", "EN")).toBe("CA");
    expect(choose("en", "ES", "CA", "EN")).toBe("EN");
  });
});
