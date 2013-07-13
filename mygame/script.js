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
    game.preload('images/icon1.png');
    game.tick = 0;
    
    game.onload = function() {
     ball = new ball(152, 240); //ボールを出現させる
        game.rootScene.backgroundColor = 'black';
    }
    game.start();
};
        