# Contributing to DSA Practice Repository

Thank you for your interest in contributing! This document provides guidelines for adding new problems and maintaining code quality.

## 📋 Table of Contents
- [Adding New Problems](#adding-new-problems)
- [Code Style](#code-style)
- [Commit Messages](#commit-messages)
- [Testing](#testing)

## 🆕 Adding New Problems

### Step 1: Add to DSA Folder
Place your problem directly in the `problems/DSA[X]/` folder.
- `problems/DSA1/` - Current problem set

### Step 2: Use the Template
```bash
# Copy the template
cp templates/problem-template.js problems/DSA1/[problem-name].js
```

### Step 3: Fill in the Problem Details
```javascript
/**
 * Problem: [Clear, concise problem name]
 * Difficulty: Easy | Medium | Hard
 * Category: [Category name]
 * Source: LeetCode #123 | HackerRank | Custom
 * 
 * Description:
 * [Write a clear problem statement]
 * 
 * Constraints:
 * - [List all constraints from the problem]
 * - [Be specific with ranges: 1 <= n <= 10^5]
 * 
 * Examples:
 * Input: [example]
 * Output: [example]
 * Explanation: [why this is the answer]
 */
```

### Step 4: Implement Solutions
- **Start with brute force** - Even if inefficient, it helps understand the problem
- **Add optimal solution** - The best time/space complexity approach
- **Include alternatives** - Different approaches for learning

### Step 5: Add Test Cases
Include test cases in a separate file under `utils/DSA1/[problem-name].js`:

```javascript
const testCases = [
  // 1. Basic cases from examples
  {
    name: "Example 1",
    input: {...},
    expected: ...,
    description: "Basic case from problem statement"
  },
  // ...
];

function validator(result, expected, input) {
    // Custom validation logic
    return JSON.stringify(result) === JSON.stringify(expected);
}

module.exports = { testCases, validator };
```

## 💅 Code Style

### Naming Conventions
```javascript
// ✅ Good: Descriptive function names
function findTwoSum(nums, target) { }
function mergeSortedLists(list1, list2) { }

// ❌ Bad: Vague names
function solve(a, b) { }
function func1(x) { }
```

### Comments
```javascript
// ✅ Good: Explain WHY, not WHAT
// Use hash map to achieve O(1) lookup time
const seen = new Map();

// ❌ Bad: Stating the obvious
// Create a new map
const seen = new Map();
```

### Complexity Analysis
Always include time and space complexity:
```javascript
/**
 * Time Complexity: O(n log n)
 * - Sorting takes O(n log n)
 * - Single pass through array: O(n)
 * - Overall: O(n log n)
 * 
 * Space Complexity: O(1)
 * - Only using constant extra space
 * - Sorting is done in-place
 */
```

## 📝 Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New problem solution
- `fix`: Bug fix in existing solution
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `refactor`: Code refactoring
- `perf`: Performance improvements

### Examples
```bash
# Adding a new problem
git commit -m "feat(arrays): solve two-sum with hash map approach

- Implemented O(n) solution using hash map
- Added brute force O(n²) solution for comparison
- All test cases passing"

# Fixing a bug
git commit -m "fix(trees): correct edge case in binary tree traversal

Fixed null pointer exception when tree is empty"

# Updating documentation
git commit -m "docs(readme): add progress tracking section"
```

### Scope Guidelines
Use the category name as scope:
- `arrays`
- `strings`
- `linked-lists`
- `trees`
- `graphs`
- `dynamic-programming`
- `sorting`
- `searching`

## 🧪 Testing

### Before Committing
```bash
# Run tests for your problem
node utils/test-runner.js problems/[category]/[your-problem].js

# Ensure all tests pass
# Check for performance issues
```

### Test Coverage
Ensure you have:
- ✅ At least 3 basic test cases
- ✅ At least 2 edge cases
- ✅ At least 1 stress test
- ✅ Constraint validation

## ✅ Checklist Before Submitting

- [ ] Problem file follows template structure
- [ ] All sections are filled (description, constraints, examples)
- [ ] At least 2 solution approaches implemented
- [ ] Comprehensive comments explaining logic
- [ ] Time and space complexity documented
- [ ] Test cases cover basic, edge, and stress scenarios
- [ ] All tests passing
- [ ] Commit message follows convention
- [ ] README progress tracker updated

## 🎯 Quality Standards

### Code Quality
- **Readability**: Code should be self-documenting
- **Efficiency**: Optimal time/space complexity when possible
- **Correctness**: All test cases must pass
- **Comments**: Explain complex logic and trade-offs

### Documentation Quality
- **Clarity**: Problem statement should be unambiguous
- **Completeness**: All constraints and examples included
- **Accuracy**: Complexity analysis must be correct

## 🚫 Common Mistakes to Avoid

❌ **Don't:**
- Copy-paste solutions without understanding
- Skip test cases
- Use vague variable names (`a`, `b`, `temp`)
- Forget to update README progress
- Commit without testing

✅ **Do:**
- Understand the problem before coding
- Write tests first (TDD approach)
- Use descriptive names
- Update documentation
- Test thoroughly

## 📚 Resources

- [JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Thank you for contributing! 🎉**

Questions? Open an issue or reach out to the maintainers.
