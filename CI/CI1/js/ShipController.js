class ShipController {

    constructor(x, y, spriteName, configs) {
        this.sprite = Nakama.playerGroup.create(
            x,
            y,
            "assets",
            spriteName
        );

        this.configs = configs;

        this.sprite.body.collideWorldBounds = true;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.timeSinceLastFire = 0;
    }

    update() {
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
            } else if (Nakama.keyboard.isDown(this.configs.right)) {
                this.sprite.body.velocity.x = Nakama.configs.shipSpeed;
            } else {
                this.sprite.body.velocity.x = 0;
            }

            this.timeSinceLastFire += Nakama.game.time.physicsElapsed;
            if (Nakama.keyboard.isDown(this.configs.fire) && (this.timeSinceLastFire > this.configs.cooldown)) {
                this.fireBullet();
                this.timeSinceLastFire = 0;
            }
        }
    }

    fireBullet() {
        if (this.configs.numberWayBullet > 0) {
            this.createBullet(0, -1);
        }

        if (this.configs.numberWayBullet > 1) {
            this.createBullet(1, -3);
            this.createBullet(-1, -3);
        }

        if (this.configs.numberWayBullet > 3) {
            this.createBullet(1, -6);
            this.createBullet(-1, -6);
        }
    }

    createBullet(x, y) {
        new BulletController(
            this.sprite.position,
            'BulletType1.png',
            new Phaser.Point(x, y),
            {
                bulletGroup: Nakama.bulletPlayerGroup,
                bulletSpeed: Nakama.configs.bulletPlayerSpeed
            }
        );
    }

}
