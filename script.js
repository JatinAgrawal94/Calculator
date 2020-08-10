
var number=document.querySelectorAll('.number')
var operator=document.querySelectorAll('.operator')
var per=document.querySelector('.percentage')
var clear=document.querySelector('.all-clear')
var decimal=document.querySelector('.decimal')
var equal=document.querySelector('.equal-sign')
var scr=document.querySelector('.screen')
var bet=0;
var currentInput=0,inputNumber;//currentinput is the expression whose result is to be found
var result=[]; //the input box array
scr.value=""


// setInterval(()=>{
//      console.log(currentInput)
// },1000)


//declaring event listeners for numbers
 for (var i=0;i< number.length;i++)
 {
      number[i].addEventListener('click',()=>{
           inputNumber(event.target.value)
           updateScreen(currentInput)
      })
}

function inputNumber(number){ //numbers currently present in the input box
     if(currentInput=='0'){
          currentInput=number
          result.push(number)
     }
     else{
          currentInput+=number
          result.push(number)
     }
}
// declaring event listeners for operator
for(var i=0;i<operator.length;i++)
{
     operator[i].addEventListener('click',()=>{
          inputNumber(event.target.value)
          updateScreen(currentInput)
     })
}
clear.addEventListener('click',()=>{
     updateScreen(0)
     currentInput=""
     final=[]
     result=[]
     temp=""
})

function updateScreen(text){
     scr.value=text
}

function updatescreen()
{
     scr.value=currentInput
}

decimal.addEventListener('click',()=>{
     inputNumber('.')
     updatescreen('.')
})

equal.addEventListener('click',()=>{
     finalResult()
     calculate()
     console.log(bet)
     updateScreen(bet)
     final=[]
     result=[]
     currentInput="0" 
     bet=0
})



var temp="";
var final=[]

function finalResult(){
     final=[]
     temp=""
     for(var k=0; k<result.length; k++)
     {
          if(result[k]=='+' || result[k]=='-' || result[k]=='*' || result[k]=='/')
          {
             final.push(parseFloat(temp))
             final.push(result[k])
             temp=""
          }
          else{
                 temp=temp+result[k];
          }
     }
     final.push(parseFloat(temp))
}


function calculate(){
     bet=final[0];

     for(var k=0;k<final.length;k++)
     {
          if(final[k]=='+' || final[k]=='-' || final[k]=='*' || final[k]=='/')
          {
               getIt(final[k],bet,final[k+1])
          }

     }

}



function getIt(opr,tempor,num){
     if(isNaN(tempor))
     {
          tempor=0
     }
     if(isNaN(num))
     {
          num=0
     }
     switch(opr)
     {
        case '+':tempor+=num
                  break;
        case '-':tempor-=num
                 break;
        case '*':tempor*=num
                 break;
        case '/':tempor=tempor/num;
                 break;
     }
     bet=tempor;
}
