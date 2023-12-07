function sum(num1, num2,fun) {
    let result = num1 + num2;
    fun(result)
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}
const ans =sum(5,5,displayResult)

//task

// You are only allowed to call one function after this
// How will you displayResult of a sum

//by me

//a callback function
//i have passed a string name displayResult to a function and stores it in a fun var after which
//fun(result){result value is sum of both numbers send by me in code above}
//and fun=displayResult as i store that in it so the last line of first function becoems 
//displayResult(result); which call the other function and pass value of result to it 