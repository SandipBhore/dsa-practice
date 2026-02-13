/**
 * TEST RUNNER UTILITY
 * 
 * This file provides automated testing for DSA problems.
 * It validates solutions against test cases, checks constraints,
 * and measures performance.
 * 
 * Why this exists:
 * - Automates repetitive testing
 * - Provides consistent feedback format
 * - Catches bugs early in development
 * - Measures performance metrics
 */

// ============================================
// ANSI COLOR CODES
// ============================================
// These codes add color to terminal output
// Making it easier to spot passes/fails quickly
const colors = {
    reset: '\x1b[0m',      // Reset to default color
    green: '\x1b[32m',     // Success messages
    darkGreen: '\x1b[38;5;28m', // Dark green for complexity
    customHighlight: '\x1b[38;2;224;175;160m', // Hex #e0afa0 for problem name
    red: '\x1b[31m',       // Error messages
    yellow: '\x1b[33m',    // Warnings
    blue: '\x1b[34m',      // Info messages
    cyan: '\x1b[36m',      // Highlights
    gray: '\x1b[90m',      // Dimmed text
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Deep equality check for comparing expected vs actual results
 * 
 * Why we need this:
 * - JavaScript's === doesn't work for objects/arrays
 * - Need to compare nested structures
 * 
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {boolean} - True if deeply equal
 */
function deepEqual(a, b) {
    // Handle null/undefined cases
    if (a === b) return true;
    if (a == null || b == null) return false;

    // Handle arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        return a.every((val, idx) => deepEqual(val, b[idx]));
    }

    // Handle objects
    if (typeof a === 'object' && typeof b === 'object') {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;
        return keysA.every(key => deepEqual(a[key], b[key]));
    }

    return false;
}

/**
 * Format time in human-readable format
 * 
 * @param {number} ms - Time in milliseconds
 * @returns {string} - Formatted time string
 */
