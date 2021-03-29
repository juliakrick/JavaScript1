const player = {
    x:0,
    y:0,

    //  Проверяю координаты, чтобы игрок не мог выйти за рамки поля

    move(nextPoint){
        if(nextPoint.x < 0 || nextPoint.y < 0 || nextPoint.x > 9 || nextPoint.y > 9 ){
            this.x = player.x;
            console.log(this.x)
            this.y = player.y;
            console.log(this.y)
        }else{
            this.x = nextPoint.x;
            console.log(this.x)
            this.y = nextPoint.y;
            console.log(this.y)
        }
        
    },

}



