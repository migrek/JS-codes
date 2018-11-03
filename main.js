//Create a new array (arrNew) with numbers plus 1
let userArr = prompt('Array of numbers separated by a space: ');
let arr = userArr.split(' ');
for (let i=0; i<arr.length; i+=1) {
    arr[i] = parseInt(arr[i])+1;
}

let arrNew = [];
for (let i=0; i < arr.length; i+=1) {
    if (!Number.isNaN(arr[i])) {
        arrNew.push(parseInt(arr[i]) + 1);
    };
};

console.info (arr);
console.info (arrNew);

//Сalculates the number of words in a sentence 
let userWords = prompt('Insert sentence: ');
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

alert(counMy+1);

//Сreates a new object with users sorted by age
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
console.log(usersNew);

//Creates a new array with unic numbers
var myArr = [0,2,7,2,5,72,72,5,6,5,0,0,1,5];
var myNewArr = [];

for (var i = 0; i < myArr.length; i++) {
    if (!myNewArr.includes(myArr[i])) {
        myNewArr.push(myArr[i])
    }
}

console.log(myArr);
console.log(myNewArr);

//Determines whether the string entered is a palindrome or not
var myStr = prompt('Insert text: ');
var myArrStr = myStr.replace(/ /g, "").toLowerCase();
var myReversedStr = myArrStr.split("").reverse();

if (myArrStr === myReversedStr.join("")) {
    alert('Yes. it is palindrome!!!');
} else {
    alert('No, it is not palindrome!!!');}

