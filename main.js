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
let userWords = prompt('Предложение: ');
let counMy = 0;

for (let i=0; i < userWords.length; i+=1) {
    if (userWords[i] == ' ' && userWords[i] != userWords[i-1]) {
        counMy+=1;
    };
};
 
if (userWords[0] == ' ') {
    counMy-=1;}
    
if (userWords[userWords.length-1] == ' ') {
    counMy-=1;
}

alert(parseInt(counMy+1));