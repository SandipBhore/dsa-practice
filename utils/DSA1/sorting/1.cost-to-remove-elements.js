/**
 * TEST CASES FOR COST TO REMOVE ELEMENTS
 */
const testCases = [
    // Basic test cases
    {
        name: "Example 1",
        input: { A: [2, 1] },
        expected: 4,
        description: "Simple two element array"
    },
    {
        name: "Example 2",
        input: { A: [5] },
        expected: 5,
        description: "Single element"
    },

    // Custom cases
    {
        name: "Three elements",
        input: { A: [1, 2, 3] },
        expected: 10,
        description: "Sorted desc: [3, 2, 1] -> 3*1 + 2*2 + 1*3 = 3+4+3 = 10"
    },
    {
        name: "Duplicates",
        input: { A: [3, 3, 3] },
        expected: 18,
        description: "[3, 3, 3] -> 3*1 + 3*2 + 3*3 = 3+6+9 = 18"
    },
    {
        name: "Unsorted mixed corrected",
        input: { A: [4, 1, 6] },
        expected: 17,
        description: "Sorted: [6, 4, 1] -> 6*1 + 4*2 + 1*3 = 17"
    },
    {
        name: "Empty Array",
        input: { A: [] },
        expected: 0,
        description: "Zero elements cost zero"
    },
    {
        name: "Larger values",
        input: { A: [100, 200] },
        expected: 400,
        description: "Sorted: [200, 100] -> 200*1 + 100*2 = 400"
    }
];

function validator(result, expected) {
    return result === expected;
}

module.exports = { testCases, validator };
