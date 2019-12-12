
class TileMap {
    constructor(scene, width, height) {
        this.scene = scene;
        // width and height in tiles
        this.width = width;
        this.height = height;

        this.tileSize = 58;

        this.tiles = {};
    }

    setTile(i, j, type) {
        if (this.tiles[i] === undefined) {
            this.tiles[i] = {};
        }
        let tile = {};
        // example: type = 'brick1' -> tile.image = gfx.tiles.brick1
        tile.image = gfx.tiles[type];
        this.tiles[i][j] = tile;
    }

    fillTiles(i1, j1, i2, j2, type) {
        for (let i = i1; i <= i2; i++) {
            for (let j = j1; j <= j2; j++) {
                this.setTile(i, j, type);
            }
        }
    }

    // call with bounding box of object to be moved
    // and callback functions for direction object is moved in
    //
    // callbacks expected to be object containing 'left', 'right', 'up', and 'down' functions
    // callback function arguments: (newX, newY, scene, i, j)
    // (used by player and some enemies)
    collide(x, y, w, h, callbacks) {
        // loop through every tile that object could be overlapping with
        for (let i = floor(x / this.tileSize) - 1; i <= floor((x + w) / this.tileSize) + 1; i++) {
            for (let j = floor(y / this.tileSize) - 1; j <= floor((y + h) / this.tileSize) + 1; j++) {
                // check if current tile in loop exists
                if (this.tiles[i] !== undefined && this.tiles[i][j] !== undefined) {
                    // tile bounding box
                    let v = this.tiles[i][j];
                    let vx = i * this.tileSize;
                    let vy = j * this.tileSize;
                    let vw = this.tileSize;
                    let vh = this.tileSize;
                    // check if object is overlapping tile
                    if (x + w > vx && x < vx + vw && y + h > vy && y < vy + vh) {
                        // collision resolutions
                        let validResolutions = [];
                        // if tile to the left is empty and object is closer to left side
                        if (this.tiles[i - 1] === undefined || this.tiles[i - 1][j] === undefined) {
                            if (x + w / 2 <= vx + vw / 2) {
                                // distance, new position, and callback function
                                let newX = vx - w;
                                validResolutions.push({
                                    d: x - newX,
                                    newX: newX, newY: y,
                                    callback: callbacks.left
                                });
                            }
                        }
                        // right
                        if (this.tiles[i + 1] === undefined || this.tiles[i + 1][j] === undefined) {
                            if (x + w / 2 >= vx + vw / 2) {
                                let newX = vx + vw;
                                validResolutions.push({
                                    d: newX - x,
                                    newX: newX, newY: y,
                                    callback: callbacks.right
                                });
                            }
                        }
                        // up
                        if (this.tiles[i][j - 1] === undefined) {
                            if (y + h / 2 <= vy + vh / 2) {
                                let newY = vy - h;
                                validResolutions.push({
                                    d: y - newY,
                                    newX: x, newY: newY,
                                    callback: callbacks.up
                                });
                            }
                        }
                        // down
                        if (this.tiles[i][j + 1] === undefined) {
                            if (y + h / 2 >= vy + vh / 2) {
                                let newY = vy + vh;
                                validResolutions.push({
                                    d: newY - y,
                                    newX: x, newY: newY,
                                    callback: callbacks.down
                                });
                            }
                        }
                        if (validResolutions.length > 0) {
                            validResolutions.sort(function (a, b) {
                                return a.d - b.d;
                            });
                            // callback on the collision resolution that moves object the least distance
                            let res = validResolutions[0];
                            res.callback(res.newX, res.newY, this.scene, i, j);
                        }
                    }
                }
            }
        }
    }

    draw() {
        for (let i in this.tiles) {
            for (let j in this.tiles[i]) {
                let tile = this.tiles[i][j];
                image(tile.image, int(i) * this.tileSize, int(j) * this.tileSize, this.tileSize, this.tileSize);
            }
        }
    }
}
