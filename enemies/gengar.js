
class Gengar {
    constructor(scene, i, j) {
        this.scene = scene;
        let tileMap = scene.tileMap;
        // x, y at bottom center of tile
        this.x = (i + 0.5) * tileMap.tileSize;
        this.y = (j + 1) * tileMap.tileSize;
        // get collider width / from image
        this.image = gfx.enemies.gengar;
        this.w = this.image.width;
        this.h = this.image.height;

        this.speed = 400;
        this.direction = 1;
        // will change direction in update if set to true
        this.bounce = false;

        // for reference of enemy inside callback functions
        let self = this;
        // callbacks for tile collision
        this.tileCallbacks = {
            left: function(newX, newY, scene, i, j) {
                self.x = newX + self.w / 2;
                self.bounce = true;
            },
            up: function(newX, newY, scene, i, j) {
                self.y = newY + self.h;
            }
        };
        // right callback same as left, down same as up
        this.tileCallbacks.right = this.tileCallbacks.left;
        this.tileCallbacks.down = this.tileCallbacks.up;
    }

    update(i, dt) {
        this.x += this.speed * this.direction * dt;

        let x = this.x - this.w / 2;
        let y = this.y - this.h;
        this.scene.tileMap.collide(x, y, this.w, this.h, this.tileCallbacks);
        if (this.bounce) {
            this.direction = -this.direction;
            this.bounce = false;
        }

        // if player alive
        if (mario.lives > 0) {
            // if player touching and not invincible
            if (mario.x + mario.w / 2 > this.x - this.w / 2
            && mario.x - mario.w / 2 < this.x + this.w / 2
            && mario.y > this.y - this.h && mario.y - mario.h < this.y
            && !mario.isInvincible()) {
                mario.damage();
                this.scene.enemies.doPlayerBounce = true;
            }
        }
    }

    draw() {
        push();
        translate(round(this.x), round(this.y));
        scale(this.direction, 1);
        // draw with center of feet at origin (shifted to this.x, this.y)
        image(this.image, round(-this.w / 2), -this.h);
        pop();
    }
}
