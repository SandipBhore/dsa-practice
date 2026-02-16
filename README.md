# 🚀 DSA Practice Repository

A production-ready repository for practicing Data Structures and Algorithms with comprehensive test cases, multiple solution approaches, and professional documentation.

## 📚 Repository Structure

```
dsa-practice/
├── problems/              # All DSA problems
│   └── DSA1/             # Flattened problem set (no subfolders)
├── templates/            # Template files for new problems
├── utils/                # Helper utilities
│   ├── DSA1/             # Flattened test cases
│   └── test-runner.js    # Core test runner
├── docs/                 # Additional documentation
└── README.md            # This file
```

## 🎯 Purpose

This repository serves as:
- ✅ **Practice Platform**: Structured environment for solving DSA problems
- ✅ **Learning Resource**: Comprehensive comments explaining every concept
- ✅ **Interview Prep**: Industry-standard problems with multiple solutions
- ✅ **Portfolio Project**: Demonstrates professional coding practices
- ✅ **Standardized**: [Formal Coding Standards](docs/CODING_STANDARDS.md) for all solutions

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher) - for running test cases
- Git - for version control

### Setup
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/dsa-practice.git

# Navigate to the directory
cd dsa-practice

# (Optional) Install dependencies if you add any
npm install
```

## 💡 How to Use

### 1. Choose a Problem
Browse the `problems/` directory and pick a category:
```bash
cd problems/arrays
```

### 2. Open a Problem File
Each problem file contains:
- Problem statement
- Input/output examples
- Constraints
- Template code
- Test cases

### 3. Write Your Solution
Replace the `TODO` section with your implementation:
```javascript
function solveProblem(input) {
  // TODO: Write your solution here
  
  return result;
}
```

### 4. Run Tests
```bash
# Test a specific problem
node problems/DSA1/two-sum.js

# Note: Test cases are now located in utils/DSA1/
```

### 5. Commit Your Work
```bash
git add problems/arrays/two-sum.js
git commit -m "feat(arrays): solve two-sum with hash map approach"
git push origin main
```

## 📝 Problem File Structure

Each problem follows this format:

```javascript
/**
 * Problem: [Problem Name]
 * Difficulty: Easy/Medium/Hard
 * Category: Arrays/Strings/etc.
 * 
 * Description:
 * [Clear problem statement]
 * 
 * Constraints:
 * - [Constraint 1]
 * - [Constraint 2]
 * 
 * Examples:
 * Input: [example input]
 * Output: [example output]
 */

// SOLUTION 1: [Approach Name] - O(time) time, O(space) space
function solution1(input) {
  // Implementation with detailed comments
}

// SOLUTION 2: [Alternative Approach]
function solution2(input) {
  // Alternative implementation
}

// TEST CASES
const testCases = [
  // Basic, edge, and stress test cases
];
```

## 🧪 Testing Framework

The repository includes an automated test runner that:
- ✅ Validates solutions against multiple test cases
- ✅ Checks constraint compliance
- ✅ Measures execution time and memory usage
- ✅ Provides detailed error messages

## 📊 Progress Tracking

### Arrays (0/15)
- [ ] Two Sum
- [ ] Best Time to Buy and Sell Stock
- [ ] Contains Duplicate
- [ ] Product of Array Except Self
- [ ] Maximum Subarray

### Strings (0/12)
- [ ] Valid Anagram
- [ ] Valid Parentheses
- [ ] Longest Substring Without Repeating Characters
- [ ] Longest Palindromic Substring

### Linked Lists (0/10)
- [ ] Reverse Linked List
- [ ] Merge Two Sorted Lists
- [ ] Linked List Cycle
- [ ] Remove Nth Node From End

### Trees (0/12)
- [ ] Maximum Depth of Binary Tree
- [ ] Invert Binary Tree
- [ ] Binary Tree Level Order Traversal
- [ ] Validate Binary Search Tree

### Graphs (0/10)
- [ ] Number of Islands
- [ ] Clone Graph
- [ ] Course Schedule
- [ ] Pacific Atlantic Water Flow

### Dynamic Programming (0/15)
- [ ] Climbing Stairs
- [ ] House Robber
- [ ] Longest Increasing Subsequence
- [ ] Coin Change

### Sorting (0/8)
- [ ] Sort an Array
- [ ] Merge Intervals
- [ ] Kth Largest Element
- [ ] Sort Colors

### Searching (0/8)
- [ ] Binary Search
- [ ] Search in Rotated Sorted Array
- [ ] Find Minimum in Rotated Sorted Array
- [ ] Search a 2D Matrix

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Adding new problems
- Adding new problems
- [Code style standards](docs/CODING_STANDARDS.md) (Compulsory)
- Commit message conventions
- Pull request process

## 📖 Additional Resources

- [Setup Guide](docs/setup.md) - Development environment setup
- [Problem Solving Guide](docs/problem-solving-guide.md) - Strategies and tips
- [Templates](templates/) - Reusable problem templates

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎓 Learning Goals

- ✅ Master fundamental data structures
- ✅ Understand algorithm complexity analysis
- ✅ Practice multiple solution approaches
- ✅ Develop problem-solving patterns
- ✅ Prepare for technical interviews

## 🔗 Useful Links

- [LeetCode](https://leetcode.com/) - Problem source
- [NeetCode](https://neetcode.io/) - Curated problem lists
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/) - Complexity reference

---

**Happy Coding! 🚀**

*Remember: Understanding > Speed. Focus on learning, not just solving.*
