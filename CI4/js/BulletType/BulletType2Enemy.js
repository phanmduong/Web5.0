/**
 * Created by Phan M Duong on 1/22/2017.
 */
class BulletType2Enemy{
    constructor(position, direction, configs){
        new BulletController(
            position,
            "EnemyBulletType2.png",
            direction,
            Nakama.bulletEnemyGroup,
            {
                bulletStrength: configs.bulletStrength,
                bulletSpeed: configs.bulletSpeed,
                radius: 17
            }
        );
    }
}