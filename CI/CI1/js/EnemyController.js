<<<<<<< HEAD
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

        this.sprite.body.collideWorldBounds = true;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);

        this.timeSinceLastFire = 0;

        this.sprite.moveRight = true;
        this.sprite.moveLeft = false;
    }

    update() {

        if (this.sprite.alive) {
            if (this.sprite.position.x <= this.sprite.body.width / 2) {
                this.sprite.moveRight = true;
                this.sprite.moveLeft = false;
            }

            if (this.sprite.position.x >= Nakama.background.width - this.sprite.body.width / 2) {
                this.sprite.moveLeft = true;
                this.sprite.moveRight = false;

            }

            if (this.sprite.moveRight) {
                this.sprite.body.velocity.x = this.configs.enemySpeed;
            }

            if (this.sprite.moveLeft) {
                this.sprite.body.velocity.x = -this.configs.enemySpeed;
            }

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
        new BulletController(
            this.sprite.position,
            'EnemyBulletType1.png',
            new Phaser.Point(x, y),
            {
                bulletGroup: Nakama.bulletEnemyGroup,
                bulletSpeed: this.configs.bulletSpeed
            }
        )
        ;
    }
=======
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

        this.sprite.body.collideWorldBounds = true;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);

        this.timeSinceLastFire = 0;

        this.sprite.moveRight = true;
        this.sprite.moveLeft = false;
    }

    update() {

        if (this.sprite.alive) {
            if (this.sprite.position.x <= this.sprite.body.width / 2) {
                this.sprite.moveRight = true;
                this.sprite.moveLeft = false;
            }

            if (this.sprite.position.x >= Nakama.background.width - this.sprite.body.width / 2) {
                this.sprite.moveLeft = true;
                this.sprite.moveRight = false;

            }

            if (this.sprite.moveRight) {
                this.sprite.body.velocity.x = this.configs.enemySpeed;
            }

            if (this.sprite.moveLeft) {
                this.sprite.body.velocity.x = -this.configs.enemySpeed;
            }

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
        new BulletController(
            this.sprite.position,
            'EnemyBulletType1.png',
            new Phaser.Point(x, y),
            {
                bulletGroup: Nakama.bulletEnemyGroup,
                bulletSpeed: this.configs.bulletSpeed
            }
        )
        ;
    }
>>>>>>> b763d044d2a539ef6982ea1f1756792e2dccfe73
}