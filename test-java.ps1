<#
.SYNOPSIS
    Compiles and runs a Java DSA problem and its corresponding test.
.DESCRIPTION
    This script automates the process of finding the test file, setting up the classpath,
    compiling both the solution and the test, and running the test class.
    It handles the Java PATH configuration automatically.
.PARAMETER ProblemFile
    The path to the Java solution file (e.g., problems/DSA1/CountFactors.java)
.EXAMPLE
    .\test-java.ps1 problems\DSA1\CountFactors.java
#>

param (
    [Parameter(Mandatory=$true)]
    [string]$ProblemFile
)

# 1. Setup Java Path (Temporary for this process)
# We use the path we discovered: C:\Program Files\Java\jdk-25.0.2\bin
$JavaBin = "C:\Program Files\Java\jdk-25.0.2\bin"
if (Test-Path $JavaBin) {
    echo "Found Java at: $JavaBin"
    $env:Path = ";$JavaBin;" + $env:Path
} else {
    echo "Warning: Specific Java path not found. Relying on system PATH."
}

# 2. Derive paths and class name
# Input: problems\DSA1\CountFactors.java

$ProblemFile = $ProblemFile -replace '\\', '/'

if (-not (Test-Path $ProblemFile)) {
    Write-Error "File not found: $ProblemFile"
    exit 1
}

# Extract package and class name from file content
$Content = Get-Content $ProblemFile -Raw
if ($Content -match 'package\s+([\w\.]+);') {
    $Package = $matches[1]
} else {
    $Package = ""
}

if ($Content -match 'class\s+([\w]+)') {
    $ClassName = $matches[1]
} else {
    Write-Error "Could not determine class name from file."
    exit 1
}

$FullClassName = if ($Package) { "$Package.$ClassName" } else { $ClassName }

echo "=========================================="
echo "File:     $ProblemFile"
echo "Class:    $FullClassName"
echo "=========================================="

# 3. Compile
echo "Compiling..."
javac $ProblemFile

if ($LASTEXITCODE -eq 0) {
    echo "Compilation Successful."
    echo "Running..."
    echo "------------------------------------------"
    java $FullClassName
} else {
    Write-Error "Compilation Failed."
    exit 1
}
