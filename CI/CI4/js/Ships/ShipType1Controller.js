/**
 * Created by Phan M Duong on 2/7/2017.
 */
class ShipType1Controller extends ShipController {
    constructor(x, y, namePlayer, configs) {
        configs.numberWayBullet = 1;
        configs.cooldown = 0;
        configs.health = 10;
        configs.bulletStrength = 1;
        configs.bulletType = '3';
        configs.frameNameDefault = 'Spaceship1-' + namePlayer + '.png';
        configs.frameNameLeft = 'Spaceship1Left-' + namePlayer + '.png';
        configs.frameNameRight = 'Spaceship1Right-' + namePlayer + '.png';
        configs.radius = 32;
        super(x, y, 'Spaceship1-' + namePlayer + '.png', configs);
        this.configs = configs;
        this.sprite.bulletType = configs.bulletType;
    }

    fireBullet() {
        if (this.configs.numberWayBullet > 0) {
            this.createBullet(0, -1);
        }

        if (this.configs.numberWayBullet > 1) {
            this.createBullet(1, -3);
            this.createBullet(-1, -3);
        }

        if (this.configs.numberWayBullet > 3) {
            this.createBullet(1, -6);
            this.createBullet(-1, -6);
        }
    }

    createBullet(x, y) {
        switch (this.configs.bulletType) {
            case '1':
                new BulletType1Player(this.sprite.position, new Phaser.Point(x, y),
                    {
                        bulletStrength: this.configs.bulletStrength
                    }
                );
                break;
            case '2':
                new BulletType2Player(this.sprite.position, new Phaser.Point(x, y),
                    {
                        bulletStrength: this.configs.bulletStrength
                    }
                );
                break;
            case '3':
               this.bulletType3 =  new BulletType3Player(this.sprite.position, new Phaser.Point(x, y),
                    {
                        bulletStrength: this.configs.bulletStrength
                    }
                );
                break;
            case '4':
                var enemy = null;
                var minDistance = 10000;

                for (var i = 0; i < Nakama.enemies.length; i++) {
                    var distance = Phaser.Math.distance(this.sprite.position.x, this.sprite.position.y, Nakama.enemies[i].sprite.position.x,
                        Nakama.enemies[i].sprite.position.y);
                    if (minDistance >= distance) {
                        enemy = Nakama.enemies[i];
                        minDistance = distance;
                    }
                }

                Nakama.missiles.push(new MissilePlayer(this.sprite.position, enemy,
                    {
                        bulletStrength: this.configs.bulletStrength
                    }
                ));
                break;
            default:
        }

    }
}