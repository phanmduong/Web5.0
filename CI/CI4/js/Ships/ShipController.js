<<<<<<< HEAD
class ShipController {

    constructor(x, y, spriteName, configs) {
        this.sprite = Nakama.playerGroup.create(
            x,
            y,
            "assets",
            spriteName
        );

        this.configs = configs;

        this.sprite.health = configs.health;

        this.sprite.body.collideWorldBounds = true;
        this.sprite.anchor = new Phaser.Point(0, 0.5);
        this.timeSinceLastFire = 0;
        if (configs.radius != 0) {
            this.sprite.body.setCircle(configs.radius, this.sprite.width / 2 - configs.radius,
                this.sprite.height / 2 - configs.radius);
        }
    }

    update() {
        if (this.bulletType3 != null) {this.bulletType3.sprite.kill()}
        if (this.sprite.alive) {

            if (this.sprite.body.touching.left) this.sprite.body.velocity.y = -Nakama.configs.shipSpeed;
            if (Nakama.keyboard.isDown(this.configs.up)) {
                this.sprite.body.velocity.y = -Nakama.configs.shipSpeed;
            } else if (Nakama.keyboard.isDown(this.configs.down)) {
                this.sprite.body.velocity.y = Nakama.configs.shipSpeed;
            } else {
                this.sprite.body.velocity.y = 0;
            }

            if (Nakama.keyboard.isDown(this.configs.left)) {
                this.sprite.body.velocity.x = -Nakama.configs.shipSpeed;
                this.sprite.frameName = this.configs.frameNameLeft;
            } else if (Nakama.keyboard.isDown(this.configs.right)) {
                this.sprite.body.velocity.x = Nakama.configs.shipSpeed;
                this.sprite.frameName = this.configs.frameNameRight;
            } else {
                this.sprite.body.velocity.x = 0;
                this.sprite.frameName = this.configs.frameNameDefault;
            }

            this.timeSinceLastFire += Nakama.game.time.physicsElapsed;
            if (Nakama.keyboard.isDown(this.configs.fire) && (this.timeSinceLastFire > this.configs.cooldown)) {
                this.fireBullet();
                this.timeSinceLastFire = 0;
            }
        }
    }

    fireBullet() {}

}
=======
class ShipController {

    constructor(x, y, spriteName, configs) {
        this.sprite = Nakama.playerGroup.create(
            x,
            y,
            "assets",
            spriteName
        );

        this.configs = configs;

        this.sprite.health = configs.health;

        this.sprite.body.collideWorldBounds = true;
        this.sprite.anchor = new Phaser.Point(0, 0.5);
        this.timeSinceLastFire = 0;
        if (configs.radius != 0) {
            this.sprite.body.setCircle(configs.radius, this.sprite.width / 2 - configs.radius,
                this.sprite.height / 2 - configs.radius);
        }
    }

    update() {
        if (this.bulletType3 != null) {this.bulletType3.sprite.kill()}
        if (this.sprite.alive) {

            if (this.sprite.body.touching.left) this.sprite.body.velocity.y = -Nakama.configs.shipSpeed;
            if (Nakama.keyboard.isDown(this.configs.up)) {
                this.sprite.body.velocity.y = -Nakama.configs.shipSpeed;
            } else if (Nakama.keyboard.isDown(this.configs.down)) {
                this.sprite.body.velocity.y = Nakama.configs.shipSpeed;
            } else {
                this.sprite.body.velocity.y = 0;
            }

            if (Nakama.keyboard.isDown(this.configs.left)) {
                this.sprite.body.velocity.x = -Nakama.configs.shipSpeed;
                this.sprite.frameName = this.configs.frameNameLeft;
            } else if (Nakama.keyboard.isDown(this.configs.right)) {
                this.sprite.body.velocity.x = Nakama.configs.shipSpeed;
                this.sprite.frameName = this.configs.frameNameRight;
            } else {
                this.sprite.body.velocity.x = 0;
                this.sprite.frameName = this.configs.frameNameDefault;
            }

            this.timeSinceLastFire += Nakama.game.time.physicsElapsed;
            if (Nakama.keyboard.isDown(this.configs.fire) && (this.timeSinceLastFire > this.configs.cooldown)) {
                this.fireBullet();
                this.timeSinceLastFire = 0;
            }
        }
    }

    fireBullet() {}

}
>>>>>>> b763d044d2a539ef6982ea1f1756792e2dccfe73
