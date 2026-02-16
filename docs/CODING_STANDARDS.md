# Coding Standards & Guidelines

To ensure consistency, learning effectiveness, and ease of use, all solutions in this repository must adhere to the following compulsory rules when adding new problems.

## 1. Single-File Solutions (Java)
All Java solutions must be contained within a **single file**.
- **No external testing classes** or utilities should be required to run the code.
- This allows the solution to be copy-pasted directly into online editors or IDEs for immediate execution.

## 2. Multi-Language Support
Every problem must be implemented in both **Java** and **JavaScript**.

## 3. Dummy Data & Self-Execution
Each file must include a built-in verification block to demonstrate the code running:
- **Java**: Include a `public static void main(String[] args)` method with dummy input data.
- **JavaScript**: Include a guarded execution block `if (require.main === module) { ... }` with dummy input data.

## 4. Optimization
Solutions must be optimized for both **Time Complexity** and **Space Complexity**.
- Clearly state the algorithm or method used in the file header or method comments.
- Aim for the most efficient approach (e.g., using Sorting, Hashing, or Two Pointers as appropriate).

## 5. Complexity Comments
For any inbuilt methods (e.g., `Arrays.sort()`, `Array.prototype.map()`), add inline comments specifying their Time and Space complexity.
- *Example*: `Arrays.sort(A); // Time: O(N log N) | Space: O(log N)`

## 6. Educational Summary
Every file must conclude with an **Educational Summary** section.
- List the inbuilt methods used in the code.
- Provide a brief explanation of how each method works to facilitate learning.

---
*Note: Following these rules ensures that this repository remains a high-quality educational resource.*
