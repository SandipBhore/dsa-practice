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
 * Using the property that factors come in pairs.
 * If 'i' is a factor of A, then A/i is also a factor.
 * We only need to iterate up to sqrt(A).
 * 
 * Time Complexity: O(sqrt(A))
 * Space Complexity: O(1)
 */
function countFactors(A) {
    let count = 0;
    for (let i = 1; i * i <= A; i++) {
        if (A % i === 0) {
            if (i * i === A) {
                // Perfect square case (e.g., 5*5=25), count factor only once
                count += 1;
            } else {
                // Factor pair case (e.g., 2*5=10), count both factors
                count += 2;
            }
        }
    }
    return count;
}

// ============================================
// RUN TESTS
// ============================================
const { runTests } = require('../../utils/test-runner');
const { testCases, validator } = require('../../utils/DSA1/1.count-factors');

runTests({
    problemName: "Count Factors",
    solution: countFactors,
    testCases: testCases,
    validator: validator
});
