
var lobby = {};

lobby.load = function() {
    lobby.ground = height - 46;
    lobby.worldLeftBound = 0;
    lobby.worldRightBound = 1100;

    // player spawn points
    lobby.leftSpawn = { x: width / 2, y: lobby.ground, direction: 1 };
    lobby.rightSpawn = { x: lobby.worldRightBound - 2 * 58, y: lobby.ground, direction: -1 };
}

lobby.update = function(dt) {
    // ground collision
    mario.onGround = false;
    if (mario.y > lobby.ground) {
        mario.y = lobby.ground;
        mario.yv = 0;
        mario.onGround = true;
        mario.canJump = true;
        mario.canDoubleJump = true;
    }
    // left world bound collision
    let xLeft = lobby.worldLeftBound + round(mario.w / 2);
    if (mario.x < xLeft) {
        mario.x = xLeft;
        mario.xv = 0;
    }
    // go to next scene if fully past right side
    let xRight = lobby.worldRightBound + round(mario.w / 2);
    if (mario.x > xRight && !sceneManager.fading) {
        sceneManager.nextScene = level1;
        sceneManager.spawnPoint = level1.leftSpawn;
        sceneManager.loadNextScene();
    }

    //turn on light when mario walks under lamp
    if (mario.x >= 550 && mario.x <= 650){
        gBG.light = true;
    } else {
        gBG.light = false;
    }

    // center camera x on player (clamped to world bounds)
    let cameraXLeft = lobby.worldLeftBound + width / 2;
    let cameraXRight = lobby.worldRightBound - width / 2;
    camera.position.x = constrain(round(mario.x), cameraXLeft, cameraXRight);
    camera.position.y = height / 2;
}

lobby.draw = function() {
    //create gradient bg
    var color1 = color("#daf9fe");
    var color2 = color(225, 255, 255);
    setGradient(0, 0, lobby.worldRightBound, height, color1, color2, "Y");


    // loop clouds 
    {
        cloudX1 += 0.5;
        clouds(cloudX1, 100, 2)
        if (cloudX1 >= lobby.worldRightBound + 50) {
            cloudX1 = - 80;
        }
        cloudX2 += 0.2;
        clouds(cloudX2, 50, 1.5)
        if (cloudX2 >= lobby.worldRightBound + 50) {
            cloudX2 = - 20;
        }
        cloudX3 += 0.1;
        clouds(cloudX3, 50, 2.2)
        if (cloudX3 >= lobby.worldRightBound + 50) {
            cloudX3 = - 20;
        }
        cloudX4 += 0.1;
        clouds(cloudX4, 180, 2.8)
        if (cloudX4 >= lobby.worldRightBound + 50) {
            cloudX4 = - 20;
        }
        cloudX5 += 0.6;
        clouds(cloudX5, 120, 2)
        if (cloudX5 >= lobby.worldRightBound + 50) {
            cloudX5 = - 20;
        }
    }

    bgObjects.draw();

    // loop moving train
    {
        trainX += 1.5;
        if (trainX >= lobby.worldRightBound + 50) {
            trainX = - 200;
        }
    }

    gBG.show(trainX);
    gBG.interact();
    gBG.animate();
}
