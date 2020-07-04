class Box extends baseClass{

    constructor(x,y){

        super(x,y,20,30)
        this.Visiblity = 255


    }


    display(){

        if(this.body.speed < 3){
            super.display();

        }else{
        
            var pos = this.body.position
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(0,this.Visiblity);
            image(this.image, pos.x, pos.y, 20, 30);
            pop();
        }

    }

    score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }



}