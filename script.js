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
        //背景の生成
        var bg = new Sprite(320, 320);
        bg.backgroundColor = 'green';
        game.root;
        ball = new ball(152, 240); //ボールを出現させる
        var pad = new Pad();
        pad.x   = 0;
        pad.y   = 220;
        game.rootScene.addChild(pad);
        vector = new Sprite(120, 26);
        vector.image = game.assets['vector.png'];
        vector.x = 100; 
        vector.y = 225;
        
        game.rootScene.addChild(vector);
        //矢印の定期処理
        vector.tick = 0;
        vector.addEventListener(Event.ENTER_FRAME, function(){
            if(vector.rotation > -180 || vector.rotation < 0){
                if(game.input.left){
                    if(vector.rotation - 10 != -180){
                        vector.rotation -= 10;
                    }
                }
                if(game.input.right){
                    if(vector.rotation + 10 != 0){
                        vector.rotation += 10;
                    }
                }
            };
        });
    };
    game.start();
};
