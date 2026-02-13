/**
 * TEST CASES FOR TWO SUM
 */
const testCases = [
    // Basic test cases from problem examples
    {
        name: "Example 1: Basic case",
        input: { nums: [2, 7, 11, 15], target: 9 },
        expected: [0, 1],
        description: "First two elements sum to target"
    },

    {
        name: "Example 2: Middle elements",
        input: { nums: [3, 2, 4], target: 6 },
        expected: [1, 2],
        description: "Elements in middle of array"
    },

    {
        name: "Example 3: Duplicate numbers",
        input: { nums: [3, 3], target: 6 },
        expected: [0, 1],
        description: "Same number appears twice"
    },

    // Edge cases
    {
        name: "Edge: Minimum length array",
        input: { nums: [1, 2], target: 3 },
        expected: [0, 1],
        description: "Array with exactly 2 elements (minimum per constraints)"
    },

    {
        name: "Edge: Negative numbers",
        input: { nums: [-1, -2, -3, -4, -5], target: -8 },
        expected: [2, 4],
        description: "All negative numbers"
    },

    {
        name: "Edge: Mix of positive and negative",
        input: { nums: [-3, 4, 3, 90], target: 0 },
        expected: [0, 2],
        description: "Negative and positive numbers cancel out"
    },

    // Corner cases
    {
        name: "Corner: Zero in array",
        input: { nums: [0, 4, 3, 0], target: 0 },
        expected: [0, 3],
        description: "Array contains zeros"
    },

    {
        name: "Corner: Large numbers",
        input: { nums: [1000000000, -1000000000, 500000000], target: 0 },
        expected: [0, 1],
        description: "Numbers at constraint boundaries"
    },

    // Stress test
    {
        name: "Stress: Large array",
        input: {
            nums: Array.from({ length: 10000 }, (_, i) => i),
            target: 19997
        },
        expected: [9998, 9999],
        description: "Array at maximum constraint length (10^4)"
    }
];

/**
 * Custom validator to handle different valid orderings
 * [0,1] and [1,0] are both valid answers
 */
function validator(result, expected, input) {
    if (!Array.isArray(result) || result.length !== 2) return false;

    const { nums, target } = input;
    const [i, j] = result;

    // Verify indices are valid
    if (i < 0 || i >= nums.length || j < 0 || j >= nums.length) return false;

    // Verify indices are different
    if (i === j) return false;

    // Verify the sum is correct
    return nums[i] + nums[j] === target;
}

module.exports = { testCases, validator };
