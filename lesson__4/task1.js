'use strict'
// 1(это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
// вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
 
let number = +prompt('Введите число в диапазоне от 0 до 999')

function getObject(x){
    let obj = {}
    // obj.units = Math.round(x%100)
    // alert(obj)
    if (!Number.isInteger(x)){
        alert('Введите целое число')
    }else if(x<0 || x > 999){
        alert('Введите правильное число')
}else{
   obj.units = Math.floor(x%10)
   let ten = (Math.floor(x/10))%10
   obj.tens = ten
   obj.hundreds = Math.floor(x/100)
   
}
console.log(obj)
}

let a = getObject(number)
console.log(a)



