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
        switch (this.configs.bulletType) {
            case '1':
                new BulletType1Player(this.sprite.position, new Phaser.Point(x, y),
                    {
                        bulletStrength: this.configs.bulletStrength
                    }
                );
                break;
            case '2':
                new BulletType2Player(this.sprite.position, new Phaser.Point(x, y),
                    {
                        bulletStrength: this.configs.bulletStrength
                    }
                );
                break;
            case '3':
                new BulletType3Player(this.sprite.position, new Phaser.Point(x, y),
                    {
                        bulletStrength: this.configs.bulletStrength
                    }
                );
                break;
            case '4':
                var enemy = null;
                var minDistance = 10000;

                for (var i = 0; i < Nakama.enemies.length; i++) {
                    var distance = Phaser.Math.distance(this.sprite.position.x, this.sprite.position.y, Nakama.enemies[i].sprite.position.x,
                        Nakama.enemies[i].sprite.position.y);
                    if (minDistance >= distance) {
                        enemy = Nakama.enemies[i];
                        minDistance = distance;
                    }
                }

                Nakama.missiles.push(new MissilePlayer(this.sprite.position, enemy,
                    {
                        bulletStrength: this.configs.bulletStrength
                    }
                ));
                break;
            default:
        }

    }

}
