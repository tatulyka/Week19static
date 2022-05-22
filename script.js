  "use strict";
let op;
let result;
const arg1 = +document.querySelector('#arg1').value;
const arg2 = +document.querySelector('#arg2').value;

class Calculator {

  static plus(arg1, arg2){
    result = +arg1 + +arg2;}
  static minus(arg1, arg2){
    result = +arg1 - +arg2;}
  static multiply(arg1, arg2){
    result = +arg1 * +arg2;}
  static divide(arg1, arg2){
    result = +arg1 / +arg2;}

}

 function showResult() {


   if (op ='+') Calculator.plus();
   else if (op ='-') Calculator.minus();
   else if (op ='*') Calculator.multiply();
   else if (op ='/') Calculator.divide();
   
   
   
   document.querySelector('.result-text').innerHTML = result;


   

   
 }
   
   //if (selectedButton) {
    //const calcResult = calc(arg1, arg2, selectedButton.classList[1]);
   // result.innerHTML = isNaN(calcResult) ? 'Пожалуйста, укажите числа' : `Ваш результат: ${calcResult}` ;}
  //if (op ='/') {
   // arg2 == 0 ?  alert('Делить на 0 нельзя!') : `Ваш результат: ${calcResult}`;
   //  }
   // }  
  







    
    



