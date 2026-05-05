// 1. Basic function

// Write a function that takes two numbers and returns their sum.
function test(a, b) {
    return a + b;
}
console.log(test(10, 22))

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

function reverse(str) {
    console.log(str.split('').reverse().join(''))
}
reverse("hello")
// 5. Count vowels

// Write a function that counts how many vowels are in a string.

function countVowel(str) {
    const vowels = "aeiouAEIOU";
    let vowel_count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            vowel_count++;
        }
    }
    console.log(vowel_count);
}
countVowel("hello")

// let str = "Akanksha"
// for (const val of str) {
//     console.log(val);
// }
// 👉  for...of → gives values (characters)
// 👉  for...in → gives indexes (positions)

// 6. Factorial

// Write a function to calculate the factorial of a number.
// Example: 5 → 120, 10

// A factorial means:
// 👉 Multiply the number by all the numbers below it until 1
function factorialCal(val) {
    let result = 1;
    for (let i = 1; i <= val; i++) {
        result *= i;
    }
    console.log(result)
}
factorialCal(5);
factorialCal(10);

// 7. Palindrome check

// Write a function that checks if a string is a palindrome.
// Example: "madam" → true
//  👉 A palindrome is a word that reads the same:
// forward 👉 "madam"
// backward 👉 "madam"

function ispalindrome(str) {
    let word = str.split('').reverse().join('');
    return str === word;
}
console.log(ispalindrome("madam"))
console.log(ispalindrome("none"))

// 8. Array sum

// Write a function that takes an array of numbers and returns the sum.
function calArray(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(calArray([1, 2, 3, 4, 5]))
// 9. Remove duplicates

// Write a function that removes duplicate values from an array.
// Example: [1,2,2,3] → [1,2,3]
function popDuplicates(params) {
    return [...new Set(params)]
}
console.log(popDuplicates([1, 2, 2, 3]))

// 10. Callback function (important)

// Write a function that takes another function as an argument and executes it.
function outer(fun) {
    return fun();
}
outer(function inner() {
    console.log("Inner Argument Function")
})

// 11. Takes a number and returns its square and 
// Takes a number and returns its cube

function numSquare(val) {
    return val * val;
}
function numCube(val) {
    return val * val * val;
}
console.log(numSquare(12));
console.log(numCube(5));

// 12 Takes a number and checks if it is positive, negative, or zero
function checkNum(val) {
    if (val > 0) return console.log(`${val} is positive`);
    if (val < 0) return console.log(`${val} is negative`);
    else return console.log(val);
}
checkNum(-12)

// 13 Write a function that: Swaps two numbers (without using a third variable)

function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b]
}
console.log(swap(5, 15));
