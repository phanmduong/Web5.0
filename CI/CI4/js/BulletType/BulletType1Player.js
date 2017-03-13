/**
 * Created by Phan M Duong on 1/22/2017.
 */
class BulletType1Player{
    constructor(position, direction, configs){
        new BulletController(
            position,
            "BulletType1.png",
            direction,
            Nakama.bulletPlayerGroup,
            {
                bulletStrength: configs.bulletStrength,
                bulletSpeed: Nakama.configs.bulletPlayerSpeed,
                radius: 12
            }
        );
    }
}