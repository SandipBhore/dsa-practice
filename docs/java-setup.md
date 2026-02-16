# Java Setup & Usage Guide

This guide explains how to set up Java and run the Java solutions in this repository.

## 1. Install Java (JDK)

To run Java code, you need the **Java Development Kit (JDK)** installed.

### Windows
1.  **Download**: Go to [Oracle JDK](https://www.oracle.com/java/technologies/downloads/) or [Adoptium (Open Source)](https://adoptium.net/).
    -   Recommend: **JDK 17** or **JDK 21** (LTS versions).
2.  **Install**: Run the installer (`.exe` or `.msi`).
    -   **Important**: specificy "Add to PATH" if asked during installation.
3.  **Verify**: Open a new terminal and run:
    ```powershell
    java -version
    javac -version
    ```
    You should see version output (e.g., `java version "17.0..."`).

## 2. Directory Structure

The Java files follow the same structure as the JavaScript files:

-   **Code**: `problems/DSA1/[category]/[ProblemName].java`
-   **Tests**: `utils/DSA1/[category]/[ProblemName]Test.java`

## 3. How to Run Code

Always run commands from the **root** of the repository (`dsa-practice/`).

### Step 1: Compile
You need to compile both the solution and the test file.

```powershell
# Syntax
javac problems/DSA1/[category]/[Problem].java utils/DSA1/[category]/[Test].java

# Example for "Cost to Remove Elements"
javac problems/DSA1/sorting/CostToRemoveElements.java utils/DSA1/sorting/CostToRemoveElementsTest.java
```

### Step 2: Run
Run the test class using its full package name.

```powershell
# Syntax
java utils.DSA1.[category].[TestClassName]

# Example for "Cost to Remove Elements"
java utils.DSA1.sorting.CostToRemoveElementsTest
```

## 4. Troubleshooting
-   **"javac is not recognized"**: You need to add Java to your System PATH.
    -   Run this command in PowerShell to add it for the **current session**:
        ```powershell
        $env:Path = ";C:\Program Files\Java\jdk-25.0.2\bin;" + $env:Path
        ```
    -   To add it **permanently**, search for "Edit the system environment variables" in Windows, find `Path`, and add `C:\Program Files\Java\jdk-25.0.2\bin`.
-   **"Could not find or load main class"**: Ensure you are running the `java` command from the root folder and using the full package name (e.g., `utils.DSA1...`).
