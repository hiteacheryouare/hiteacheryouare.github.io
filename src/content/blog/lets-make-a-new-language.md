---
layout: "../../layouts/blogPost.astro" #dont touch
title: "Let's make a new programming language" #Required
description: "Just for funzies, let's make my dream programming language." #Required
author: "Ryan Mullin" #Required
pubDate: "July 13 2023" #Required
heroImage: 
    src: "https://th.bing.com/th/id/OIG.iYLaJzc1XwXWIfQ2qGxp?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
    alt: "clip art of a giraffe programming and using a computer"
---

Do you know what the worlds needs right now? More programming languages. Never fear! I have concocted one from the deepest, darkest dephts of my strange sense of humor. I tried to keep it reasonable enough that it was usable, but also threw in some tricks to make it uniquely **mine**

It's called GiraffeScript, or GScript for short. It's logo is listed above

## Basis

Let's start of with a base language. I am most familiar with TypeScript, so we'll build off of that. Plus, the current tooling in the JS ecosystem rigeht now is beyond compare, and has some of the best suppourt around. Plus, we can use existing tools like node, deno, and V8 to execute the code after it has been transpiled. (Yes, its a superset. Put your pitchforks and torches down please)

## Basics

Let's start off with the basics of the language, and demonstrate them with some example programs.

#### Hello, World
`console.*` is a bad abstraction. It's meant strictly for debugging, and you have to access the `console` namespace to even display words on a screen. Not helpful nor fun for beginners. To print to the standard output, simply use `write()`
```ts
write('Hello, World!'); // Prints "Hello, World!" to the standard output.
```

### Delclaring Variables

Why do we need three keywords to declare a variable? I still dont know the answer to that question.
To declare a variable, use `var`.
```ts
var name = "GScript"
```
ALl variables shall be globally scoped and immutable by default. To change this behavior, change your declaration.
To make it mutable, add `mut`.""
To make it block scoped, add `blockscope`
```rs
mut var animal = 'Giraffe' // Globally scoped mutable variable
blockscope var short  = 'G' // Blockscoped immutable variable
blockscope mut var lessShort = 'GScript' //blockscoped mutable variable.
```

#### Types

As with typescript, all types are optional. If you do not specify a specific type, the type will be infered. If you want to be condecending about it, you can tell the compiler to explicity infer the type, which is its automatic behavior
```ts
var bestAnimal: infer = 'Giraffe'
```
In fact, you can use `infer` with a generic, defeating the whole purpose of it in the first place!!
```ts
var myFavoriteNumber: infer<number> = 6
```

To specify the return type of the function, use the squiggly arrow. This is due to how it looks kinda funny, and that pleases me.
```ts
function getBestAnimal() ~> infer<string> {
    return 'Giraffe'
}
```

## Functions
There are multiple different ways to declare a function. The most simple of which is `function`

```ts
function add(a: infer<number>, b: infer<number>) ~> number {
    return a +b
}
```

However, if you want to be concise, a hipter, or a consice hipster, you can use an arrow function!
```ts
-> (a, b) ~> infer<number> => a+b <-
// Notice how the function has to be on one line, and surronded by arrows pointing at it, to let the rest of the program know how concise and hip it is.
```

As in typescript, you can assign these to variables
```ts
var addFn = -> (a, b) => a+b <-
```

### Returning Values
To return a value, simply use `return` <br>
To do the opposite, use `retain` <br>
Retain keeps the value in memory, and will persist there, doing nothing, until the program is terminated. 

```ts
function findersKeepers() {
    retain 'cookies'
}
// The string 'cookies' will persist in memory until the program is terminated.
```

#### Conditional Returns

You can return values if a certian parameter is met. For example:

```ts
function addButSpecial(a: number, b: number) ~> infer<number> {
    return a+b if (a+b > 5) else retain a+b
}
```

### Funky Functions

To make your program even more fun, you can make your functions `funky`! `funky function`s run line by line, in a random order. How funky!

```ts
funky function getGroovy() ~> infer {
    blockscope var boogie = boogie()
    blockscope var chicken = chicken()
    blockscope var twist = twist()
    write(boogie);
    write(chicken);
    write(twist);
    return
}
// Expected output: ???
```

Arrow functions can also be funky!

```ts
var breakDance = -> funky () => breakdance(); askForTip(); <-
// Expected output: ???
```

### Generator Functions

Generator functions are a dark pattern and have been removed from the language. To restore this archaic feature, you must jump through hoops:
```ts
// This function returns the function* keyword
funky function jumpThroughHoops(guess: number) ~> infer {
    return if (guess === random(1, Infinity))
}
```
If you guess correctly, the `function*` keyword becomes available
However, as a punishment for using this dark pattern, all generator functions must be funky

```ts
funky function* goToHell() ~> infer {
    yield(void);
    yeild(process.platform);
    yeild(os.delete('C:/Windows/System32'));
}
```

