const Tree = require("../TreeKata.js");
require("jest-each");

describe("TreeKata", () => {
  test.each`
    input     | expectedResult
    ${"TRUE"} | ${true}
    ${"FALSE"} | ${false}

  `(
    "should calculate score of $expectedResult from $input",
    ({ input, expectedResult }) => {
      expect(Tree.Calculator(input)).toBe(expectedResult);
    }
  );
});
