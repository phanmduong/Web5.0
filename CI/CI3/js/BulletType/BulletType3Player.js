/**
 * Created by Phan M Duong on 1/22/2017.
 */
class BulletType3Player{
    constructor(position, direction, configs){
        new BulletController(
            position,
            "BulletType3.png",
            direction,
            Nakama.bulletPlayerGroup,
            {
                bulletStrength: configs.bulletStrength,
                bulletSpeed: Nakama.configs.bulletPlayerSpeed,
                radius: 0
            }
        );
    }
}