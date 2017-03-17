<<<<<<< HEAD
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
=======
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
>>>>>>> b763d044d2a539ef6982ea1f1756792e2dccfe73
}