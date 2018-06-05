/* ДЗ 1 - Функции */

/*
 Задание 1:

 1.1: Добавьте к функции параметр с любым именем
 1.2: Функция должна возвращать аргумент, переданный ей в качестве параметра

 Пример:
   returnFirstArgument(10) вернет 10
   returnFirstArgument('привет') вернет `привет`

 Другими словами: функция должна возвращать в неизменном виде то, что поступает ей на вход
 */

function returnFirstArgument(x) {
  return x;
}
console.log(returnFirstArgument(5));

/*
 Задание 2:

 2.1: Функция должна возвращать сумму переданных аргументов

 Пример:
   sumWithDefaults(10, 20) вернет 30
   sumWithDefaults(2, 4) вернет 6

 2.1 *: Значение по умолчанию для второго аргумента должно быть равно 100

 Пример:
   sumWithDefaults(10) вернет 110
 */

function sumWithDefaults(a, b) {
  var sum = a + 100;
  return sum;
}
console.log(sumWithDefaults(3));

/*
 Задание 3:

 Функция должна принимать другую функцию и возвращать результат вызова этой функции

 Пример:
   returnFnResult(() => 'привет') вернет 'привет'
 */
function returnFnResult(fn) {
  var r = fn();
  console.log("Return function result:", r);
}
returnFnResult(function() {
  return 2 + 4;
});

/*
 Задание 4:

 Функция должна принимать число и возвращать новую функцию (F)
 При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F

 Пример:
   var f = returnCounter(10);

   console.log(f()); // выведет 11
   console.log(f()); // выведет 12
   console.log(f()); // выведет 13
 */

function returnCounter(number) {
    return function() {
    return number = 1 + number; //можно написать проще: return ++number;
  }
}
var f = returnCounter(10);
console.log(f());
console.log(f());
console.log(f());

/*
 Задание 5 *:

 Функция должна возвращать все переданные ей аргументы в виде массива
 Количество переданных аргументов заранее неизвестно

 Пример:
   returnArgumentsArray(1, 2, 3) вернет [1, 2, 3]
 */

 function returnArgumentsArray() {
   var arr = [];
      
  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]); 
  }
  return arr;
}
console.log(returnArgumentsArray(1, 2, 3, 4, 5));

/*
1. Создать массив +
2. Вернуть массив +
3. Взять значения аргументов из всевдо-массива arguments +
4. Поместить аргументы в массив
*/


/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию

 Пример:
   function sum(a, b) {
     return a + b;
   }

   var newSum = bindFunction(sum, 2, 4);

   console.log(newSum()) выведет 6
 */
function bindFunction(fn) {
}

export {
    returnFirstArgument,
    sumWithDefaults,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}


var arguments = [1, 2, 3];
console.log(arguments[0]);

/*
https://learn.javascript.ru/while-for
1. for
2. while
*/