function formatTime(ms) {
    if (ms < 1) return `${(ms * 1000).toFixed(2)}μs`;
    if (ms < 1000) return `${ms.toFixed(3)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
}

/**
 * Format memory in human-readable format
 * 
 * @param {number} bytes - Memory in bytes
 * @returns {string} - Formatted memory string
 */
function formatMemory(bytes) {
    if (bytes < 1024) return `${bytes}B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)}KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)}MB`;
}

// ============================================
// MAIN TEST RUNNER
// ============================================

/**
 * Run all test cases for a problem
 * 
 * @param {Object} config - Test configuration
 * @param {string} config.problemName - Name of the problem
 * @param {Function} config.solution - Solution function to test
 * @param {Array} config.testCases - Array of test case objects
 * @param {Function} config.validator - Optional custom validator
 * @param {number} config.timeLimit - Global time limit in ms (optional)
 * @param {number} config.memoryLimit - Global memory limit in bytes (optional)
 * @param {Object} config.currentComplexity - Known complexity of this solution {time, space}
 * @param {Object} config.optimalComplexity - Best known complexity for this problem {time, space}
 */
function runTests({
    problemName,
    solution,
    testCases,
    validator,
    timeLimit,
    memoryLimit,
    currentComplexity,
    optimalComplexity
}) {
    console.log(`\n${colors.customHighlight}Running tests for: ${problemName}${colors.reset}`);
    console.log('━'.repeat(60));

    let passed = 0;
    let failed = 0;
    const results = [];

    // Run each test case
    testCases.forEach((testCase, index) => {
        const {
            name,
            input,
            expected,
            description,
            timeLimit: tcTimeLimit,
            memoryLimit: tcMemoryLimit
        } = testCase;

        // Use test-specific limit or global limit
        const effectiveTimeLimit = tcTimeLimit || timeLimit;
        const effectiveMemoryLimit = tcMemoryLimit || memoryLimit;

        try {
            // Measure execution time
            const startTime = performance.now();
            const startMemory = process.memoryUsage().heapUsed;

            // Run the solution
            // Convert input object to array of arguments
            const inputArgs = Object.values(input);
            const result = solution(...inputArgs);

            const endTime = performance.now();
            const endMemory = process.memoryUsage().heapUsed;

            const executionTime = endTime - startTime;
            const memoryUsed = Math.max(0, endMemory - startMemory);

            // Validate result
            const isCorrect = validator
                ? validator(result, expected, input)
                : deepEqual(result, expected);

            if (isCorrect) {
                passed++;
                console.log(`${colors.green}✓${colors.reset} ${name}`);

                // Construct metrics line
                let metrics = `  ${colors.gray}Time: ${formatTime(executionTime)} | Memory: ${formatMemory(memoryUsed)}`;

                // Add warnings if complexity limits are reached
                if (effectiveTimeLimit && executionTime > effectiveTimeLimit) {
                    metrics += ` ${colors.yellow}[WARNING: Time limit exceeded (${formatTime(effectiveTimeLimit)})]${colors.reset}`;
                }
                if (effectiveMemoryLimit && memoryUsed > effectiveMemoryLimit) {
                    metrics += ` ${colors.yellow}[WARNING: Memory limit exceeded (${formatMemory(effectiveMemoryLimit)})]${colors.reset}`;
                }

                console.log(metrics + colors.reset);
            } else {
                failed++;
                console.log(`${colors.red}✗${colors.reset} ${name}`);
                console.log(`  ${colors.red}Expected: ${JSON.stringify(expected)}${colors.reset}`);
                console.log(`  ${colors.red}Got: ${JSON.stringify(result)}${colors.reset}`);
            }

            if (description) {
                console.log(`  ${colors.gray}${description}${colors.reset}`);
            }

            results.push({
                name,
                passed: isCorrect,
                time: executionTime,
                memory: memoryUsed
            });

        } catch (error) {
            failed++;
            console.log(`${colors.red}✗${colors.reset} ${name}`);
            console.log(`  ${colors.red}Error: ${error.message}${colors.reset}`);
            console.log(`  ${colors.gray}${error.stack}${colors.reset}`);
        }

        console.log(''); // Empty line between tests
    });

    // Print summary
    console.log('━'.repeat(60));
    if (failed === 0) {
        console.log(`${colors.green}✓ All ${passed} tests passed!${colors.reset}\n`);

        // Print complexity information if available
        if (currentComplexity || optimalComplexity) {
            console.log(`${colors.blue}Complexity Analysis:${colors.reset}`);

            const timeInfo = `${colors.darkGreen}Time Complexity:  Current ${currentComplexity?.time || 'N/A'} | Optimal ${optimalComplexity?.time || 'N/A'}${colors.reset}`;
            const spaceInfo = `${colors.darkGreen}Space Complexity: Current ${currentComplexity?.space || 'N/A'} | Optimal ${optimalComplexity?.space || 'N/A'}${colors.reset}`;

            console.log(timeInfo);
            console.log(spaceInfo);

            // Print warning if not optimal
            if (currentComplexity && optimalComplexity) {
                if (currentComplexity.time !== optimalComplexity.time || currentComplexity.space !== optimalComplexity.space) {
                    console.log(`\n${colors.yellow}[TIP] Your solution could be further optimized to match the optimal complexity.${colors.reset}`);
                }
            }
            console.log('');
        }
    } else {
        console.log(`${colors.red}✗ ${failed} test(s) failed${colors.reset}`);
        console.log(`${colors.green}✓ ${passed} test(s) passed${colors.reset}\n`);
    }

    // Print performance summary
    const avgTime = results.reduce((sum, r) => sum + r.time, 0) / results.length;
    console.log(`${colors.gray}Average time per test: ${formatTime(avgTime)}${colors.reset}`);
    console.log('');

    return { passed, failed, results };
}

// ============================================
// EXPORTS
// ============================================
// Export for use in problem files
// In Node.js, module.exports makes functions available to other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        runTests,
        deepEqual,
        formatTime,
        formatMemory,
        colors
    };
}
