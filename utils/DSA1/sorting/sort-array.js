/**
 * TEST CASES FOR SORT AN ARRAY
 */
const testCases = [
    // Basic test cases
    {
        name: "Example 1: Basic unsorted array",
        input: { nums: [5, 2, 3, 1] },
        expected: [1, 2, 3, 5],
        description: "Simple unsorted array"
    },

    {
        name: "Example 2: Array with duplicates",
        input: { nums: [5, 1, 1, 2, 0, 0] },
        expected: [0, 0, 1, 1, 2, 5],
        description: "Array contains duplicate values"
    },

    // Edge cases
    {
        name: "Edge: Single element",
        input: { nums: [1] },
        expected: [1],
        description: "Minimum array length (1 element)"
    },

    {
        name: "Edge: Two elements",
        input: { nums: [2, 1] },
        expected: [1, 2],
        description: "Two elements needing swap"
    },

    {
        name: "Edge: Already sorted",
        input: { nums: [1, 2, 3, 4, 5] },
        expected: [1, 2, 3, 4, 5],
        description: "Array already in ascending order"
    },

    {
        name: "Edge: Reverse sorted",
        input: { nums: [5, 4, 3, 2, 1] },
        expected: [1, 2, 3, 4, 5],
        description: "Array in descending order (worst case)"
    },

    {
        name: "Edge: All same elements",
        input: { nums: [3, 3, 3, 3, 3] },
        expected: [3, 3, 3, 3, 3],
        description: "All elements are identical"
    },

    // Corner cases
    {
        name: "Corner: Negative numbers",
        input: { nums: [-5, -1, -3, -2, -4] },
        expected: [-5, -4, -3, -2, -1],
        description: "All negative numbers"
    },

    {
        name: "Corner: Mix of positive and negative",
        input: { nums: [3, -1, 0, -5, 2] },
        expected: [-5, -1, 0, 2, 3],
        description: "Mix of positive, negative, and zero"
    },

    {
        name: "Corner: Large numbers at boundaries",
        input: { nums: [50000, -50000, 0, 25000, -25000] },
        expected: [-50000, -25000, 0, 25000, 50000],
        description: "Numbers at constraint boundaries"
    },

    // Stress test
    {
        name: "Stress: Large random array",
        input: {
            nums: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100000) - 50000)
        },
        expected: null, // Will be validated by checking if sorted
        description: "Large array with random values"
    }
];

/**
 * Custom validator for stress test (check if array is sorted)
 */
function validator(result, expected, input) {
    // For stress test, expected is null, so we just check if sorted
    if (expected === null) {
        // Check if array is sorted in ascending order
        for (let i = 1; i < result.length; i++) {
            if (result[i] < result[i - 1]) {
                return false;
            }
        }
        // Check if it's a permutation of input (same elements)
        const inputSorted = [...input.nums].sort((a, b) => a - b);
        const resultSorted = [...result].sort((a, b) => a - b);
        return JSON.stringify(inputSorted) === JSON.stringify(resultSorted);
    }

    // For other tests, check exact match
    return JSON.stringify(result) === JSON.stringify(expected);
}

module.exports = { testCases, validator };
