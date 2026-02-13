/**
 * Problem: Two Sum
 * Difficulty: Easy
 * Category: Arrays
 * Source: LeetCode #1
 * 
 * Description:
 * Given an array of integers nums and an integer target, return indices of
 * the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you
 * may not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists
 * 
 * Examples:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */

// ============================================
// SOLUTION 1: Brute Force (Nested Loops)
// ============================================
/**
 * Approach: Check every pair of numbers
 * 
 * Algorithm:
 * 1. Use two nested loops to check all pairs
 * 2. For each pair (i, j), check if nums[i] + nums[j] == target
 * 3. Return indices when found
 * 
 * Time Complexity: O(n²)
 * - Outer loop runs n times
 * - Inner loop runs (n-1), (n-2), ... times
 * - Total: n * (n-1) / 2 ≈ O(n²)
 * 
 * Space Complexity: O(1)
 * - Only using constant extra space for variables
 */
function twoSumBruteForce(nums, target) {
    // Iterate through each element
    for (let i = 0; i < nums.length; i++) {
        // Check all elements after current element
        // Start from i+1 to avoid using same element twice
        for (let j = i + 1; j < nums.length; j++) {
            // If we found the pair that sums to target
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    // This line should never be reached per problem constraints
    // (exactly one solution exists)
    return [];
}

// ============================================
// SOLUTION 2: Hash Map (Optimal)
// ============================================
/**
 * Approach: Use hash map for O(1) lookups
 * 
 * Algorithm:
 * 1. Create a hash map to store numbers we've seen
 * 2. For each number, calculate complement = target - current number
 * 3. Check if complement exists in hash map
 * 4. If yes, return current index and complement's index
 * 5. If no, add current number to hash map
 * 
 * Why this works:
 * - If nums[i] + nums[j] = target
 * - Then nums[j] = target - nums[i]
 * - We can look up nums[j] in O(1) time using hash map
 * 
 * Time Complexity: O(n)
 * - Single pass through array: O(n)
 * - Hash map lookup/insert: O(1) average case
 * - Total: O(n)
 * 
 * Space Complexity: O(n)
 * - Hash map can store up to n elements in worst case
 * - When no pair found until last element
 */
function twoSumHashMap(nums, target) {
    // Map to store: number -> index
    // Key: the number value
    // Value: the index where we found it
    const seen = new Map();

    // Iterate through array once
    for (let i = 0; i < nums.length; i++) {
        // Calculate what number we need to find
        // If current number is 2 and target is 9,
        // we need to find 7 (because 2 + 7 = 9)
        const complement = target - nums[i];

        // Check if we've seen the complement before
        if (seen.has(complement)) {
            // Found it! Return the indices
            // seen.get(complement) = index where we saw complement
            // i = current index
            return [seen.get(complement), i];
        }

        // Haven't found complement yet
        // Store current number and its index for future lookups
        seen.set(nums[i], i);
    }

    // This should never be reached per problem constraints
    return [];
}

// ============================================
// RUN TESTS
// ============================================
const { runTests } = require('../../../utils/test-runner');
const { testCases, validator } = require('../../../utils/DSA1/arrays/two-sum');

runTests({
    problemName: "Two Sum",
    solution: twoSumHashMap, // Change to twoSumBruteForce to test other solution
    testCases: testCases,
    validator: validator
});
