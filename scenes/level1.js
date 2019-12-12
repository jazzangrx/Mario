
var level1 = {};

level1.load = function() {
    let tileMap = new TileMap(level1, 52, 16);
    level1.tileMap = tileMap;

    // add ground tiles
    // fill from (0, 15) to (23, 15)
    tileMap.fillTiles(0, 15, 23, 15, 'ground');
    tileMap.fillTiles(28, 15, 51, 15, 'ground');

    tileMap.setTile(3, 12, 'brick2');
    tileMap.setTile(4, 12, 'brick1');

    tileMap.setTile(5, 10, 'questionBoxActive');
    tileMap.setTile(6, 10, 'brick2');
    tileMap.fillTiles(7, 10, 8, 10, 'brick1');

    tileMap.setTile(3, 6, 'questionBoxActive');
    tileMap.fillTiles(4, 6, 7, 6, 'brick1');

    tileMap.fillTiles(11, 7, 14, 7, 'brick1');
    //tileMap.setTile(12, 6, 'brick2');
    tileMap.setTile(14, 6, 'brick2');

    tileMap.fillTiles(15, 13, 16, 14, 'brick2');

    tileMap.setTile(18, 7, 'questionBoxActive');
    tileMap.setTile(19, 7, 'brick1');

    tileMap.fillTiles(22, 13, 23, 14, 'brick2');
    tileMap.setTile(23, 12, 'brick2');

    tileMap.fillTiles(28, 13, 29, 14, 'brick2');
    tileMap.setTile(28, 12, 'brick2');

    tileMap.fillTiles(30, 8, 34, 8, 'brick1');

    tileMap.setTile(31, 3, 'questionBoxActive');
    tileMap.fillTiles(32, 3, 33, 3, 'brick1');
    tileMap.fillTiles(34, 3, 35, 3, 'questionBoxActive');


    let pickups = new Pickups(level1);
    level1.pickups = pickups;

    pickups.add('pokeball', 3, 11);
    pickups.add('pokeball', 6, 5);
    //pickups.add('pokeball', 12, 5);
    pickups.add('pokeball', 14, 5);
    pickups.add('pokeball', 22, 12);
    pickups.add('pokeball', 30, 7);
    pickups.add('pokeball', 31, 7);


    let enemies = new Enemies(level1);
    level1.enemies = enemies;

    enemies.add('diglett', 13, 14);
    enemies.add('diglett', 14, 14);
    enemies.add('diglett', 13, 6);
    enemies.add('diglett', 21, 14);
    enemies.add('diglett', 30, 14);
    enemies.add('diglett', 31, 14);
    enemies.add('diglett', 37, 14);

    enemies.add('gengar', 18, 14);

    
    // player spawn point
    level1.leftSpawn = { x: 2 * tileMap.tileSize, y: 15 * tileMap.tileSize, direction: 1 };
}

level1.update = function(dt) {
    let tileMap = level1.tileMap;

    if (mario.lives > 0) {
        mario.tileMapCollide(tileMap);
    }

    // constrain player to right world bound
    if (mario.x > tileMap.width * tileMap.tileSize - mario.w / 2) {
        mario.x = tileMap.width * tileMap.tileSize - mario.w / 2;
        mario.xv = 0;
    }

    // keep in air if walking off sides
    if (mario.x - mario.w / 2 < 0 || mario.x + mario.w / 2 > tileMap.width * tileMap.tileSize) {
        // ground height assumed from spawn position
        mario.y = min(mario.y, level1.leftSpawn.y);
    }

    // reset to spawn when fall
    if (mario.y > tileMap.height * tileMap.tileSize + mario.h) {
        // if this will kill, bounce before falling off screen
        let doJump = mario.lives === 1;
        mario.damage();
        if (mario.lives > 0) {
            mario.x = level1.leftSpawn.x;
            mario.y = level1.leftSpawn.y;
            mario.direction = level1.leftSpawn.direction;
            mario.xv = 0;
            mario.yv = 0;
        } else if (doJump) {
            mario.jump();
        }
    }

    // go back to lobby if fully past left side
    let xLeft = 0 - round(mario.w / 2);
    if (mario.x < xLeft && !sceneManager.fading) {
        sceneManager.nextScene = lobby;
        sceneManager.spawnPoint = lobby.rightSpawn;
        sceneManager.loadNextScene();
    }

    level1.pickups.update(dt);
    level1.enemies.update(dt);

    // center camera on player
    camera.position.x = round(mario.x);
    camera.position.y = round(mario.y) - round(mario.h / 2);
    // constrain to world bounds
    camera.position.x = constrain(camera.position.x, width / 2, tileMap.width * tileMap.tileSize - width / 2);
    camera.position.y = constrain(camera.position.y, height / 2, tileMap.height * tileMap.tileSize - height / 2);
}

level1.draw = function() {
    image(gfx.level1bg, 0, 0);
    level1.pickups.draw();
    level1.tileMap.draw();
    level1.enemies.draw();
}
