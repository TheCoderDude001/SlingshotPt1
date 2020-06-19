class Box{

    constructor(x,y){

        this.width = 20;
        this.height = 40;
        this.x = x;
        this.y = y;
        this.image = loadImage("image.png");

        this.body = Bodies.rectangle(x,y,this.width,this.height);
        World.add(world, this.body)
    }


    display(){

        var angle = this.body.angle;

        var pos = this.body.position
/*
            fill("red")
            rectMode(CENTER)
            rect(this.x, this.y, this.width, this.height);
          

        */

       push();
       translate(pos.x, pos.y);
       rotate(angle);
       angleMode(RADIANS);   
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
       pop()




    }



}