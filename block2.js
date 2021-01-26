class Block2{
    constructor(x,y) {
      var opt = {
          isStatic:false,
      }

      this.body = Bodies.rectangle(x,y,20,20,opt);
      World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("silver");
        rect(pos.x,pos.y,30,40);
    }
}