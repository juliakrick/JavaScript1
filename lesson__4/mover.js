'use strict';

let mover = {
    getDirection(){
        let availableDirections = [1, 2, 3, 4, 5, 6, 7, 8,9]
        while(true){
            let direction = parseInt(prompt('Введите число - 1, 2, 3, 4, 6, 7,8, 9 куда вы хотите переместиться. Для отмены нажмите "Отмена"'))
            if(isNaN(direction)){
                    return null
            }
            if(!availableDirections.includes(direction)){
                alert('Введите корректное число!')
                continue;
            }
            return direction
        }
        
    },
    getNextPosition(direction){
            const nextPosition = {
                x: player.x, 
                y: player.y
            }
        
            // для передвижения по диагонали использую одновременно x и y

        switch(direction){
            case 3:
                nextPosition.x++;
                nextPosition.y--;
                break
            case 2:
                nextPosition.y--;
                break
            case 1:
                nextPosition.x--;
                nextPosition.y--;
                break
            case 4:
                nextPosition.x--;
                break
            case 7:
                nextPosition.x--;
                nextPosition.y++;
                break
            case 6:
                nextPosition.x++;
                break
            case 9:
                nextPosition.x++;
                nextPosition.y++;
                break
            case 8:
                nextPosition.y++;
                break
        }
        return nextPosition;
    }
}

