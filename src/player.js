
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.image = gfx.marioIdle;
        this.w = this.image.width;
        this.h = this.image.height;
        
        // x velocity, y velocity
        this.xv = 0;
        this.yv = 0;
        
        // accelerate to 3200 pixels per second in one second
        this.gravity = 3200;

        this.speed = 350;
        this.jumpVelocity = -1100;
        this.direction = 1; // -1 or 1

        // (on ground / can double jump on this frame)
        this.onGround = false;
        this.canDoubleJump = false;

        // health
        this.maxLives = 2;
        this.lives = this.maxLives;
        this.invincibilityTimer = 1; // >= 1: invincibility over
        this.invincibilityLength = 1; // in seconds
        this.blinkSpeed = 6; // off and on 6 times per second

        // score
        this.lastScore = 0;
        this.score = 0;
        // animate score number
        this.scoreTimer = 0;
        this.scoreSpeed = 3; // animate in 1/3 sec

        // animation timer for walk
        this.walkTimer = 0;
        this.walkFPS = 6;
        this.walkFrames = 2;

        // for reference of player inside callback functions
        let self = this;
        // callbacks for tile collision
        this.tileCallbacks = {
            left: function(newX, newY, scene, i, j) {
                self.x = newX + self.w / 2;
                self.xv = 0;
            },
            up: function(newX, newY, scene, i, j) {
                self.y = newY + self.h;
                // cancel downward velocity but not upward (don't stick to tile when jumping against it)
                if (self.yv > 0) {
                    self.yv = 0;
                    self.onGround = true;
                    self.canDoubleJump = true;
                }
            },
            down: function(newX, newY, scene, i, j) {
                let currentTile = scene.tileMap.tiles[i][j];
                self.y = newY + self.h;
                // cancel upward veloctiy but not downward
                self.yv = max(mario.yv, 0);
                // if jumping into question block
                if (mario.yv <= 0 && currentTile.image === gfx.tiles.questionBoxActive) {
                    currentTile.image = gfx.tiles.questionBoxInactive;
                    let itemType = random(['burger', 'cake', 'pancake', 'pizza']);
                    scene.pickups.add(itemType, i, j - 1);
                }
            }
        };
        // right callback same as left
        this.tileCallbacks.right = this.tileCallbacks.left;
    }

    update(dt) {
        // key codes from http://keycode.info/
        // only move if alive
        if (mario.lives > 0) {
            if (keyIsDown(39) || keyIsDown(68)) { // ArrowRight, D
                this.xv = this.speed;
                this.direction = 1;
                this.walkTimer += this.walkFPS * dt;
            } else if (keyIsDown(37) || keyIsDown(65)) { // ArrowLeft, A
                this.xv = -this.speed;
                this.direction = -1;
                this.walkTimer += this.walkFPS * dt;
            } else {
                this.xv = 0;
                if (floor(this.walkTimer) !== 0) {
                    // finish animation if not on idle
                    this.walkTimer += this.walkFPS * dt;
                }
            }
        } else {
            this.xv = 0;
        }
        // loop timer
        this.walkTimer %= this.walkFrames;

        this.yv += this.gravity * dt;

        this.x += this.xv * dt;
        this.y += this.yv * dt;

        this.invincibilityTimer += dt / this.invincibilityLength;
        this.scoreTimer += this.scoreSpeed * dt;

        // set image based on animation timers
        switch (floor(this.walkTimer)) {
            default:
            case 0:
                this.image = gfx.marioIdle;
                break;
            case 1:
                this.image = gfx.marioWalk;
                break;
        }
        // if in air - moving up: jump image, moving down: idle image
        if (!this.onGround) {
            if (this.yv < 0) {
                this.image = gfx.marioJump;
            } else {
                this.image = gfx.marioIdle;
            }
        }
    }

    keyPressed() {
        if (mario.lives > 0) {
            if (keyCode === 32) { // Space
                if (this.onGround) {
                    this.jump();
                    this.onGround = false;
                } else if (this.canDoubleJump) {
                    this.jump();
                    this.canDoubleJump = false;
                }
            }
        }
    }

    jump() {
        this.yv = this.jumpVelocity;
    }

    tileMapCollide(tileMap) {
        let x = this.x - this.w / 2;
        let y = this.y - this.h;
        tileMap.collide(x, y, this.w, this.h, this.tileCallbacks);
    }

    damage() {
        this.lives = max(this.lives - 1, 0);
        this.invincibilityTimer = 0;
    }

    isInvincible() {
        return this.invincibilityTimer < 1;
    }

    addScore(x) {
        // animate starting from current shown score
        this.lastScore = this.getShownScore();
        this.score += x;
        this.scoreTimer = 0;
    }

    getShownScore() {
        let t = min(this.scoreTimer, 1);
        return round(lerp(this.lastScore, this.score, t));
    }

    draw() {
        // don't draw if blink
        if (this.invincibilityTimer < 1) {
            // seconds since damaged
            let t = this.invincibilityTimer * this.invincibilityLength;
            // scale up to blink speed
            t *= this.blinkSpeed;
            // if on first half of second, exit draw function
            if (t % 1 < 0.5) {
                return;
            }
        }
        push();
        translate(round(this.x), round(this.y));
        scale(this.direction, 1);
        // draw with center of feet at origin (shifted to this.x, this.y)
        image(this.image, round(-this.w / 2), -this.h);
        pop();
    }
}