### Async Functions

Since `async function` always returns a promise, it makes it roughly 10x harder to work with, so, you must type out the word `asynchronous` to take the extra 1/2 second to realize what you are getting yourself into. <br>
`await` also has a similar punishment, as you must use `anticipate`.

Example async function:

```ts
asynchronous function hitAPI() {
    blockscope var result = anticipate fetch('...')
    return if (anticpate result.json().isLongerThan(5000)) else retain anticipate result.json()
}
```

Of course, async functions can also be funky!

```ts
funky asynchronous function hitAPI() {
    blockscope var result = anticipate fetch('...')
    return if (anticpate result.json().isLongerThan(5000)) else retain anticipate result.json()
}
// This might return before even hitting the API
```


## Arrays

Arrays work just like the do in TypeScript, however, there are some notable changes.

If the day of the week (local time) is Friday, arrays begin indexing at `[1]`. That way, the program always breaks on a Friday. This is to maximize job retention when using GScript. 
```ts
var myArray: infer<string[]> = [
    '0',
    '1',
    '2'
]
if (myArray[1] === '0') {
    deleteApp()
}
// ^^ If this runs on a friday, the app will be deleted

```


## Loops

Unlike other perfect languages named after animals, we believe in loops here. To perform a loop, there is no need to create a varible and increment it each time. Simply use `do ... times`

```ts
do 50 times {
    write('woohoo');
}
```

To get the index of where the loop is at, use `with index ...`

```ts
do 50 times with index i {
    write(`we are at iteration number ${i}`)
}
```

### Loops Over Arrays

To loop over arrays, do not use `do`. Please use `each ... in ...`
```ts
each number in numberArray {
    write(number)
}
```

You can still use `with index ...` here as well

```ts
each word in dictionary with index i {
    write(`the ${i} word in the dictionary is ${word}`)
}
```

## Example Programs:

### FizzBuzz

```ts
do 100 times with index i {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
        write('FizzBuzz');
    } else if ((i + 1) % 3 === 0) {
        write('Fizz');
    } else if ((i + 1) % 5 === 0) {
        write('Buzz');
    } else {
        write(i + 1);
    }
}
```

## Fibonacci Sequence
```ts
blockscope var n = 10; // Specify the number of Fibonacci numbers to generate

blockscope var fibArray: infer<number[]> = [0, 1]; // Start with the first two numbers

do (n - 2) times {
    blockscope var len = fibArray.length;
    blockscope var nextNum = fibArray[len - 1] + fibArray[len - 2];
    fibArray.push(nextNum);
}

each fibNum in fibArray {
    write(fibNum);
}
```

## Arrays

```ts
blockscope var fruits: infer<string[]> = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

write('Welcome to the fruit stand!');
write('Here are the available fruits:');

if (isFriday()) {
    each fruit in fruits with index i {
        write('[' + (i + 1) + '] ' + fruit);
    }
} else {
    each fruit in fruits with index i {
        write('[' + i + '] ' + fruit);
    }
}

blockscope var selectedFruitIndex = 3; // Let's pretend the user selected the third fruit

if (isFriday()) {
    selectedFruitIndex++; // Adjust the index by adding 1 on Fridays
}

if (selectedFruitIndex >= 1 && selectedFruitIndex <= fruits.length) {
    var selectedFruit = fruits[selectedFruitIndex - 1];
    write('Great choice! You selected: ' + selectedFruit);
} else {
    if (isFriday()) {
        write('Oops! Invalid selection. Today is Friday, the fruit stand is closed!');
        retain 'Backup plan initiated: Enjoy a backup fruit basket!';
    } else {
        write('Oops! Invalid selection. Please choose a valid fruit index.');
    }
}

```

## Kitchen Sink
```ts
blockscope var name = 'GScript';
var age = 5;
mut var counter = 0;

function greetPerson(person: infer<string>, isFormal: infer<boolean>) ~> infer<string> {
    return if (isFormal) {
        `Hello, ${person}! Nice to meet you.`;
    } else {
        `Hey there, ${person}! How's it going?`;
    }
}

funky function funkyCounter() {
    do 5 times {
        counter++;
    }
    write('Funky counter: ' + counter);
}

function multiplyByTwo(num: infer<number>) ~> number {
    return num * 2;
}

asynchronous function fetchData() {
    blockscope var data = anticipate fetch('https://api.example.com/data');
    return if (anticipate data.status === 200) else retain anticipate data.json();
}

do 3 times with index i {
    write('Iteration: ' + i);
    retain 'Cookie'; // Retain the string 'Cookie' in memory
}

var result = multiplyByTwo(7);
write('Result: ' + result);

blockscope var fetchedData = anticipate fetchData();
write('Fetched data: ' + fetchedData);

write(greetPerson('John', true));
write(greetPerson('Jane', false));

funkyCounter();

```