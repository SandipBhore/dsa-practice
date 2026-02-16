/**
 * Run:
 * & "C:\Program Files\Java\jdk-25.0.2\bin\javac.exe" problems/DSA1/sorting/2.NobleInteger.java
 * & "C:\Program Files\Java\jdk-25.0.2\bin\java.exe" problems.DSA1.sorting.NobleInteger
 * 
 * NOTE: Java is a compiled language. 
 * - When you modify this .java file, you MUST re-run 'javac' to update the .class file (bytecode).
 * - Running the code executes the .class file, not the .java file directly.
 */
package problems.DSA1.sorting;

import java.util.Arrays;

/**
 * Problem: Noble Integer
 * Difficulty: Easy
 * Category: Sorting
 * 
 * Description:
 * Given an integer array A, find if an integer p exists in the array such that 
 * the number of integers greater than p in the array equals p.
 */
class NobleInteger {

    /**
     * Finds if a noble integer exists in the array.
     * 
     * Time Complexity: O(N log N)
     * Space Complexity: O(1)
     */
    public static int solve(int[] A) {
        if (A == null || A.length == 0) return -1;

        // Sort ascending
        Arrays.sort(A); // Time: O(N log N) | Space: O(log N)
        int n = A.length;

        for (int i = 0; i < n - 1; i++) {
            // Skip duplicates
            if (A[i] == A[i + 1]) continue;

            int countGreater = n - 1 - i;
            if (A[i] == countGreater) {
                return 1;
            }
        }

        // Special case: Last element
        if (A[n - 1] == 0) {
            return 1;
        }

        return -1;
    }

    public static void main(String[] args) {
        // Dummy Data & Verification
        int[] input1 = {3, 2, 1, 3};
        int expected1 = 1;
        int result1 = solve(input1);
        System.out.println("Test 1 (Example 1): " + (result1 == expected1 ? "PASS" : "FAIL - Got " + result1));

        int[] input2 = {1, 1, 3, 3};
        int expected2 = -1;
        int result2 = solve(input2);
        System.out.println("Test 2 (Example 2): " + (result2 == expected2 ? "PASS" : "FAIL - Got " + result2));

        int[] input3 = {0, 0, 0};
        int expected3 = 1;
        int result3 = solve(input3);
        System.out.println("Test 3 (Multiple Zeros): " + (result3 == expected3 ? "PASS" : "FAIL - Got " + result3));
    }
}

/*
 * Educational Summary:
 * 1. Arrays.sort(int[]): Standard Java sorting. Time Complexity O(N log N).
 * 2. Count of Greater Elements: In a sorted array, the count of elements to the right of index i
 *    is exactly n - 1 - i.
 * 3. Handling Duplicates: By skipping if A[i] == A[i+1], we ensure the condition is only checked 
 *    at the last occurrence of a specific value.
 */
