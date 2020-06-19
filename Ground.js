class Ground{

    constructor(x,y,w,h){


        var options = {

            isStatic: true
        }
        this.width = w
        this.height = h
        this.x = x
        this.y = y
        this.body = Matter.Bodies.rectangle(x,y,w,h,options);

        World.add(world, this.body)
    }

    display(){

        var pos = this.body.position
        rectMode(CENTER)
        fill("grey")
        rect(pos.x, pos.y, this.width, this.height);

    }

}