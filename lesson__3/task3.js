'use strict'

// 3 Перед вами находится массив с продуктами, 
// сегодня распродажа и вам нужно на каждый товар применить скидку
// 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :

const products = [{
id: 3,
price: 200,
},
{
id: 4,
price: 900,
},
{
id: 1,
price: 1000,
},
];

let addDiscount = products.forEach(function(item, i, arr) {
     return item.discount = '15%'
  });
  
console.log(products)

  
