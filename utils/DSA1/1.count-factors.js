const testCases = [
    {
        name: "Input 1: Small non-prime",
        input: { A: 6 },
        expected: 4,
        description: "Factors of 6 are 1, 2, 3, 6"
    },
    {
        name: "Input 2: Simple prime",
        input: { A: 5 },
        expected: 2,
        description: "Factors of 5 are 1, 5"
    },
    {
        name: "Input 3: Small even number",
        input: { A: 10 },
        expected: 4,
        description: "Factors of 10 are 1, 2, 5, 10"
    },
    {
        name: "Edge Case: Number 1",
        input: { A: 1 },
        expected: 1,
        description: "Factors of 1 is only 1"
    },
    {
        name: "Perfect Square",
        input: { A: 25 },
        expected: 3,
        description: "Factors of 25 are 1, 5, 25"
    },
    {
        name: "Perfect Square (Even)",
        input: { A: 16 },
        expected: 5,
        description: "Factors of 16 are 1, 2, 4, 8, 16"
    },
    {
        name: "Large Prime",
        input: { A: 999999937 },
        expected: 2,
        description: "Check performance and prime handling"
    },
    {
        name: "Large Number (Max Constraint)",
        input: { A: 1000000000 },
        expected: 100,
        description: "Factors of 10^9 is 100 (2^9 * 5^9 -> 10*10)"
    }
];

function validator(result, expected, input) {
    if (typeof result !== 'number') return false;
    return result === expected;
}

module.exports = { testCases, validator };
