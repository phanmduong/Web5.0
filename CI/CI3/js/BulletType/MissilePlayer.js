<<<<<<< HEAD
/**
 * Created by Phan M Duong on 1/22/2017.
 */
class MissilePlayer {
    constructor(position, enemy, configs) {
        this.configs = configs;
        this.enemy = enemy;
        this.sprite = Nakama.missileGroup.create(
            position.x,
            position.y,
            "assets",
            "BulletType2.png"
        );

        this.sprite.bulletStrength = configs.bulletStrength;

        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.checkWorldBounds = true;
        this.sprite.outOfBoundsKill = true;

        if (configs.radius != 0) {
            this.sprite.body.setCircle(configs.radius, this.sprite.width / 2 - configs.radius,
                this.sprite.height / 2 - configs.radius);
        }

        this.sprite.body.velocity = (new Phaser.Point(0, -1)).setMagnitude(Nakama.configs.bulletPlayerSpeed);
        this.TURN_RATE = 5;
        this.rotation = 0;
    }

    update() {
        if (this.enemy != null) {
            var targetAngle = Nakama.game.math.angleBetween(
                this.sprite.position.x, this.sprite.position.y,
                this.enemy.sprite.position.x, this.enemy.sprite.position.y
            );

            if (this.rotation != targetAngle) {
                var delta = targetAngle - this.rotation;

                console.log(delta);

                if (delta > Math.PI) delta -= Math.PI * 2;
                if (delta < -Math.PI) delta += Math.PI * 2;

                console.log(delta);

                if (delta > 0) {
                    this.sprite.angle += this.TURN_RATE;
                } else {
                    this.sprite.angle -= this.TURN_RATE;
                }

                if (Math.abs(delta) < Nakama.game.math.degToRad(this.TURN_RATE)) {
                    this.rotation = targetAngle;
                }
            }
        }
        this.sprite.body.velocity.x = Math.cos(this.rotation) * this.configs.bulletSpeed;
        this.sprite.body.velocity.y = Math.sin(this.rotation) * this.configs.bulletSpeed;
    }
=======
/**
 * Created by Phan M Duong on 1/22/2017.
 */
class MissilePlayer {
    constructor(position, enemy, configs) {
        this.configs = configs;
        this.enemy = enemy;
        this.sprite = Nakama.missileGroup.create(
            position.x,
            position.y,
            "assets",
            "BulletType2.png"
        );

        this.sprite.bulletStrength = configs.bulletStrength;

        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.checkWorldBounds = true;
        this.sprite.outOfBoundsKill = true;

        if (configs.radius != 0) {
            this.sprite.body.setCircle(configs.radius, this.sprite.width / 2 - configs.radius,
                this.sprite.height / 2 - configs.radius);
        }

        this.sprite.body.velocity = (new Phaser.Point(0, -1)).setMagnitude(Nakama.configs.bulletPlayerSpeed);
        this.TURN_RATE = 5;
        this.rotation = 0;
    }

    update() {
        if (this.enemy != null) {
            var targetAngle = Nakama.game.math.angleBetween(
                this.sprite.position.x, this.sprite.position.y,
                this.enemy.sprite.position.x, this.enemy.sprite.position.y
            );

            if (this.rotation != targetAngle) {
                var delta = targetAngle - this.rotation;

                console.log(delta);

                if (delta > Math.PI) delta -= Math.PI * 2;
                if (delta < -Math.PI) delta += Math.PI * 2;

                console.log(delta);

                if (delta > 0) {
                    this.sprite.angle += this.TURN_RATE;
                } else {
                    this.sprite.angle -= this.TURN_RATE;
                }

                if (Math.abs(delta) < Nakama.game.math.degToRad(this.TURN_RATE)) {
                    this.rotation = targetAngle;
                }
            }
        }
        this.sprite.body.velocity.x = Math.cos(this.rotation) * this.configs.bulletSpeed;
        this.sprite.body.velocity.y = Math.sin(this.rotation) * this.configs.bulletSpeed;
    }
>>>>>>> b763d044d2a539ef6982ea1f1756792e2dccfe73
}