  "use strict";
let op = '';

class Calculator {
  
  static plus(arg1, arg2){
    return  +arg1 + +arg2;     }
  static minus(arg1, arg2){
      return  +arg1 - +arg2;}
  static multiply(arg1, arg2){
        return  +arg1 * +arg2;}
  static divide(arg1, arg2){
          return  +arg1 / +arg2;}
          
        }
        
        function showResult() {
          
          let result = '';
          const arg1 = document.querySelector('#arg1').value;
          console.log(arg1);
          const arg2 = document.querySelector('#arg2').value;
          console.log(arg2);
          
          if (op == '+') {result = Calculator.plus(arg1, arg2);
            }
          else if (op == '-') {Calculator.minus(arg1, arg2);
          }
          else if (op == '*') {Calculator.multiply(arg1, arg2);
          }
          else if (op == '/') {Calculator.divide(arg1, arg2);
         }
          console.log(result);
          
   
   document.querySelector('.result-text').innerHTML = result;


   
 }
   
   //if (selectedButton) {
    //const calcResult = calc(arg1, arg2, selectedButton.classList[1]);
   // result.innerHTML = isNaN(calcResult) ? 'Пожалуйста, укажите числа' : `Ваш результат: ${calcResult}` ;}
  //if (op ='/') {
   // arg2 == 0 ?  alert('Делить на 0 нельзя!') : `Ваш результат: ${calcResult}`;
   //  }
   // }  
  







    
    



