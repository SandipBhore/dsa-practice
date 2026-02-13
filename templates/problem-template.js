/**
 * Run this problem:
 * node problems/DSA[X]/[problem-name].js
 */

/**
 * PROBLEM TEMPLATE
 * 
 * Copy this file to create new problems:
 * cp templates/problem-template.js problems/DSA1/[category]/[problem-name].js
 * 
 * Then fill in all the sections marked with TODO
 */

/**
 * Problem: [TODO: Problem Name]
 * Difficulty: [TODO: Easy | Medium | Hard]
 * Category: [TODO: Arrays | Strings | etc.]
 * Source: [TODO: LeetCode #123 | HackerRank | Custom]
 * 
 * Description:
 * [TODO: Write a clear problem statement]
 * 
 * Constraints:
 * - [TODO: List all constraints]
 * - [TODO: Be specific with ranges, e.g., 1 <= n <= 10^5]
 * 
 * Examples:
 * Input: [TODO: example input]
 * Output: [TODO: example output]
 * Explanation: [TODO: why this is the answer]
 */

// ============================================
// SOLUTION 1: [TODO: Approach Name]
// ============================================
/**
 * [TODO: Describe the approach]
 * 
 * Algorithm:
 * 1. [TODO: Step 1]
 * 2. [TODO: Step 2]
 * 3. [TODO: Step 3]
 * 
 * Time Complexity: O([TODO])
 * - [TODO: Explain why]
 * 
 * Space Complexity: O([TODO])
 * - [TODO: Explain why]
 */
function solution1(input) {
    // TODO: Implement your solution here

    return result;
}

// ============================================
// SOLUTION 2: [TODO: Alternative Approach]
// ============================================
/**
 * [TODO: Describe this approach]
 * 
 * Algorithm:
 * 1. [TODO: Step 1]
 * 2. [TODO: Step 2]
 * 
 * Time Complexity: O([TODO])
 * Space Complexity: O([TODO])
 */
function solution2(input) {
    // TODO: Implement alternative solution

    return result;
}

// ============================================
// RUN TESTS
// ============================================
/**
 * Test cases are now located in:
 * utils/DSA[X]/[problem-name].js
 * 
 * 1. Create a test case file in utils/DSA1/
 * 2. Update the require path below
 */
const { runTests } = require('../../utils/test-runner');
const { testCases, validator } = require('../../utils/DSA1/[TODO: Name]');

runTests({
    problemName: "[TODO: Name]",
    solution: solution1, // Change to test different solutions
    testCases: testCases,
    validator: validator,
    currentComplexity: { time: '[TODO]', space: '[TODO]' },
    optimalComplexity: { time: '[TODO]', space: '[TODO]' }
});
