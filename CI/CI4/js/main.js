<<<<<<< HEAD
var Nakama = {};
Nakama.configs = {
    bulletPlayerSpeed: 1000,
    shipSpeed: 500,
    enemySpeed: 500,
    player1Controls: {
        up: Phaser.Keyboard.UP,
        down: Phaser.Keyboard.DOWN,
        left: Phaser.Keyboard.LEFT,
        right: Phaser.Keyboard.RIGHT,
        fire: Phaser.Keyboard.SPACEBAR
    },
    player2Controls: {
        up: Phaser.Keyboard.W,
        down: Phaser.Keyboard.S,
        left: Phaser.Keyboard.A,
        right: Phaser.Keyboard.D,
        fire: Phaser.Keyboard.F
    }
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


    Nakama.bulletEnemyGroup = Nakama.game.add.physicsGroup();
    Nakama.missileGroup = Nakama.game.add.physicsGroup();
    Nakama.playerGroup = Nakama.game.add.physicsGroup();
    Nakama.bulletPlayerGroup = Nakama.game.add.physicsGroup();
    Nakama.enemyGroup = Nakama.game.add.physicsGroup();

    Nakama.missiles = [];
    Nakama.players = [];
    Nakama.game.h

    Nakama.players.push(new ShipType1Controller(200, 800, 'Player', Nakama.configs.player1Controls));

    Nakama.players.push(new ShipType2Controller(400, 800, 'Partner', Nakama.configs.player2Controls));

    Nakama.enemies = [];

    Nakama.enemies.push(new EnemyController(new Phaser.Point(200, 100), "EnemyType1.png", {
        enemySpeed: Nakama.configs.enemySpeed,
        bulletType: '1',
        bulletSpeed: 500,
        bulletStrength: 1,
        cooldown: 0.5,
        minX: 100,
        maxX: 540,
        tweenTime: 2,
        health: 20,
        radius: 20
    }));
    Nakama.enemies.push(new EnemyController(new Phaser.Point(800, 300), "EnemyType2.png", {
        enemySpeed: Nakama.configs.enemySpeed,
        bulletType: '2',
        bulletStrength: 2,
        bulletSpeed: 700,
        cooldown: 0.5,
        minX: 200,
        maxX: 440,
        tweenTime: 3,
        health: 20,
        radius: 28
    }));

}


// update game state each frame
var update = function () {

    Nakama.game.physics.arcade.overlap(Nakama.bulletPlayerGroup, Nakama.enemyGroup, collisionBulletAndActor);
    Nakama.game.physics.arcade.overlap(Nakama.playerGroup, Nakama.enemyGroup, collisionShipAndEnemy);
    Nakama.game.physics.arcade.overlap(Nakama.bulletEnemyGroup, Nakama.playerGroup, collisionBulletAndActor);

    Nakama.background.tilePosition.y += 5;

    Nakama.players.forEach(function (player) {
        player.update();
    });

    Nakama.enemies.forEach(function (enemy) {
        enemy.update();
    });

    // for (var i = 0; i < Nakama.players.length; i++) {
    //     Nakama.players[i].update();
    //     Nakama.game.debug.body(Nakama.players[i]);
    // }
    //
    // for (var i = 0; i < Nakama.enemies.length; i++) {
    //     Nakama.enemies[i].update();
    // }

    for (var i = 0; i < Nakama.missiles.length; i++) {
        if (Nakama.missiles[i].sprite.alive) Nakama.missiles[i].update();
    }
}

var collisionShipAndEnemy = function (ship, enemy) {
    ship.kill();
    enemy.kill();
}

var collisionBulletAndActor = function (bulletSprite, actorSprite) {
    if (actorSprite.bulletType != '3') bulletSprite.kill();
    actorSprite.damage(bulletSprite.bulletStrength);
}

