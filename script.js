// 1. Basic function

// Write a function that takes two numbers and returns their sum.
function test(a, b) {
    console.log(a + b);
}
test(10, 22)

// 2. Even or odd

// Write a function that checks if a number is even or odd.
function oddeven(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even`)
    }
    else {
        console.log(`${num} is odd`)
    }
}
oddeven(13)

// 3. Find maximum

// Create a function that takes 3 numbers and returns the largest one.
function lar(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c)
    }
}
lar(12, 3, 54)
// 4. Reverse a string

// Write a function that takes a string and returns it reversed.
// Example: "hello" → "olleh"
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));
// 5. Count vowels

// Write a function that counts how many vowels are in a string.

// 6. Factorial

// Write a function to calculate the factorial of a number.
// Example: 5 → 120

// 7. Palindrome check

// Write a function that checks if a string is a palindrome.
// Example: "madam" → true

// 8. Array sum

// Write a function that takes an array of numbers and returns the sum.

// 9. Remove duplicates

// Write a function that removes duplicate values from an array.
// Example: [1,2,2,3] → [1,2,3]

// 10. Callback function (important)

// Write a function that takes another function as an argument and executes it.