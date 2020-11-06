class Base{
    constructor(x,width,height){
        var options={
            isStatic:true
          }
        this.body=Bodies.rectangle(x,680,width,height,options);
        this.width=width;
        this.height=680;
        
        World.add(world,this.body);
    }
    display(){
 
     
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        
    }
}