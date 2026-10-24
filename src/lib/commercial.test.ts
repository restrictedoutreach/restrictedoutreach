import { describe, it, expect } from "vitest";
import { diagnosticRules, choose } from "./commercial";
import { localizedPath, pathLanguage, basePath, localizedHead } from "./localized-seo";
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
describe("multilingual URLs", () => {
  it("keeps English URLs and gives Spanish and Catalan distinct URLs", () => {
    expect(localizedPath("/strategy", "en")).toBe("/strategy");
    expect(localizedPath("/strategy", "es")).toBe("/es/strategy");
    expect(localizedPath("/strategy", "ca")).toBe("/ca/strategy");
  });
  it("switches language while preserving the page", () => {
    expect(localizedPath("/es/services/development", "ca")).toBe("/ca/services/development");
    expect(basePath("/ca")).toBe("/");
    expect(pathLanguage("/ca/strategy")).toBe("ca");
  });
  it("does not advertise untranslated legal versions", () => {
    expect(localizedPath("/privacy", "es")).toBe("/privacy");
  });
  it("uses self-canonical and reciprocal language alternatives", () => {
    const head = localizedHead("/strategy", "ca");
    expect(head.links.find((link) => link.rel === "canonical")?.href).toBe("https://www.restrictedoutreach.com/ca/strategy");
    expect(head.links.filter((link) => link.rel === "alternate").map((link) => link.href)).toEqual(["https://www.restrictedoutreach.com/strategy", "https://www.restrictedoutreach.com/es/strategy", "https://www.restrictedoutreach.com/ca/strategy", "https://www.restrictedoutreach.com/strategy"]);
  });
});
