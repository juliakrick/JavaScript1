'use strict'

// 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя 
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их 
// и возвращать результат.
// Обязательно использовать оператор return.

function getOperation(x, y){
    let operation = prompt('Какое действие будем выполнять. Введите знак (+, -, /, *). ')
    if (operation == "+"){  
        return x  + y
    }else if (operation == "-"){
        return x - y
    }else if (operation == "/"){
        return x / y
    }else if (operation == "*"){
        return x * y
    }     
}
let res = getOperation(5,5)
alert(res)


