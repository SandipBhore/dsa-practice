/**
 * Run:
 * & "C:\Program Files\Java\jdk-25.0.2\bin\javac.exe" problems/DSA1/sorting/1.CostToRemoveElements.java
 * & "C:\Program Files\Java\jdk-25.0.2\bin\java.exe" problems.DSA1.sorting.CostToRemoveElements
 * 
 * NOTE: Java is a compiled language. 
 * - When you modify this .java file, you MUST re-run 'javac' to update the .class file (bytecode).
 * - Running the code executes the .class file, not the .java file directly.
 */
package problems.DSA1.sorting;

import java.util.Arrays;

/**
 * Problem: Cost to Remove Elements
 * Difficulty: Easy
 * Category: Sorting
 * Description: Given an integer array A, find min cost to remove all elements. Cost = Sum of current elements.
 */
class CostToRemoveElements {

    /**
     * Calculates the minimum cost to remove all elements.
     * 
     * Time Complexity: O(N log N)
     * Space Complexity: O(1) or O(log N) for sort stack
     */
    public static int solve(int[] A) {
        if (A == null || A.length == 0) {
            return 0;
        }

        // Sort ascending: [Smallest, ..., Largest]
        // Time: O(N log N) | Space: O(log N) (Dual-Pivot Quicksort)
        Arrays.sort(A); // Time: O(N log N) | Space: O(log N)
        
        int n = A.length;
        int totalCost = 0;
        
        // A[0] is smallest (removed last, coeff N)
        // A[n-1] is largest (removed first, coeff 1)
        for (int i = 0; i < n; i++) {
            // Coeff = n - i
            totalCost += A[i] * (n - i);
        }

        return totalCost;
    }

    public static void main(String[] args) {
        // Dummy Data & Verification
        int[] input1 = {2, 1};
        int expected1 = 4;
        int result1 = solve(input1);
        System.out.println("Test 1 (Basic): " + (result1 == expected1 ? "PASS" : "FAIL") + " | Expected: " + expected1 + ", Got: " + result1);

        int[] input2 = {5};
        int expected2 = 5;
        int result2 = solve(input2);
        System.out.println("Test 2 (Single): " + (result2 == expected2 ? "PASS" : "FAIL") + " | Expected: " + expected2 + ", Got: " + result2);

        int[] input3 = {1, 2, 3};
        int expected2_custom = 10;
        int result3 = solve(input3);
        System.out.println("Test 3 (Three): " + (result3 == expected2_custom ? "PASS" : "FAIL") + " | Expected: " + expected2_custom + ", Got: " + result3);
    }
}

/*
 * Educational Summary:
 * 1. Arrays.sort(int[]): Uses Dual-Pivot Quicksort. Time Complexity is O(N log N). Space is O(log N).
 * 2. Greedy Approach: To minimize cost, we multiply larger numbers by smaller coefficients.
 *    Sorting ascending allows us to remove smaller elements last (highest coefficients).
 */
