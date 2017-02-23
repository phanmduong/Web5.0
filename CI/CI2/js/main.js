var Nakama = {};
Nakama.configs = {
    bulletPlayerSpeed: 1500,
    shipSpeed: 500,
    enemySpeed: 500,
}

window.onload = function () {
    Nakama.game = new Phaser.Game(640, 960, Phaser.AUTO, '',
        {
            preload: preload,
            create: create,
            update: update,
            render: render
        }, false, false
    );
}

// preparations before game starts
var preload = function () {
    Nakama.game.scale.minWidth = 320;
    Nakama.game.scale.minHeight = 480;
    Nakama.game.scale.maxWidth = 640;
    Nakama.game.scale.maxHeight = 960;
    Nakama.game.scale.pageAlignHorizontally = true;
    Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    Nakama.game.time.advancedTiming = true;

    Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
    Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function () {
    Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
    Nakama.keyboard = Nakama.game.input.keyboard;

    Nakama.background = Nakama.game.add.tileSprite(0, 0, 640, 1920, 'background');

    Nakama.bulletPlayerGroup = Nakama.game.add.physicsGroup();
    Nakama.bulletEnemyGroup = Nakama.game.add.physicsGroup();
    Nakama.playerGroup = Nakama.game.add.physicsGroup();
    Nakama.enemyGroup = Nakama.game.add.physicsGroup();

    Nakama.players = [];

    Nakama.players.push(new ShipController(200, 800, "Spaceship1-Player.png", {
        up: Phaser.Keyboard.UP,
        down: Phaser.Keyboard.DOWN,
        left: Phaser.Keyboard.LEFT,
        right: Phaser.Keyboard.RIGHT,
        fire: Phaser.Keyboard.SPACEBAR,
        numberWayBullet: 1,
        cooldown: 0.1
    }));

    Nakama.players.push(new ShipController(400, 800, "Spaceship1-Partner.png", {
        up: Phaser.Keyboard.W,
        down: Phaser.Keyboard.S,
        left: Phaser.Keyboard.A,
        right: Phaser.Keyboard.D,
        fire: Phaser.Keyboard.F,
        numberWayBullet: 5,
        cooldown: 0.1
    }));

    Nakama.enemies = [];

    Nakama.enemies.push(new EnemyController(new Phaser.Point(200, 100), "EnemyType1.png", {
        enemySpeed: Nakama.configs.enemySpeed,
        bulletSpeed: 200,
        cooldown: 0.5
    }));
    Nakama.enemies.push(new EnemyController(new Phaser.Point(800, 300), "EnemyType2.png", {
        enemySpeed: Nakama.configs.enemySpeed,
        bulletSpeed: 300,
        cooldown: 0.5
    }));

}


// update game state each frame
var update = function () {

    Nakama.game.physics.arcade.overlap(Nakama.bulletPlayerGroup, Nakama.enemyGroup, collisionBulletPlayerAndEnemy, null, this);
    Nakama.game.physics.arcade.overlap(Nakama.playerGroup, Nakama.enemyGroup, collisionShipAndEnemy, null, this);
    Nakama.game.physics.arcade.overlap(Nakama.bulletEnemyGroup, Nakama.playerGroup, collisionBulletEnemyAndPlayer, null, this);

    Nakama.background.tilePosition.y += 5;
    for (var i = 0; i < Nakama.players.length; i++) {
        Nakama.players[i].update();
    }

    for (var i = 0; i < Nakama.enemies.length; i++) {
        Nakama.enemies[i].update();
    }
}

var collisionBulletPlayerAndEnemy = function (bullet, enemy) {
    bullet.kill();
    enemy.kill();
}

var collisionShipAndEnemy = function (ship, enemy) {
    ship.kill();
    enemy.kill();
}

var collisionBulletEnemyAndPlayer = function (bullet, ship) {
    bullet.kill();
    ship.kill();
}

// before camera render (mostly for debug)
var render = function () {
}
