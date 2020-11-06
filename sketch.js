        var box,boxImg;
        
        
        const Engine = Matter.Engine;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const Body = Matter.Body;
        
        function preload()
        {
          boxImg=loadImage("purepng.com-trash-cantrash-cansteelplasticdustbinrecyclebin-1421526645837pq0c0.png");
        }

        function setup() {
          createCanvas(800, 700);
          
         
          engine = Engine.create();
          world = engine.world;

          Engine.run(engine);

          ground= new Ground(400,700,800,20);
        rect1=new Rect(550,20,580);
          rect2=new Rect(615,150,20);
          rect3=new Rect(710,20,580);
          
         paper=new Paper(35);
        
        }


        function draw() {
          Engine.update(engine);
         
          up();
          background(0);
          ground.display();
          rect1.display();
          
          rect2.display();
          rect3.display();
          
          paper.display();
          
          box=createSprite(625,500,1,1);
          box.addImage(boxImg);
          box.scale=0.4;
          drawSprites();
         
        
          
          
        }

       function up()
        {
        if(keyWentDown("up_arrow")){
          Matter.Body.applyForce(paper.body,paper.body.position,{x:170,y:-270});
        }
        
        }


