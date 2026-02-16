/**
 * Run this problem:
 * node problems/DSA1/1.count-factors.js
 */

/**
 * Problem: Count Factors
 * Difficulty: Easy
 * Category: Math / Number Theory
 * Source: InterviewBit / Scaler
 * 
 * Description:
 * Given an integer A, you need to find the count of it's factors.
 * Factor of a number is the number which divides it perfectly leaving no remainder.
 * 
 * Constraints:
 * 1 <= A <= 10^9
 * 
 * Examples:
 * Input: 5 -> Output: 2 (1, 5)
 * Input: 10 -> Output: 4 (1, 2, 5, 10)
 */

// ============================================
// SOLUTION: O(sqrt(A)) Optimized
// ============================================
/**
 * Optimized Count Factors
 * 
 * Approach: Prime Factorization
 * Total Factors = (a1 + 1) * (a2 + 1) * ... * (ak + 1)
 * where A = p1^a1 * p2^a2 * ...
 * 
 * Time Complexity: O(sqrt(A)), but much faster for composite numbers
 * Space Complexity: O(1)
 */
function countFactors(A) {
    if (A === 1) return 1;

    let totalFactors = 1;
    let temp = A;

    // Trial division for prime factorization
    for (let i = 2; i * i <= temp; i++) {
        if (temp % i === 0) {
            let count = 0;
            while (temp % i === 0) {
                count++;
                temp /= i;
            }
            totalFactors *= (count + 1);
        }
    }

    // If temp > 1, the remaining temp is a prime factor
    if (temp > 1) {
        totalFactors *= 2;
    }

    return totalFactors;
}



// ============================================
// RUN TESTS
// ============================================
const { runTests } = require('../../utils/test-runner');
const { testCases, validator } = require('../../utils/DSA1/1.count-factors');

if (require.main === module) {
    // 1. Run Automated Test Runner
    runTests({
        problemName: "Count Factors",
        solution: countFactors,
        testCases: testCases,
        validator: validator,
        currentComplexity: { time: 'O(sqrt(A))', space: 'O(1)' },
        optimalComplexity: { time: 'O(sqrt(A))', space: 'O(1)' }
    });

    // 2. Dummy Data Execution Block (Visual Check)
    console.log("\n--- Standalone Execution ---");
    const dummyInput = 10;
    console.log("Input:", dummyInput);
    console.log("Output:", countFactors(dummyInput));
}

module.exports = { countFactors };

/*
 * Educational Summary:
 * - Prime Factorization: Calculating factors by finding prime components.
 *   Uses trial division up to sqrt(A). The approach is efficient for most standard integer sizes (up to 10^9 or 10^12).
 */
