class Obstacle {
constructor(ctx, x, y){
this.ctx = ctx

this.x = x
this.y = y

this.width = 150
this.height = 25

this.vy = 3

}

draw(){
this.ctx.save()
this.ctx.fillStyle = 'red'
this.ctx.fillRect(this.x, this.y, this.width, this.height)
this.ctx.restore()
this.move()

}

move(){

    this.y += this.vy
   
}


}