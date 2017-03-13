/**
 * Created by Phan M Duong on 1/11/2017.
 */
class EnemyController {
    constructor(position, spriteName, configs) {
        this.sprite = Nakama.enemyGroup.create(
            position.x,
            position.y,
            "assets",
            spriteName
        );

        this.configs = configs;

        // this.sprite.body.collideWorldBounds = true;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.health = configs.health;

        this.timeSinceLastFire = 0;
        this.timesinceSpawn = 0;

        this.sprite.moveRight = true;
        this.sprite.moveLeft = false;

        this.configs.centerX = (this.configs.minX + this.configs.maxX) / 2;
        this.configs.movementDistance = (this.configs.maxX - this.configs.minX) / 2;
        if (configs.radius != 0) {
            this.sprite.body.setCircle(configs.radius, this.sprite.width / 2 - configs.radius,
                this.sprite.height / 2 - configs.radius);
        }
    }

    update() {

        this.timesinceSpawn += Nakama.game.time.physicsElapsed;

        this.sprite.position.x = this.configs.centerX
            + this.configs.movementDistance * Math.sin((this.timesinceSpawn / this.configs.tweenTime) * Math.PI * 2);

        if (this.sprite.alive) {

            // if (this.sprite.position.x <= this.sprite.body.width / 2) {
            //     this.sprite.moveRight = true;
            //     this.sprite.moveLeft = false;
            // }
            //
            // if (this.sprite.position.x >= Nakama.background.width - this.sprite.body.width / 2) {
            //     this.sprite.moveLeft = true;
            //     this.sprite.moveRight = false;
            //
            // }
            //
            // if (this.sprite.moveRight) {
            //     this.sprite.body.velocity.x = this.configs.enemySpeed;
            // }
            //
            // if (this.sprite.moveLeft) {
            //     this.sprite.body.velocity.x = -this.configs.enemySpeed;
            // }

            this.timeSinceLastFire += Nakama.game.time.physicsElapsed;
            if (this.timeSinceLastFire > this.configs.cooldown) {
                this.fireBullet();
                this.timeSinceLastFire = 0;
            }

        }
    }

    fireBullet() {

        this.createBullet(0, 1);

    }

    createBullet(x, y) {
        switch (this.configs.bulletType){
            case '1':
                new BulletType1Enemy(this.sprite.position,new Phaser.Point(x, y),
                    {
                        bulletStrength: this.configs.bulletStrength,
                        bulletSpeed: this.configs.bulletSpeed
                    });
                break;
            case '2':
                new BulletType2Enemy(this.sprite.position,new Phaser.Point(x, y),
                    {
                        bulletStrength: this.configs.bulletStrength,
                        bulletSpeed: this.configs.bulletSpeed
                    });
                break;
            case '3':
                new BulletType3Enemy(this.sprite.position,new Phaser.Point(x, y),
                    {
                        bulletStrength: this.configs.bulletStrength,
                        bulletSpeed: this.configs.bulletSpeed
                    });
                break
            default:
        }

    }
}