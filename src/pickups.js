
// Pickups class - scene specific pickup manager
class Pickups {
    // called when class is instantiated
    // ex: new Pickups(level1)
    constructor(scene) {
        this.scene = scene;
        // array for pickups in this pickup manager
        this.container = [];
    }

    // add pickup to the Pickups object it's called from
    add(type, i, j) {
        // shorten reference to this Pickups object's scene's tileMap's tileSize property
        let tileSize = this.scene.tileMap.tileSize;
        // add an object describing the pickup to the container
        // type is used for the image, i = i'th tile left to right, j = j'th tile top down
        this.container.push({
            type: type,
            x: i * tileSize,
            y: j * tileSize,
            w: tileSize,
            h: tileSize
        });
    }

    // update pickups in container
    update(dt) {
        // loop through entries in container (i = index, v = value)
        for (let[i, v] of Object.entries(this.container)) {
            // if mario is overlapping pickup
            if (mario.x + mario.w / 2 > v.x && mario.x - mario.w / 2 < v.x + v.w
            && mario.y > v.y && mario.y - mario.h < v.y + v.h) {
                // pickup collected, do something depending on type here
                mario.addScore(300);
                // remove pickup from container
                delete this.container[i];
            }
        }
    }

    // draw pickups in container
    draw() {
        let tileSize = this.scene.tileMap.tileSize;
        for (let [i, v] of Object.entries(this.container)) {
            // get image using this pickup's type
            // ex. (v.type = 'pizza'): img = gfx.pickups['pizza'] (same as gfx.pickups.pizza)
            let img = gfx.pickups[v.type];
            // scale down if image larger than tile
            let imgScale = min(tileSize / img.width, tileSize / img.height);
            imgScale = min(imgScale, 1);
            // middle of tile minus scaled image size / 2 (to center image in tile)
            let imgX = round(v.x + v.w / 2 - img.width * imgScale / 2);
            let imgY = round(v.y + v.h / 2 - img.height * imgScale / 2);
            image(img, imgX, imgY, img.width * imgScale, img.height * imgScale);
        }
    }
}
