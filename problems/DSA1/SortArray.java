/**
 * Run:
 * & "C:\Program Files\Java\jdk-25.0.2\bin\javac.exe" problems/DSA1/SortArray.java
 * & "C:\Program Files\Java\jdk-25.0.2\bin\java.exe" problems.DSA1.SortArray
 * 
 * NOTE: Java is a compiled language. 
 * - When you modify this .java file, you MUST re-run 'javac' to update the .class file (bytecode).
 * - Running the code executes the .class file, not the .java file directly.
 */
package problems.DSA1;

import java.util.Arrays;

/**
 * Problem: Sort an Array
 * Difficulty: Medium
 * Category: Sorting
 * Description: Given an array of integers nums, sort the array in ascending order.
 */
public class SortArray {

    /**
     * Sorts the array using Merge Sort.
     * 
     * Time Complexity: O(N log N)
     * Space Complexity: O(N)
     */
    public static int[] solve(int[] nums) {
        if (nums == null || nums.length <= 1) {
            return nums;
        }
        
        // Merge Sort implementation
        // Time: O(N log N) | Space: O(N)
        mergeSort(nums, 0, nums.length - 1);
        return nums;
    }

    private static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;

            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);

            merge(arr, left, mid, right);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; ++i) L[i] = arr[left + i];
        for (int j = 0; j < n2; ++j) R[j] = arr[mid + 1 + j];

        int i = 0, j = 0;
        int k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }

    public static void main(String[] args) {
        // Dummy Data & Verification
        int[] input1 = {5, 2, 3, 1};
        int[] expected1 = {1, 2, 3, 5};
        int[] result1 = solve(input1); // In-place sort
        System.out.println("Test 1 (Basic): " + (Arrays.equals(result1, expected1) ? "PASS" : "FAIL") + " | Expected: " + Arrays.toString(expected1) + ", Got: " + Arrays.toString(result1));

        int[] input2 = {5, 1, 1, 2, 0, 0};
        int[] expected2 = {0, 0, 1, 1, 2, 5};
        int[] result2 = solve(input2);
        System.out.println("Test 2 (Duplicates): " + (Arrays.equals(result2, expected2) ? "PASS" : "FAIL") + " | Expected: " + Arrays.toString(expected2) + ", Got: " + Arrays.toString(result2));
    }
}

/*
 * Educational Summary:
 * - Merge Sort: Divide and Conquer algorithm. Splits array into halves, sorts them recursively, and merges them.
 * - Time Complexity: O(N log N) consistently.
 * - Space Complexity: O(N) for temporary arrays during merge process.
 * - Stability: Merge Sort is stable (preserves order of equal elements).
 */
