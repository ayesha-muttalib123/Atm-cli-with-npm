#! /usr/bin/env node


import inquirer from "inquirer";
console.log('\n\Welcome To \'CodeWithAyesha\' -CLI Simple Calculator\n')
//asking questions from users through inquirer
let answers=await inquirer.prompt([
    {message:"Enter your first number",type:"number",name:"firstNumber"},
    {message:"Enter your second number",type:"number",name:"secondNumber"},
    {
        message:"Enter your operation",
        type:"list",
        choices:["Addition","Subtraction","Multiplication","Division"],
        name:"operation"

    }

]);
if(answers.operation==='Addition'){
    console.log(answers.firstNumber+answers.secondNumber)

}
else if(answers.operation==='Subtraction'){
    console.log(answers.firstNumber-answers.secondNumber)
    }
else if(answers.operation==='Multiplication'){
        console.log(answers.firstNumber*answers.secondNumber)
        }
else if(answers.operation==='Division'){
            console.log(answers.firstNumber/answers.secondNumber)
            }
else{
    console.log("Invalid operation")
            }