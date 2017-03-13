/**
 * Created by Phan M Duong on 1/22/2017.
 */
class BulletType3Player extends BulletController {
    constructor(position, direction, configs) {
        configs.bulletSpeed = Nakama.configs.bulletPlayerSpeed;
        configs.radius = 0;
        super(position, "BulletType3.png", direction, Nakama.bulletPlayerGroup, configs);
        this.sprite.body.velocity = 0;
    }
}