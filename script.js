enchant();
var ball = enchant.Class.create(enchant.Sprite,{
initialize: function(x,y){
    enchant.Sprite.call(this,16,16);
    this.scaleX = 2.5;
    this.scaleY = 2.5;
    this.image = game.assets['images/icon1.png'];
    this.x = x; this.y = y; this.frame = 0;
    game.rootScene.addChild(this);
}
});


    

window.onload = function() {
game = new Game(320, 320);
game.fps = 16;
game.preload('images/icon1.png','vector.png','pad.png');
game.tick = 0;

game.onload = function() {
 ball = new ball(152, 240); //ボールを出現させる
    /*game.rootScene.backgroundColor = 'black';*/
    
    var pad = new Pad();
    pad.x   = 0;
    pad.y   = 220;
    game.rootScene.addChild(pad);
    

    vector = new Sprite(120, 26);
    vector.image = game.assets['vector.png'];
    vector.x = 100; 
    vector.y = 220;
    vector.scaleX = 1/300;
    vector.scaleY = 1/300;
    /*vector.rotate(Math.atan2(4,2));*/ 
    game.rootScene.addChild(vector);

    //矢印の定期処理
    vector.tick = 0;
    vector.addEventListener(Event.ENTER_FRAME, function(){
        //左
        if (game.input.left){
            /*vector.x -= 3;*/
            vector.scaleX = -1;
            vector.rotation -= 10;
        }
        //右
        else if (game.input.right){
            /*vector.x += 3;*/
            vector.scaleY = 1;
            vector.rotation += 10;
        }
    }); 
};                    
game.start();

};