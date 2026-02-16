/**
 * Run:
 * & "C:\Program Files\Java\jdk-25.0.2\bin\javac.exe" problems/DSA1/TwoSum.java
 * & "C:\Program Files\Java\jdk-25.0.2\bin\java.exe" problems.DSA1.TwoSum
 * 
 * NOTE: Java is a compiled language. 
 * - When you modify this .java file, you MUST re-run 'javac' to update the .class file (bytecode).
 * - Running the code executes the .class file, not the .java file directly.
 */
package problems.DSA1;

import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;

/**
 * Problem: Two Sum
 * Difficulty: Easy
 * Category: Arrays
 * Description: Find two numbers in array that add up to target.
 */
public class TwoSum {

    /**
     * Solves Two Sum using a Hash Map.
     * 
     * Time Complexity: O(N)
     * Space Complexity: O(N)
     */
    public static int[] solve(int[] nums, int target) {
        // Map to store number -> index
        Map<Integer, Integer> map = new HashMap<>();

        // One-pass Hash Map approach
        // Time: O(N) | Space: O(N)
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            // Check if complement exists
            // Time: O(1) average
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }

        return new int[]{};
    }

    public static void main(String[] args) {
        // Dummy Data & Verification
        int[] input1 = {2, 7, 11, 15};
        int target1 = 9;
        int[] expected1 = {0, 1}; // One possible order
        int[] result1 = solve(input1, target1);
        Arrays.sort(result1); // Sort for comparison
        System.out.println("Test 1 (Basic): " + (Arrays.equals(result1, expected1) ? "PASS" : "FAIL") + " | Expected: " + Arrays.toString(expected1) + ", Got: " + Arrays.toString(result1));

        int[] input2 = {3, 2, 4};
        int target2 = 6;
        int[] expected2 = {1, 2};
        int[] result2 = solve(input2, target2);
        Arrays.sort(result2);
        System.out.println("Test 2 (Unsorted): " + (Arrays.equals(result2, expected2) ? "PASS" : "FAIL") + " | Expected: " + Arrays.toString(expected2) + ", Got: " + Arrays.toString(result2));
    }
}

/*
 * Educational Summary:
 * - HashMap: Key data structure for O(1) lookups. Allows us to check for the "complement" (target - current) instantly.
 * - Time-Space Tradeoff: We use O(N) extra space to store the map, which reduces the time complexity from O(N^2) (Brute Force) to O(N).
 */
