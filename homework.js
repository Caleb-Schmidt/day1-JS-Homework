// Prework Questions:

// 1.
function sayHello(username)
{
    return console.log("Hello_", username);
}
sayHello("Caleb")

// 2.
function odds()
{
    for (let i = 1; i < 100; i += 2){
        console.log(i);
    }
}
odds()

// 3.
function maxNum(alist)
{
    let biggestNum = 0
    for (let i = 0; i < alist.length; i++){
        if (alist[i] > biggestNum){
            biggestNum = i
        }
    }
    return biggestNum
}
console.log(maxNum([1,2,3,4,5]))
// Incomplete: doesn't target the last num in a list

// 4.
function leapYear(anum)
{
    if (anum % 4 == 0){
        if (anum % 100 != 0){
            return "This is a leap year."
        }else{
            if (anum % 400 == 0){
                return "This is a leap year."
            }else{
                return "This is not a leap year."
            }
        }
    }else{
        return "This is not a leap year."
    }
}
console.log(leapYear(2022))

// 5.
function isConsecutive(alist)
{
    for (let i = 0; i <= alist.length; i++){
        if (alist[i] + 1 != alist[i + 1]){
            return "This list is not consecutive."
        }
    }
    return "This list is consecutive"
}
console.log(isConsecutive([1,2,6,4,5]))
// Incomplete: Always says a list is not consecutive.

// CodeWars questions:

// 8 Kyu: Area or Perimeter
const areaOrPerimeter = function(l , w) {
    if (l != w){
      return (l * 2) + (w * 2)
    }else{
      return l * w
    }
};

// 8 Kyu: Return Negative
function makeNegative(num) {
    if (num < 0){
      return num
    }else{
      return num - (num * 2)
    }
}

// JavaScript-Homework file questions:
// Unable to complete: File refuses to load.