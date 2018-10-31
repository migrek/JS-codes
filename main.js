//task1
/*let userPassword = prompt('Введите пароль: ') ;
const originPassword = 'qwerty12345';

if (userPassword === originPassword) {
   alert('Вход выполнен!!!')
} else {
   alert('Неверно!!!')
}*/


//task2
/*let number1 = parseInt(prompt('Введите первую цифру: ', ''));
let number2 = parseInt(prompt('Введите вторую цифру: ', ''));
mySumm =  number1 + number2;
alert('Сумма: ' + mySumm);*/

/*let arr = [1, 2, 3];
for (let i=0; i<arr.length; i+=1) {
    console.info (arr[i]+1);
}*/


//task3
/*let userArr = prompt('Массив чисел через пробел: ');
let arr = userArr.split(' ');
for (let i=0; i<arr.length; i+=1) {
    arr[i] = parseInt(arr[i])+1;
}


//task4
let arrNew = [];
for (let i=0; i < arr.length; i+=1) {
    if (!Number.isNaN(arr[i])) {
        arrNew.push(parseInt(arr[i]) + 1);
    };
};

console.info (arr);
console.info (arrNew);*/

//task5
/*let userWords = prompt('Предложение: ');
let counMy = 0;

for (let i=0; i < userWords.length; i+=1) {
    if (userWords[i] == ' ' && userWords[i] != userWords[i-1]) {
        counMy+=1;
    };
};
 
if (userWords[0] == ' ') {
    counMy-=1;
}
    
if (userWords[userWords.length-1] == ' ') {
    counMy-=1;
}

alert(counMy+1);*/

/*str = 'ABC';
str[0] = 'Z';
console.log(str);

strMass = ['A', 'B', 'C'];
strMass[0] = 'Z';
console.log(strMass);

users = [{name:'Alex', age: 28}, 
{name:'George', age: 18},
{name:'Olga', age: 26},
{name:'Ivan', age: 69},
{name:'Oleg', age: 55},
{name:'Vasia', age: 4}];

usersNew = users.slice().sort(function(a, b) {
    return a.age < b.age;
});


console.log(users);
console.log(usersNew);*/


/*var myArr = [0,2,7,2,5,72,72,5,6,5,0,0,1,5];

var myNewArr = [];

for (var i = 0; i < myArr.length; i++) {
    if (!myNewArr.includes(myArr[i])) {
        myNewArr.push(myArr[i])
    }
}
console.log(myArr);
console.log(myNewArr);*/

var myStr = 'asedgfs';
var myArrStr = myStr.toUpperCase().split('');
var myNewArr = [];
var forbiddenSim = ' ';

/*for (var i = 0; i < myArrStr.length; i++) {
    if (myArrStr[i] != forbiddenSim) {
        myNewArr.push(myArrStr[i]);}
    }
*/
var myReversedStr = myNewArr.slice().reverse();

console.log(myStr);
console.log(myNewArr);
console.log(myReversedStr);


if (myNewArr.join() === myReversedStr.join()) {
    console.log('Полиндром!!!');
} else {
    console.log('НЕ полиндром)(((');}


    //replace(/ /g, ',').
