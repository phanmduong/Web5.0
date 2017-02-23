/**
 * Created by Phan M Duong on 1/10/2017.
 */
class BulletController {
    constructor(position, spriteName, direction, configs) {
        this.configs = configs;
        this.sprite = this.configs.bulletGroup.create(
            position.x,
            position.y,
            "assets",
            spriteName
        );

        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.checkWorldBounds = true;
        this.sprite.outOfBoundsKill = true;

        this.sprite.angle = -Math.tan(direction.x / direction.y) * 180 / Math.PI;
        this.sprite.body.velocity = direction.setMagnitude(this.configs.bulletSpeed);

    }

}