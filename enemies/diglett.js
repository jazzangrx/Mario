
class Diglett {
    constructor(scene, i, j) {
        this.scene = scene;
        let tileMap = scene.tileMap;
        // x, y at bottom center of tile
        this.x = (i + 0.5) * tileMap.tileSize;
        this.y = (j + 1) * tileMap.tileSize;
        // collider width / height
        this.w = tileMap.tileSize;
        this.h = tileMap.tileSize;

        // idle animation timer
        this.idleFrames = 2;
        // set to random point in animation
        this.idleTimer = random(this.idleFrames);
        this.idleFPS = 1;
    }

    update(i, dt) {
        this.idleTimer += this.idleFPS * dt;
        this.idleTimer %= this.idleFrames;

        // if player alive
        if (mario.lives > 0) {
            if (mario.x + mario.w / 2 > this.x - this.w / 2
            && mario.x - mario.w / 2 < this.x + this.w / 2
            && mario.y > this.y - this.h && mario.y - mario.h < this.y) {
                if (mario.yv > 0) {
                    // falling onto enemy
                    mario.addScore(100);
                    delete this.scene.enemies.container[i];
                    this.scene.enemies.doPlayerBounce = true;
                } else if (!mario.isInvincible()) {
                    mario.damage();
                    this.scene.enemies.doPlayerBounce = true;
                }
            }
        }
    }

    draw() {
        let img;
        let anchorX;
        let anchorY;
        switch (floor(this.idleTimer)) {
            default:
            case 0:
                img = gfx.enemies.diglettAppear;
                // coords on image that should be at bottom center
                anchorX = 48;
                anchorY = 63;
                image(img, round(this.x - anchorX), round(this.y - anchorY));
                break;
            case 1:
                img = gfx.enemies.diglettHide;
                anchorX = 48;
                anchorY = 42;
                image(img, round(this.x - anchorX), round(this.y - anchorY));
                break;
        }
    }
}
