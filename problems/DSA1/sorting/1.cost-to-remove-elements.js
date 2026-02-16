/**
 * Run this problem:
 * node problems/DSA1/sorting/cost-to-remove-elements.js
 */

/**
 * Problem: Cost to Remove Elements
 * Difficulty: Easy
 * Category: Sorting
 * Source: Custom / Common Interview Question
 * 
 * Description:
 * Given an integer array A of size N. You can remove any element from the array in one operation.
 * The cost of this operation is the sum of all elements in the array present before this operation.
 * Find the minimum cost to remove all elements from the array.
 * 
 * Constraints:
 * - 0 <= N <= 1000
 * - 1 <= A[i] <= 1000
 * 
 * Examples:
 * Input: A = [2, 1]
 * Output: 4
 * Explanation:
 * 1. Remove 2: Cost = 2 + 1 = 3. Array becomes [1].
 * 2. Remove 1: Cost = 1. Array becomes [].
 * Total Cost = 3 + 1 = 4.
 * 
 * Input: A = [5]
 * Output: 5
 */

// ============================================
// SOLUTION 1: Greedy Approach (Sort Descending)
// ============================================
/**
 * Approach:
 * To minimize the total cost, we want to remove the largest elements when the array size is smallest,
 * effectively multiplying them by a smaller factor. However, looking at the cost structure:
 * Cost = Sum(Elements in iteration 1) + Sum(Elements in iteration 2) + ...
 * 
 * An element removed at step `k` (1-indexed) contributes to the sum `k` times.
 * Total Cost = Sum(A[i] * (position_of_removal_from_start))
 * 
 * To minimize this sum, we should assign smaller multipliers to larger values.
 * Wait, let's re-verify.
 * 
 * Example: [A, B]
 * Order A, then B:
 * Cost 1: A+B
 * Cost 2: B
 * Total: A + 2B
 * 
 * Order B, then A:
 * Cost 1: A+B
 * Cost 2: A
 * Total: 2A + B
 * 
 * If A > B, then A + 2B < 2A + B (subtract A+B from both sides -> B < A).
 * So if A > B, we want A to be removed first (multiplier 1) and B second (multiplier 2).
 * 
 * Generalizing: We should remove elements in Descending Order.
 * The largest element is removed 1st (multiplied by 1).
 * The 2nd largest is removed 2nd (multiplied by 2).
 * ...
 * The smallest element is removed last (multiplied by N).
 * 
 * Algorithm:
 * 1. Sort the array in descending order.
 * 2. Iterate through the sorted array.
 * 3. Add A[i] * (i + 1) to the total cost.
 * 
 * Time Complexity: O(N log N)
 * - Due to sorting.
 * 
 * Space Complexity: O(1)
 * - If we ignore the space taken by sort (or O(N) depending on engine).
 */
function solution1(A) {
    // Handle edge case for empty array
    if (!A || A.length === 0) return 0;

    // Sort in descending order
    // Note: copy array to avoid mutating input if that's a concern, though usually fine in CP
    // A.sort((a, b) => b - a); 
    // Creating a copy to be safe and pure
    const sortedA = [...A].sort((a, b) => b - a);

    let totalCost = 0;
    for (let i = 0; i < sortedA.length; i++) {
        totalCost += sortedA[i] * (i + 1);
    }

    return totalCost;
}

// ============================================
// RUN TESTS
// ============================================
// ============================================
// RUN TESTS
// ============================================
const { runTests } = require('../../../utils/test-runner');
const { testCases, validator } = require('../../../utils/DSA1/sorting/cost-to-remove-elements');

if (require.main === module) {
    // 1. Run Automated Test Runner
    runTests({
        problemName: "Cost to Remove Elements",
        solution: solution1,
        testCases: testCases,
        validator: validator,
        currentComplexity: { time: 'O(N log N)', space: 'O(1)' },
        optimalComplexity: { time: 'O(N log N)', space: 'O(1)' }
    });

    // 2. Dummy Data Execution Block (Visual Check)
    console.log("\n--- Standalone Execution ---");
    const dummyInput = [2, 1];
    console.log("Input:", dummyInput);
    console.log("Output:", solution1(dummyInput));
}

module.exports = { solution1 };

/*
 * Educational Summary:
 * - Array.prototype.sort(): In V8 (Chrome/Node), this typically uses TimSort. 
 *   Time Complexity: O(N log N). Space Complexity: O(N) due to creating a new array [...A] to avoid mutation.
 *   Note: In-place sort would be O(1) space but modifies input.
 */
