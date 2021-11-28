// first task

let string1 = 'Ytube';
let string2 = 'ou';
let string1Part1 = string1.slice(0, 1);
let string1Part2 = string1.slice(1, 5);
let sliceString = string1Part1.concat(string2, string1Part2);

console.log('first task:', sliceString);

// second task

let numbers = [25, 1];
let project = 'проект';
let team = 'команда';
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';
let sentenceFull = `${howMuch} ${sentence} ${project} ${numbers[1]} ${team} ${numbers[0]}.`;

console.log('second task:', sentenceFull);

// third task

let userNumber = prompt('Enter your number (task three)')

function isEven(number) {
    let check = number % 2;
    if (check === 0) {
        console.log('third task:', 'Number is even!')
    } else {
        console.log('third task:', 'Number is odd!')
    }
}

isEven(userNumber)

// fourth task

let addNumber = prompt('Enter number (task four)')

function fizzBuzz(addNumber) {
    let multipleOf3 = addNumber % 3;
    let multipleOf5 = addNumber % 5;

    if (multipleOf3 === 0 && multipleOf5 === 0) {
        return console.log('fourth task:', 'FizzBuzz') 
    } else if (multipleOf3 === 0) {
        return console.log('fourth task:', 'Fizz')
    } else if (multipleOf5 === 0) {
        console.log('fourth task:', 'Buzz')
    } else {
        console.log('fourth task:', addNumber)
    }
}

fizzBuzz(addNumber)

// fifth task

let randomNumber = ((Math.random()) * 100).toFixed(2);

const numberFromUser = prompt('Enter number (task five)')

alert('fifth task', `${randomNumber >= numberFromUser}, random number: ${randomNumber}, your number: ${numberFromUser}`);

// sixth task

let str = prompt('Что вам нравится изучать? (task six)');
let str2 = prompt('Что вам еще нравится изучать? (task six)');
let isInclude = str.includes(str2);
console.log(isInclude)
let result = str.slice(0, 20);
alert(`sixth task: ${result} ${str2}`);


