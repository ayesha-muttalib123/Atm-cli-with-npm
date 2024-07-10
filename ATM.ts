import inquirer from "inquirer";

let myBalance=10000
let myPin=1234

let pinAnswer=await inquirer.prompt([{
    name:"pin",
    message:"enter pin",
    type:"number"

},


])

if (pinAnswer.pin === myPin) {
    let operationAnswer = await inquirer.prompt([{
        name: "operation",
        message: "Please select operation:",
        type: "list",
        choices: ["check balance","withdraw"]




        
    },

    
]);
if(operationAnswer.operation==='withdraw'){ 
    
    let amountAnswer=await inquirer.prompt([
     {
    name:"selectAmount",
    message:"select amount",
    type:"list",
    choices:["1000","2000","5000","10000","enter amount"]
     }
    
    ])
   
        if(amountAnswer.selectAmount==='1000'){
            myBalance=myBalance-1000
            console.log("your balance is "+myBalance)
        }
        else if(amountAnswer.selectAmount==='2000'){
            myBalance=myBalance-2000
            console.log("your balance is "+myBalance)
            }
            else if(amountAnswer.selectAmount==='5000'){
                myBalance=myBalance-5000
                console.log("your balance is "+myBalance)
                }
                else if(amountAnswer.selectAmount==='10000'){
                    myBalance=myBalance-10000
                    console.log("your balance is "+myBalance)
                    }
                    if(amountAnswer.selectAmount==="enter amount"){
                        let amountAnswer=await inquirer.prompt([
                            {
                                name:"amount",
                                message:"enter amount",
                                type:"number"
                                }
                                
                            
                            ]
                        )






   if(amountAnswer.amount>myBalance){
    console.log("insufficient balance")
    }
    else{
     
        myBalance-=amountAnswer.amount
        console.log("your balance is "+myBalance)
        }
        
}
else if(operationAnswer.operation==='check balance'){
    console.log("your balance is "+myBalance)
}    
}
else{
    console.log("incorrected pin number")
}

}