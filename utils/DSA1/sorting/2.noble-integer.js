/**
 * Test cases for Noble Integer problem.
 */
const testCases = [
    {
        input: [3, 2, 1, 3],
        expected: 1,
        description: "Example 1: p=2, count(nums > 2) is 2 (the two 3s)"
    },
    {
        input: [1, 1, 3, 3],
        expected: -1,
        description: "Example 2: No noble integer"
    },
    {
        input: [0, 2, 3],
        expected: -1,
        description: "No noble integer: zero at index 0 has 2 greater"
    },
    {
        input: [-4, -2, 0, -1, -6],
        expected: 1,
        description: "Noble found: 0 at index 4 (sorted) has 0 greater"
    },
    {
        input: [7, 3, 16, 10],
        expected: -1,
        description: "All distinct, no noble"
    },
    {
        input: [-4, 7, 5, 3, 5, 6, 4, 3, 2],
        expected: -1,
        description: "Complex case with duplicates, no noble"
    },
    {
        input: [0],
        expected: 1,
        description: "Single zero: noble"
    },
    {
        input: [0, 0, 0, 0],
        expected: 1,
        description: "Multiple zeros: noble"
    }
];

const validator = (actual, expected) => actual === expected;

module.exports = { testCases, validator };
