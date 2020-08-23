
var number=document.querySelectorAll('.number')
var operator=document.querySelectorAll('.operator')
var clear=document.querySelector('.all-clear')
var decimal=document.querySelector('.decimal')
var equal=document.querySelector('.equal-sign')
var scr=document.querySelector('.screen')
var bet=0;
var temp="";
var final=[]
var currentInput=0,inputNumber //currentinput is the expression whose resultString is to be found
var resultString=[];  //the input box array
scr.value=""



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
          resultString.push(number)
     }
     else{
          currentInput+=number
          resultString.push(number)
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
     resultString=[]
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
     finalresultString()
     calculate()
     console.log(bet)
     updateScreen(bet)
     final=[]
     resultString=[]
     currentInput="0" 
     bet=0
})


function finalresultString(){
     final=[]
     temp=""
     for(var k=0; k<resultString.length; k++)
     {
          if(resultString[k]=='+' || resultString[k]=='-' || resultString[k]=='*' || resultString[k]=='/')
          {
             final.push(parseFloat(temp))
             final.push(resultString[k])
             temp=""
          }
          else{
                 temp=temp+resultString[k];
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

function getIt(opr,parameter,num){
     if(isNaN(parameter))
     {
          parameter=0
     }
     if(isNaN(num))
     {
          num=0
     }
     switch(opr)
     {
        case '+':parameter+=num
                  break;
        case '-':parameter-=num
                 break;
        case '*':parameter*=num
                 break;
        case '/':parameter=parameter/num;
                 break;
     }
     bet=parameter;
}
