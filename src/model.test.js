import { stepModel } from "./model";

describe("stepModel", () => {
  describe("live cell with fewer than two live neighbors dies", () => {
    test("live cell with zero live neighbors dies", () => {
      const grid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
      const result = stepModel(grid);
      expect(result[1][1]).toEqual(0);
    });

    test("live cell with one live neighbor dies", () => {
      const grid = [[0, 1, 0], [0, 1, 0], [0, 0, 0]];
      const result = stepModel(grid);
      expect(result[1][1]).toEqual(0);
    });
  });

  describe("live cell with two or three live neighbors lives", () => {
    test("live cell with two live neighbors lives", () => {
      const grid = [[0, 0, 0], [1, 1, 1], [0, 0, 0]];
      const result = stepModel(grid);
      expect(result[1][1]).toEqual(1);
    });

    test("live cell with three live neighbors lives", () => {
      const grid = [[1, 1, 0], [0, 1, 0], [0, 0, 1]];
      const result = stepModel(grid);
      expect(result[1][1]).toEqual(1);
    });
  });

  test("live cell with more than three live neighbors dies", () => {
    const grid = [[1, 0, 1], [0, 1, 0], [1, 0, 1]];
    const result = stepModel(grid);
    expect(result[1][1]).toEqual(0);
  });

  test("dead cell with three live neighbors becomes live cell", () => {
    const grid = [[1, 0, 1], [0, 0, 0], [0, 1, 0]];
    const result = stepModel(grid);
    expect(result[1][1]).toEqual(1);
  });
});