// before camera render (mostly for debug)
var render = function () {
    // Nakama.playerGroup.forEachAlive(renderGroup, this);
    // Nakama.enemyGroup.forEachAlive(renderGroup, this);
    // Nakama.bulletPlayerGroup.forEachAlive(renderGroup, this);
    // Nakama.bulletEnemyGroup.forEachAlive(renderGroup, this);
}
function renderGroup(member) {
    Nakama.game.debug.body(member);
}
=======
var Nakama = {};
Nakama.configs = {
    bulletPlayerSpeed: 1000,
    shipSpeed: 500,
    enemySpeed: 500,
    player1Controls: {
        up: Phaser.Keyboard.UP,
        down: Phaser.Keyboard.DOWN,
        left: Phaser.Keyboard.LEFT,
        right: Phaser.Keyboard.RIGHT,
        fire: Phaser.Keyboard.SPACEBAR
    },
    player2Controls: {
        up: Phaser.Keyboard.W,
        down: Phaser.Keyboard.S,
        left: Phaser.Keyboard.A,
        right: Phaser.Keyboard.D,
        fire: Phaser.Keyboard.F
    }
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


    Nakama.bulletEnemyGroup = Nakama.game.add.physicsGroup();
    Nakama.missileGroup = Nakama.game.add.physicsGroup();
    Nakama.playerGroup = Nakama.game.add.physicsGroup();
    Nakama.bulletPlayerGroup = Nakama.game.add.physicsGroup();
    Nakama.enemyGroup = Nakama.game.add.physicsGroup();

    Nakama.missiles = [];
    Nakama.players = [];
    Nakama.game.h

    Nakama.players.push(new ShipType1Controller(200, 800, 'Player', Nakama.configs.player1Controls));

    Nakama.players.push(new ShipType2Controller(400, 800, 'Partner', Nakama.configs.player2Controls));

    Nakama.enemies = [];

    Nakama.enemies.push(new EnemyController(new Phaser.Point(200, 100), "EnemyType1.png", {
        enemySpeed: Nakama.configs.enemySpeed,
        bulletType: '1',
        bulletSpeed: 500,
        bulletStrength: 1,
        cooldown: 0.5,
        minX: 100,
        maxX: 540,
        tweenTime: 2,
        health: 20,
        radius: 20
    }));
    Nakama.enemies.push(new EnemyController(new Phaser.Point(800, 300), "EnemyType2.png", {
        enemySpeed: Nakama.configs.enemySpeed,
        bulletType: '2',
        bulletStrength: 2,
        bulletSpeed: 700,
        cooldown: 0.5,
        minX: 200,
        maxX: 440,
        tweenTime: 3,
        health: 20,
        radius: 28
    }));

}


// update game state each frame
var update = function () {

    Nakama.game.physics.arcade.overlap(Nakama.bulletPlayerGroup, Nakama.enemyGroup, collisionBulletAndActor);
    Nakama.game.physics.arcade.overlap(Nakama.playerGroup, Nakama.enemyGroup, collisionShipAndEnemy);
    Nakama.game.physics.arcade.overlap(Nakama.bulletEnemyGroup, Nakama.playerGroup, collisionBulletAndActor);

    Nakama.background.tilePosition.y += 5;

    Nakama.players.forEach(function (player) {
        player.update();
    });

    Nakama.enemies.forEach(function (enemy) {
        enemy.update();
    });

    // for (var i = 0; i < Nakama.players.length; i++) {
    //     Nakama.players[i].update();
    //     Nakama.game.debug.body(Nakama.players[i]);
    // }
    //
    // for (var i = 0; i < Nakama.enemies.length; i++) {
    //     Nakama.enemies[i].update();
    // }

    for (var i = 0; i < Nakama.missiles.length; i++) {
        if (Nakama.missiles[i].sprite.alive) Nakama.missiles[i].update();
    }
}

var collisionShipAndEnemy = function (ship, enemy) {
    ship.kill();
    enemy.kill();
}

var collisionBulletAndActor = function (bulletSprite, actorSprite) {
    if (actorSprite.bulletType != '3') bulletSprite.kill();
    actorSprite.damage(bulletSprite.bulletStrength);
}

// before camera render (mostly for debug)
var render = function () {
    // Nakama.playerGroup.forEachAlive(renderGroup, this);
    // Nakama.enemyGroup.forEachAlive(renderGroup, this);
    // Nakama.bulletPlayerGroup.forEachAlive(renderGroup, this);
    // Nakama.bulletEnemyGroup.forEachAlive(renderGroup, this);
}
function renderGroup(member) {
    Nakama.game.debug.body(member);
}
>>>>>>> b763d044d2a539ef6982ea1f1756792e2dccfe73
