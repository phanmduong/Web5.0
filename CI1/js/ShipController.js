class ShipController {

    constructor(x, y, spriteName, configs) {
        this.sprite = Nakama.game.add.sprite(
            x,
            y,
            "assets",
            spriteName
        );

        this.configs = configs;

        this.sprite.bulletTime = 0;
        this.sprite.bullets = Nakama.game.add.group();
        this.sprite.bullets.enableBody = true;
        this.sprite.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.sprite.bullets.createMultiple(100, 'assets', 'BulletType1.png');
        this.sprite.bullets.setAll('anchor.x', 0.5);
        this.sprite.bullets.setAll('anchor.y', 1);
        this.sprite.bullets.setAll('outOfBoundKill', true);
        this.sprite.bullets.setAll('checkWorldBounds', true);

    }

    update() {
        if (Nakama.keyboard.isDown(this.configs.up) && this.sprite.position.y >= 10) {
            this.sprite.position.y -= 10;
        }
        if (Nakama.keyboard.isDown(this.configs.down) && this.sprite.position.y <= 880) {
            this.sprite.position.y += 10;
        }
        if (Nakama.keyboard.isDown(this.configs.left) && this.sprite.position.x >= 10) {
            this.sprite.position.x -= 10;
        }
        if (Nakama.keyboard.isDown(this.configs.right) && this.sprite.position.x <= 550) {
            this.sprite.position.x += 10;
        }

        if (Nakama.keyboard.isDown(this.configs.fire)) {
            this.fireBullet();
        }
    }

    fireBullet() {
        if (Nakama.game.time.now > this.sprite.bulletTime) {
            this.sprite.bullet = this.sprite.bullets.getFirstExists(false);

            if (this.sprite.bullet) {
                this.sprite.bullet.reset(this.sprite.position.x + this.sprite.width / 2, this.sprite.position.y);
                this.sprite.bullet.body.velocity.y = -600;
                this.sprite.bulletTime = Nakama.game.time.now + 200;
            }
        }
    }

}
