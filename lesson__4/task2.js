'use strict'

// 1.1Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
// наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните
// их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет
// уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри
// функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).

// es5
function Product1(name, price){
    this.name = name;
    this.price = price;
}

Product1.prototype.make25PercentDiscount = function(){
    alert( this.price * 0.25) 
}

let prod1 = new Product1('clock', 1234)
alert(prod1.name)
prod1.make25PercentDiscount()

// es6

class Product2 {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    make25PercentDiscount(){
        alert( this.price * 0.25) 
    }
}

let prod2 = new Product1('sofa', 100)
alert(prod2.name)
prod2.make25PercentDiscount()

// 1.2
// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
// наследования -> механика наследования),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
// типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
// помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
// свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
// highlighted значение true.

function Post(authors, text, date){
    this.authors = authors;
    this.text = text;
    this.date = date
}

Post.prototype.edit = function(text){
    alert( this.text = text) 
}


function AttachedPost(authors, text, date){
    Post.call(this, authors, text, date)
    this.highlighted = false
}
 
AttachedPost.prototype = Object.create(Post.prototype)
AttachedPost.prototype.constructor = AttachedPost

AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}

let exp = new Post('Ator', 'Lorem', new Date)
console.dir(exp)
console.dir(exp.edit('Ipsem'))
console.dir(exp)

let exp3 = new AttachedPost('Athtor3', 'kcncbiwvcocpn', new Date)
console.log(exp3.highlighted)
exp3.makeTextHighlighted()
exp3.edit('text')
console.log(exp3.highlighted)
console.log(exp3)





// ---------------------



class Post2{
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date
    }

    edit = function(text){
        alert( this.text = text)
        
    }
}

class AttachedPost extends Post2{
    constructor(author, text, date){
        super(author, text, date)
        this.highlighted = false
    }
    makeTextHighlighted = function(text){
        this.highlighted = true;
        
    }
}

let exp2 = new AttachedPost('Athor123', 'TextText', new Date)
console.dir(exp2)
exp2.edit('tttttttttttt')
exp2.makeTextHighlighted()
console.dir(exp2)




