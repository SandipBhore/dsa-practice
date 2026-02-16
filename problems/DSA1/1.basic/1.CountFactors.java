/**
 * Run:
 * & "C:\Program Files\Java\jdk-25.0.2\bin\javac.exe" problems/DSA1/1.basic/1.CountFactors.java
 * & "C:\Program Files\Java\jdk-25.0.2\bin\java.exe" problems.DSA1.basic.CountFactors
 * 
 * NOTE: Java is a compiled language. 
 * - When you modify this .java file, you MUST re-run 'javac' to update the .class file (bytecode).
 * - Running the code executes the .class file, not the .java file directly.
 */
package problems.DSA1.basic;

/**
 * Problem: Count Factors
 * Difficulty: Easy
 * Category: Math
 * Description: Given an integer A, find the count of its factors.
 */
public class CountFactors {

    /**
     * Calculates the number of factors of A.
     * 
     * Time Complexity: O(sqrt(A))
     * Space Complexity: O(1)
     */
    public static int solve(int A) {
        int count = 0;
        // Iterate from 1 to sqrt(A)
        // Time: O(sqrt(A))
        for (long i = 1; i * i <= A; i++) {
            if (A % i == 0) {
                if (i * i == A) {
                    count++; // Perfect square case
                } else {
                    count += 2; // i and A/i are both factors
                }
            }
        }
        return count;
    }

    public static void main(String[] args) {
        // Dummy Data & Verification
        int input1 = 6;
        int expected1 = 4;
        int result1 = solve(input1);
        System.out.println("Test 1 (6): " + (result1 == expected1 ? "PASS" : "FAIL") + " | Expected: " + expected1 + ", Got: " + result1);

        int input2 = 5;
        int expected2 = 2; // Prime
        int result2 = solve(input2);
        System.out.println("Test 2 (Prime 5): " + (result2 == expected2 ? "PASS" : "FAIL") + " | Expected: " + expected2 + ", Got: " + result2);

        int input3 = 25;
        int expected_sq = 3; // 1, 5, 25
        int result3 = solve(input3);
        System.out.println("Test 3 (Square 25): " + (result3 == expected_sq ? "PASS" : "FAIL") + " | Expected: " + expected_sq + ", Got: " + result3);
    }
}

/*
 * Educational Summary:
 * 1. Iterating up to sqrt(A): A fundamental number theory technique. If A = x * y, then at least one 
 *    of x or y must be <= sqrt(A). This allows finding all factors in O(sqrt(A)) time.
 * 2. Perfect Squares: Special handling is needed when i * i == A to avoid counting the same factor twice.
 */
