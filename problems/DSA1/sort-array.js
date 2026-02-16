/**
 * Run this problem:
 * node problems/DSA1/sort-array.js
 */

/**
 * Problem: Sort an Array
 * Difficulty: Medium
 * Category: Sorting
 * Source: LeetCode #912
 * 
 * Description:
 * Given an array of integers nums, sort the array in ascending order and return it.
 * 
 * You must solve the problem without using any built-in functions in O(n log n)
 * time complexity and with the smallest space complexity possible.
 * 
 * Constraints:
 * - 1 <= nums.length <= 5 * 10^4
 * - -5 * 10^4 <= nums[i] <= 5 * 10^4
 * 
 * Examples:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Explanation: After sorting the array, the positions of some numbers are not changed
 * (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
 * 
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 * Explanation: Note that the values of nums are not necessarily unique.
 */

// ============================================
// SOLUTION 1: Built-in Sort (Baseline)
// ============================================
/**
 * Approach: Use JavaScript's built-in sort method
 * 
 * Note: This doesn't meet the problem requirements (no built-in functions)
 * but it's good to start here to understand the problem.
 * 
 * Algorithm:
 * 1. Create a copy of the array to avoid mutating original
 * 2. Use Array.sort() with custom comparator
 * 
 * Time Complexity: O(n log n)
 * - JavaScript's sort typically uses TimSort (hybrid of merge + insertion sort)
 * 
 * Space Complexity: O(n)
 * - Creating a copy of the array
 */
function sortArrayBuiltIn(nums) {
    // Create a copy to avoid mutating the original array
    // Using spread operator [...nums] creates a shallow copy
    const result = [...nums];

    // Sort with comparator function
    // (a, b) => a - b ensures ascending order
    // - If a < b, returns negative (a comes first)
    // - If a > b, returns positive (b comes first)
    // - If a === b, returns 0 (order doesn't matter)
    return result.sort((a, b) => a - b);
}

// ============================================
// SOLUTION 2: Merge Sort (Optimal)
// ============================================
/**
 * Approach: Divide and conquer sorting algorithm
 * 
 * Algorithm:
 * 1. Divide array into two halves
 * 2. Recursively sort each half
 * 3. Merge the sorted halves
 * 
 * Why Merge Sort:
 * - Guaranteed O(n log n) time (even in worst case)
 * - Stable sort (maintains relative order of equal elements)
 * - Predictable performance
 * 
 * Time Complexity: O(n log n)
 * - Dividing: log n levels (halving each time)
 * - Merging: O(n) at each level
 * - Total: O(n) * log n = O(n log n)
 * 
 * Space Complexity: O(n)
 * - Temporary arrays for merging: O(n)
 * - Recursion stack: O(log n)
 * - Total: O(n)
 */
function sortArrayMergeSort(nums) {
    // Base case: array with 0 or 1 element is already sorted
    if (nums.length <= 1) {
        return nums;
    }

    // Divide: find middle point
    const mid = Math.floor(nums.length / 2);

    // Split array into left and right halves
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);

    // Conquer: recursively sort both halves
    const sortedLeft = sortArrayMergeSort(left);
    const sortedRight = sortArrayMergeSort(right);

    // Combine: merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

/**
 * Helper function to merge two sorted arrays
 * 
 * @param {number[]} left - First sorted array
 * @param {number[]} right - Second sorted array
 * @returns {number[]} - Merged sorted array
 */
function merge(left, right) {
    const result = [];
    let i = 0; // Pointer for left array
    let j = 0; // Pointer for right array

    // Compare elements from both arrays and add smaller one
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from left array (if any)
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Add remaining elements from right array (if any)
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// ============================================
// SOLUTION 3: Quick Sort (In-Place)
// ============================================
/**
 * Approach: Partition-based sorting
 * 
 * Algorithm:
 * 1. Choose a pivot element
 * 2. Partition array: elements < pivot on left, > pivot on right
 * 3. Recursively sort left and right partitions
 * 
 * Why Quick Sort:
 * - Average case O(n log n)
 * - In-place sorting (O(1) extra space)
 * - Fast in practice
 * 
 * Time Complexity:
 * - Average: O(n log n)
 * - Worst: O(n²) - when pivot is always smallest/largest
 * - We use random pivot to avoid worst case
 * 
 * Space Complexity: O(log n)
 * - Recursion stack depth
 * - In-place sorting (no extra arrays)
 */
function sortArrayQuickSort(nums) {
    // Create a copy to avoid mutating original
    const result = [...nums];
    quickSort(result, 0, result.length - 1);
    return result;
}

/**
 * Quick sort helper function
 * 
 * @param {number[]} arr - Array to sort
 * @param {number} low - Starting index
 * @param {number} high - Ending index
 */
function quickSort(arr, low, high) {
    if (low < high) {
        // Partition array and get pivot index
        const pivotIndex = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

/**
 * Partition function for quick sort
 * 
 * @param {number[]} arr - Array to partition
 * @param {number} low - Starting index
 * @param {number} high - Ending index
 * @returns {number} - Final pivot index
 */
function partition(arr, low, high) {
    // Choose last element as pivot
    const pivot = arr[high];

    // Index of smaller element
    let i = low - 1;

    // Move all elements smaller than pivot to left
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Place pivot in correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
}

// ============================================
// RUN TESTS
// ============================================
const { runTests } = require('../../utils/test-runner');
const { testCases, validator } = require('../../utils/DSA1/sort-array');

if (require.main === module) {
    // 1. Run Automated Test Runner
    runTests({
        problemName: "Sort an Array",
        solution: sortArrayMergeSort, // Using Merge Sort as default optimal solution
        testCases: testCases,
        validator: validator,
        currentComplexity: { time: 'O(n log n)', space: 'O(n)' },
        optimalComplexity: { time: 'O(n log n)', space: 'O(n)' }
    });

    // 2. Dummy Data Execution Block (Visual Check)
    console.log("\n--- Standalone Execution ---");
    const dummyInput = [5, 2, 3, 1];
    console.log("Input:", dummyInput);
    console.log("Output:", sortArrayMergeSort([...dummyInput])); // Pass copy to preserve input for logging if needed
}

module.exports = { sortArrayMergeSort };

/*
 * Educational Summary:
 * - Merge Sort: A classic O(N log N) recursive sorting algorithm. 
 *   It has O(N) space complexity due to creating new arrays during formatting/merging phases.
 * - Array.prototype.sort(): Built-in sort is highly optimized (TimSort) and generally preferred in production unless a specific stable/custom behavior is needed without overhead.
 */
