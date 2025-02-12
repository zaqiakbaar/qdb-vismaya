import { generateRandomNumber } from "../generateRandomNumber";

describe("generateRandomNumber", () => {
  it("should return a number between 1 and 10", () => {
    for (let i = 0; i < 20; i++) {
      const result = generateRandomNumber();
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    }
  });

  it("should return an integer", () => {
    for (let i = 0; i < 20; i++) {
      const result = generateRandomNumber();
      expect(Number.isInteger(result)).toBe(true);
    }
  });
});
