

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = [1, "simple", true, 2, "Blood", false, 3, "Raising", 4, "Arizona"];
// console.log(array.length);
//
// console.log("Numbers:");
// for (let i = 0; i < array.length; i++)
// {
//     if (typeof array[i] === "number")
//     {
//         console.log(array[i]);
//     }
// }
// console.log("\nStrings:");
// for (let i = 0; i < array.length; i++)
// {
//     if (typeof array[i] === "string")
//     {
//         console.log(array[i]);
//     }
// }
// console.log("\nBooleans:");
// for (let i = 0; i < array.length; i++)
// {
//     if (typeof array[i] === "boolean")
//     {
//         console.log(array[i]);
//     }
// }

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// for (let i = 0; i <= 9; i++)
// {
//     if (i % 3 === 2) {
//         array[i] = i * 2654 % 100;
//     }
//     else if (i % 3 === 1) {
//         array[i] = !Boolean(i % 3);
//     }
//     else if (i % 3 === 0) {
//         array[i] = i + 2 + " bananas";
//     }
//
//     console.log(array[i]);
// }

//Створити цикл for на 100 ітерацій. Вивести тільки парні/непарні кроки. через console.log + document.write

// for (let i = 1; i <= 100; i++)
// {
//     if (i % 2 === 0) { //непарні: i % 2 === 1
//         console.log(i);
//         document.write(`${i} <br>`);
//     }
// }

//  Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// let minutesToCount = 2;
// for (let minutes = 0; minutes <= minutesToCount; minutes++)
// {
//     if (minutes === minutesToCount)
//     {
//         console.log(`${minutes}: 00`);
//         break;
//     }
//     for (let seconds = 0; seconds < 60; seconds++)
//     {
//         console.log(`${minutes}: ${seconds}`);
//     }
// }

//Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let hoursToCount = 2;
// let minutesToCount = 20;
//
// for (let hours = 0; hours <= hoursToCount; hours++) {
//     for (let minutes = 0; minutes < 60; minutes++) {
//         if (hours === hoursToCount && minutes >= minutesToCount) {
//             console.log(`${hours}: ${minutes}: 00`)
//             break;
//         }
//         for (let seconds = 0; seconds < 60; seconds++) {
//             console.log(`${hours}: ${minutes}: ${seconds}`);
//         }
//     }
// }

//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for/while зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < array.length; i++) //1
// {
//     word += array[i];
// }

// let i = 0;                              //2
// while (i < array.length) {
//     word += array[i];
//     i++;
// }
//
// console.log(word);

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < array.length; i++)
// {
//     console.log(array[i])
// }
//
// let i = 0;
// while (i < array.length)
// {
//     console.log(array[i]);
//     i++
// }

// for (let i = 0; i < array.length; i++)
// {
//     if (array[i] % 2 === 0) //array[i] % 2 === 1 непарні
//         console.log(array[i])
// }
//
// let i = 0;
// while (i < array.length)
// {
//     if (array[i] % 2 === 0) //array[i] % 2 === 1 непарні
//         console.log(array[i]);
//     i++
// }

// for (let i = 0; i < array.length; i++)
// {
//     if (array[i] % 3 === 0)
//     {
//         array[i] = 'okten';
//     }
// }
// console.log(array);

// for (let i = array.length - 1; i >= 0 ; i--)
// {
//     console.log(array[i])
// }

// let array = [];
// for (let i = 0; i < 50; i++)
// {
//     array[i] = 2*i; //array[i] = 2*i + 1; -непарні
//
// }
// console.log(array);

