/**
 * Created by Phan M Duong on 1/10/2017.
 */
class BulletController {
    constructor(position, spriteName, direction, bulletGroup, configs) {
        this.configs = configs;
        this.sprite = bulletGroup.create(
            position.x,
            position.y,
            "assets",
            spriteName
        );
        this.bulletType3 = null;

        this.sprite.bulletStrength = configs.bulletStrength;

        this.sprite.anchor = new Phaser.Point(-0.5, 1);
        this.sprite.checkWorldBounds = true;
        this.sprite.outOfBoundsKill = true;

        this.sprite.angle = -Math.tan(direction.x / direction.y) * 180 / Math.PI;
        this.sprite.body.velocity = direction.setMagnitude(this.configs.bulletSpeed);
        if (configs.radius != 0) {
            this.sprite.body.setCircle(configs.radius, this.sprite.width / 2 - configs.radius,
                this.sprite.height / 2 - configs.radius);
        }

    }

}