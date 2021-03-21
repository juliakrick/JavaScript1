'use strict'

// 6 Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
// только у вашей горки должно быть 20 рядов, а не 5:

for(let i = 1; i<=20; i++){
    let star = '';
    for (let a = 1; a<i; a++){
        star +='*'
    }
    console.log(star);
}

