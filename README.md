### Hexlet tests and linter status:
[![Actions Status](https://github.com/poirtyc/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/poirtyc/fullstack-javascript-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/b92a304bc9dfc320313c/maintainability)](https://codeclimate.com/github/poirtyc/First/maintainability)

Welcome to Brain-games project
In each game the user is asked a question, the user needs to enter the answer from the keyboard. 
The game always lasts up to three points if the user hits three questions in a row - he won, 
if the user misses the game will interrupt and tell which answer was correct.

The project has 5 games:
- brain-even
- brain-calc
- brain-gcd
- brain-progression
- brain-prime

###How to install:
1. Install Node.js: Make sure you have Node.js installed on your computer. 
You can download it from the official Node.js website and follow the 
installation instructions for your operating system.

2. Than open comand line and write `npm install -g '__game_name__'` (Exapmle: `npm install -g brain-even` )

3. Than write name game in comand line (Example `brain-even` or `brain-calc`)

###How to use:
Write the name of the game in the command line: 
**brain-even**
The game will ask if the number is even, you have to answer 'yes' if the number 
is even, 'no®  if the number is odd
![Brain-even](/asciinema/Brain-even.gif)

**brain-calc**
The game will ask a question with mathematical expression, you need to calculate 
the answer in your mind and write it in the field 'your answer'
![Brain-calc](/asciinema/Brain-calc.gif)

**brain-gcd**
The game will ask a question with two numbers, you need to calculate in your mind 
the largest common divisor and write it in the field 'your answer'
![Brain-gcd](/asciinema/Brain-gcd.gif)

**brain-progression**
The game will ask a question with mathematical progression, one of the numbers will be skipped, 
you need in mind to calculate the answer and write it in the field 'your answer'
![Brain-progression](/asciinema/Brain-progression.gif)

**brain-prime**
The game asks a question with one number, the player needs to enter the answer 'yes' 
if the number is prime, or 'no' if the number is not prime. 
(A prime is a natural number, a larger number that has exactly two different 
natural divisors: 1 and the number itself.)
![Brain-prime](/asciinema/Brain-prime.gif)