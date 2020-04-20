class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointvalue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // add to existing scene/display/update
        //this.points = pointValue;
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update() {
        //spaceship movement
        this.x -= 3;

        // wraparound from left to right
        if (this.x <= 0-this.width) {
            this.x = game.config.width;
        }
    }

    reset(){
        this.x = game.config.width;
    }
}