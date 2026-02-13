# Complete Developer Guide: DSA Repository Setup

> **Purpose:** Step-by-step instructions to create a production-ready DSA practice repository from scratch. Follow this guide to build your own repo with automated testing, proper documentation, and Git workflow.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Quick Setup](#quick-setup)
- [Detailed Step-by-Step](#detailed-step-by-step)
- [File Contents](#file-contents)
- [Common Commands](#common-commands)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

**Required:**
- Node.js (v14+) - [Download](https://nodejs.org/)
- Git - [Download](https://git-scm.com/)
- GitHub account - [Sign up](https://github.com/)

**Verify:**
```bash
node --version
git --version
```

---

## Quick Setup

For experienced developers, here's the condensed version:

```bash
# 1. Create structure
mkdir dsa-practice && cd dsa-practice
mkdir -p problems/{arrays,strings,linked-lists,trees,graphs,dynamic-programming,sorting,searching} utils templates docs

# 2. Create files (see File Contents section for content)
touch .gitignore README.md CONTRIBUTING.md
touch utils/test-runner.js templates/problem-template.js

# 3. Initialize Git
git init
git config user.email "your@email.com"
git config user.name "Your Name"
git add .
git commit -m "feat: initial repository setup"

# 4. Push to GitHub
git branch -M main
git remote add origin https://github.com/USERNAME/dsa-practice.git
git push -u origin main
```

---

## Detailed Step-by-Step

### Phase 1: Local Setup

#### 1. Create Directory
```bash
mkdir dsa-practice
cd dsa-practice
```

#### 2. Create Folder Structure
```bash
# Unix/Mac/Linux
mkdir -p problems/{arrays,strings,linked-lists,trees,graphs,dynamic-programming,sorting,searching} utils templates docs

# Windows PowerShell
New-Item -ItemType Directory -Force -Path "problems/arrays","problems/strings","problems/linked-lists","problems/trees","problems/graphs","problems/dynamic-programming","problems/sorting","problems/searching","utils","templates","docs"
```

**Folder purposes:**
- `problems/` - All DSA problems by category
- `utils/` - Test runner and utilities
- `templates/` - Problem templates
- `docs/` - Additional documentation

---

### Phase 2: Configuration Files

See [File Contents](#file-contents) section below for complete file contents.

#### 1. Create .gitignore
```bash
touch .gitignore  # Unix/Mac
New-Item .gitignore  # Windows
```

#### 2. Create README.md
```bash
touch README.md
```

#### 3. Create CONTRIBUTING.md
```bash
touch CONTRIBUTING.md
```

---

### Phase 3: Utility Files

#### 1. Create Test Runner
```bash
touch utils/test-runner.js
```

#### 2. Create Problem Template
```bash
touch templates/problem-template.js
```

---

### Phase 4: Git Setup

#### 1. Initialize Git
```bash
git init
```

#### 2. Configure Identity
```bash
git config user.email "your.email@example.com"
git config user.name "Your Name"
```

#### 3. Stage and Commit
```bash
git add .
git commit -m "feat: initial repository setup

- Added folder structure
- Created configuration files
- Implemented test runner
- Added problem template"
```

---

### Phase 5: GitHub

#### 1. Create GitHub Repository
- Go to https://github.com/new
- Name: `dsa-practice`
- **Don't** initialize with README
- Click "Create repository"

#### 2. Connect and Push
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dsa-practice.git
git push -u origin main
```

**Explanation of `git branch -M main`:**
- Renames current branch to `main`
- `-M` = force rename (--move --force)
- Matches GitHub's default branch name

---

## File Contents

### .gitignore
```gitignore
# Node.js
node_modules/
package-lock.json

# Environment
.env
.env.local

# IDE
.vscode/
.idea/
*.iml

# OS
.DS_Store
Thumbs.db

# Build
dist/
build/
coverage/

# Logs
*.log
```

### README.md
```markdown
# DSA Practice Repository

Production-ready repository for practicing Data Structures and Algorithms.

## Structure
```
dsa-practice/
├── problems/    # DSA problems by category
│   └── DSA1/   # Main problem set
├── utils/       # Test runner
│   └── DSA1/   # Externalized test cases
└── templates/   # Problem templates
```

## Usage
```bash
# Run tests
node problems/DSA1/arrays/two-sum.js
```

## Adding Problems
```bash
cp templates/problem-template.js problems/DSA1/category/problem.js
# Edit file, then run:
node problems/DSA1/category/problem.js
```
```

### utils/test-runner.js
```javascript
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
};

function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((val, idx) => deepEqual(val, b[idx]));
  }
  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every(key => deepEqual(a[key], b[key]));
  }
  return false;
}

function formatTime(ms) {
  if (ms < 1) return `${(ms * 1000).toFixed(2)}μs`;
  if (ms < 1000) return `${ms.toFixed(3)}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
}

function formatMemory(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)}MB`;
}

function runTests({ problemName, solution, testCases, validator }) {
  console.log(`\n${colors.cyan}Running tests for: ${problemName}${colors.reset}`);
  console.log('━'.repeat(60));
  
  let passed = 0, failed = 0;
  const results = [];
  
  testCases.forEach(({ name, input, expected, description }) => {
    try {
      const startTime = performance.now();
      const startMemory = process.memoryUsage().heapUsed;
      
      const inputArgs = Object.values(input);
      const result = solution(...inputArgs);
      
      const endTime = performance.now();
      const endMemory = process.memoryUsage().heapUsed;
      
      const executionTime = endTime - startTime;
      const memoryUsed = Math.max(0, endMemory - startMemory);
      
      const isCorrect = validator 
        ? validator(result, expected, input)
        : deepEqual(result, expected);
      
      if (isCorrect) {
        passed++;
        console.log(`${colors.green}✓${colors.reset} ${name}`);
        console.log(`  ${colors.gray}Time: ${formatTime(executionTime)} | Memory: ${formatMemory(memoryUsed)}${colors.reset}`);
      } else {
        failed++;
        console.log(`${colors.red}✗${colors.reset} ${name}`);
        console.log(`  ${colors.red}Expected: ${JSON.stringify(expected)}${colors.reset}`);
        console.log(`  ${colors.red}Got: ${JSON.stringify(result)}${colors.reset}`);
      }
      
      if (description) {
        console.log(`  ${colors.gray}${description}${colors.reset}`);
      }
      
      results.push({ name, passed: isCorrect, time: executionTime, memory: memoryUsed });
    } catch (error) {
      failed++;
      console.log(`${colors.red}✗${colors.reset} ${name}`);
      console.log(`  ${colors.red}Error: ${error.message}${colors.reset}`);
    }
    console.log('');
  });
  
  console.log('━'.repeat(60));
  if (failed === 0) {
    console.log(`${colors.green}✓ All ${passed} tests passed!${colors.reset}`);
  } else {
    console.log(`${colors.red}✗ ${failed} test(s) failed${colors.reset}`);
    console.log(`${colors.green}✓ ${passed} test(s) passed${colors.reset}`);
  }
  
  const avgTime = results.reduce((sum, r) => sum + r.time, 0) / results.length;
  console.log(`${colors.gray}Average time: ${formatTime(avgTime)}${colors.reset}\n`);
  
  return { passed, failed, results };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runTests, deepEqual, formatTime, formatMemory, colors };
}
```

### templates/problem-template.js
```javascript
/**
 * Problem: [TODO: Name]
 */

function solution1(input) {
  // TODO: Implement solution
  return result;
}

// Test cases are externalized to utils/DSA1/
const { runTests } = require('../../../utils/test-runner');
const { testCases, validator } = require('../../../utils/DSA1/[CATEGORY]/[NAME]');

runTests({
  problemName: "[TODO: Name]",
  solution: solution1,
  testCases: testCases,
  validator: validator
});
```

---

## Common Commands

### Daily Workflow
```bash
# Create new problem
cp templates/problem-template.js problems/arrays/new-problem.js

# Edit file (use your editor)
code problems/arrays/new-problem.js

# Run tests
node problems/arrays/new-problem.js

# Commit
git add problems/arrays/new-problem.js
git commit -m "feat(arrays): solve new-problem"
git push
```

### Git Commands
```bash
# Check status
git status

# View history
git log --oneline

# View changes
git diff

# Pull updates
git pull

# Undo changes (before commit)
git checkout -- filename
```

---

## Troubleshooting

### `git: command not found`
Install Git: https://git-scm.com/

### `node: command not found`
Install Node.js: https://nodejs.org/

### Tests not running
Check file path in `require()`:
```javascript
// Should be:
require('../../utils/test-runner')
```

### Git push fails
Use Personal Access Token or SSH keys:
https://docs.github.com/en/authentication

---

## Setup Checklist

- [ ] Folders created
- [ ] `.gitignore` created
- [ ] `README.md` created
- [ ] `utils/test-runner.js` created
- [ ] `templates/problem-template.js` created
- [ ] Git initialized
- [ ] Git identity configured
- [ ] Initial commit created
- [ ] GitHub repository created
- [ ] Code pushed to GitHub

---

## Example: Adding Two Sum

```bash
# 1. Copy template
cp templates/problem-template.js problems/arrays/two-sum.js

# 2. Edit file with problem details and solution

# 3. Run tests
node problems/arrays/two-sum.js

# 4. Commit
git add problems/arrays/two-sum.js
git commit -m "feat(arrays): solve two-sum with hash map"
git push
```

---

**🎉 Setup Complete!**

You now have a production-ready DSA practice repository. Start adding problems and building your skills!

**Resources:**
- [LeetCode](https://leetcode.com/)
- [NeetCode](https://neetcode.io/)
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
