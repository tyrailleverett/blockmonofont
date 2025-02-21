export const DEFAULT_CODE = `function fibonacci(n: number): number {
  // Base cases
  if (n <= 1) return n;

  // Create an array to store Fibonacci numbers
  const fib = new Array(n + 1);
  fib[0] = 0;
  fib[1] = 1;

  // Calculate Fibonacci numbers
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
}

// Test the function
console.log(fibonacci(10)); // Output: 55`;

export const LANGUAGE_OPTIONS = {
  typescript: {
    label: "TypeScript",
    value: "typescript",
    defaultCode: DEFAULT_CODE
  },
  html: {
    label: "HTML",
    value: "html",
    defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Block Mono Demo</title>
</head>
<body>
    <header>
        <h1>Welcome to Block Mono</h1>
        <nav>
            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#download">Download</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="features">
            <h2>Features</h2>
            <ul>
                <li>Clear legibility</li>
                <li>Perfect alignment</li>
                <li>Programming ligatures</li>
            </ul>
        </section>
    </main>
</body>
</html>`
  },
  css: {
    label: "CSS",
    value: "css",
    defaultCode: `/* Modern CSS Reset */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Custom Properties */
:root {
    --primary-color: #2563eb;
    --text-color: #1f2937;
    --background: #ffffff;
}

/* Base Styles */
body {
    font-family: system-ui, sans-serif;
    color: var(--text-color);
    line-height: 1.5;
    background: var(--background);
}

/* Typography */
h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1rem;
}

/* Layout */
.container {
    width: min(90%, 70rem);
    margin-inline: auto;
    padding-block: 2rem;
}`
  },
  java: {
    label: "Java",
    value: "java",
    defaultCode: `public class Fibonacci {
    public static int fibonacci(int n) {
        // Base cases
        if (n <= 1) {
            return n;
        }

        // Create an array to store Fibonacci numbers
        int[] fib = new int[n + 1];
        fib[0] = 0;
        fib[1] = 1;

        // Calculate Fibonacci numbers
        for (int i = 2; i <= n; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }

        return fib[n];
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(10)); // Output: 55
    }
}`
  },
  ruby: {
    label: "Ruby",
    value: "ruby",
    defaultCode: `def fibonacci(n)
  # Base cases
  return n if n <= 1

  # Create an array to store Fibonacci numbers
  fib = Array.new(n + 1)
  fib[0] = 0
  fib[1] = 1

  # Calculate Fibonacci numbers
  (2..n).each do |i|
    fib[i] = fib[i-1] + fib[i-2]
  end

  fib[n]
end

# Test the function
puts fibonacci(10) # Output: 55`
  },
  php: {
    label: "PHP",
    value: "php",
    defaultCode: `<?php

function fibonacci(int $n): int {
    // Base cases
    if ($n <= 1) {
        return $n;
    }

    // Create an array to store Fibonacci numbers
    $fib = array_fill(0, $n + 1, 0);
    $fib[1] = 1;

    // Calculate Fibonacci numbers
    for ($i = 2; $i <= $n; $i++) {
        $fib[$i] = $fib[$i-1] + $fib[$i-2];
    }

    return $fib[$n];
}

// Test the function
echo fibonacci(10); // Output: 55`
  },
  csharp: {
    label: "C#",
    value: "csharp",
    defaultCode: `using System;

public class Program
{
    public static int Fibonacci(int n)
    {
        // Base cases
        if (n <= 1)
            return n;

        // Create an array to store Fibonacci numbers
        int[] fib = new int[n + 1];
        fib[0] = 0;
        fib[1] = 1;

        // Calculate Fibonacci numbers
        for (int i = 2; i <= n; i++)
        {
            fib[i] = fib[i-1] + fib[i-2];
        }

        return fib[n];
    }

    public static void Main()
    {
        Console.WriteLine(Fibonacci(10)); // Output: 55
    }
}`
  }
} as const;
