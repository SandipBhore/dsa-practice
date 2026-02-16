/**
 * Run this problem:
 * node problems/DSA1/sorting/2.noble-integer.js
 */

/**
 * Problem: Noble Integer
 * Difficulty: Easy
 * Category: Sorting
 * 
 * Description:
 * Given an integer array A, find if an integer p exists in the array such that 
 * the number of integers greater than p in the array equals p.
 * 
 * Constraints:
 * 1 <= |A| <= 2*10^5
 * -10^8 <= A[i] <= 10^8
 * 
 * Examples:
 * Input: [3, 2, 1, 3] -> Output: 1 (p=2 exists)
 * Input: [1, 1, 3, 3] -> Output: -1
 */

/**
 * Approach: Sorting
 * 
 * Algorithm:
 * 1. Sort the array in ascending order.
 * 2. Traverse the array and check:
 *    - If A[i] == A[i+1], skip (count of elements greater than A[i] is same as A[i+1]).
 *    - The number of elements greater than A[i] is (total_length - 1 - i).
 *    - If A[i] == (total_length - 1 - i), then A[i] is noble.
 * 3. Special case for the last element:
 *    - If A[n-1] == 0, it is noble (0 elements greater than it).
 * 
 * Time Complexity: O(N log N) for sorting.
 * Space Complexity: O(1) in-place sort.
 */
function solve(A) {
    if (!A || A.length === 0) return -1;

    // Create a copy to avoid mutating input passed by reference
    const arr = [...A].sort((a, b) => a - b); // Time: O(N log N) | Space: O(N)
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Skip duplicate elements
        if (arr[i] === arr[i + 1]) continue;

        // Count of numbers greater than arr[i]
        const countGreater = n - 1 - i;
        if (arr[i] === countGreater) {
            return 1;
        }
    }

    // Check last element
    if (arr[n - 1] === 0) {
        return 1;
    }

    return -1;
}

// ============================================
// RUN TESTS
// ============================================
const { runTests } = require('../../../utils/test-runner');
const { testCases, validator } = require('../../../utils/DSA1/sorting/2.noble-integer');

if (require.main === module) {
    // 1. Run Automated Test Runner
    runTests({
        problemName: "Noble Integer",
        solution: solve,
        testCases: testCases,
        validator: validator,
        currentComplexity: { time: 'O(n log n)', space: 'O(1)' },
        optimalComplexity: { time: 'O(n log n)', space: 'O(1)' }
    });

    // 2. Dummy Data Execution Block (Visual Check)
    console.log("\n--- Standalone Execution ---");
    const dummyInput = [3, 2, 1, 3];
    console.log("Input:", dummyInput);
    console.log("Output:", solve(dummyInput));
}

module.exports = { solve };

/*
 * Educational Summary:
 * 1. Array.prototype.sort(): Built-in JavaScript sort (TimSort). Time Complexity is O(N log N).
 * 2. Spread Operator [...A]: Used to clone the array. Time Complexity is O(N). Space is O(N).
 * 3. Noble Integer Condition: Exploits the property of sorted arrays where n-1-i represents elements strictly to the right.
 */
