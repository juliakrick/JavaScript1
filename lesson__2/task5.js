'use strict';

// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических 
// операций
// (использовать функции из задания 4) и вернуть полученное значение.
let arg1 = +prompt('Введите первое число: ')
let arg2 = +prompt('Введите второе число: ')
let operation = prompt('Какое действие будем выполнять. Введите знак (+, -, /, *). ')
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '+':
            alert(arg1 + arg2)
            break
        case '-':
            alert(arg1 - arg2)
            break
        case '/':
            alert(arg1 / arg2)
            break
        case '/':
            alert(arg1 / arg2)
            break

        default:
            alert('Вы ввели неверную операцию')
            break
        }        
    }
    
mathOperation(arg1, arg2, operation)
    
