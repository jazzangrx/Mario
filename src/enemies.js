
class Enemies {
    constructor(scene) {
        this.scene = scene;
        this.container = [];
        // use to set player velocity after bouncing on all enemies
        this.doPlayerBounce = false;
    }

    add(type, i, j) {
        switch (type) {
            case 'diglett':
                this.container.push(new Diglett(this.scene, i, j));
                break;
            case 'gengar':
                this.container.push(new Gengar(this.scene, i, j));
                break;
        }
    }

    update(dt) {
        this.doPlayerBounce = false;
        for (let [i, v] of Object.entries(this.container)) {
            v.update(i, dt);
        }
        if (this.doPlayerBounce) {
            mario.jump();
            mario.canDoubleJump = true;
        }
    }

    draw() {
        for (let [i, v] of Object.entries(this.container)) {
            v.draw();
        }
    }
}
