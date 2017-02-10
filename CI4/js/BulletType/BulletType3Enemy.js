/**
 * Created by Phan M Duong on 1/22/2017.
 */
class BulletType3Enemy{
    constructor(position, direction, configs){
        new BulletController(
            position,
            "EnemyBulletType3.png",
            direction,
            Nakama.bulletEnemyGroup,
            {
                bulletStrength: configs.bulletStrength,
                bulletSpeed: configs.bulletSpeed,
                radius: 0
            }
        );
    }
}