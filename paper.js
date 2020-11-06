class Paper{
    constructor(radius){
        this.body=Bodies.circle(200,200,radius,{restitution:0.3,friction:0.5,density:1.2});
      this.radius=radius;
      
        this.image=loadImage("paper.png");
        
        World.add(world,this.body);
    }
    display(){
      
      var pos=this.body.position;
       imageMode(CENTER);
       
     image(this.image,
        pos.x,pos.y,this.width,this.height);
     
    }
}