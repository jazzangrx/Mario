
var gameOver = {};

gameOver.load = function() {
    gameOver.t = 0;
    gameOver.y = 510;
}

gameOver.resetGame = function() {
    sceneManager.currentScene = level1;
    sceneManager.load();
}

gameOver.update = function(dt) {
    if (mario.lives <= 0 ) {
        gameOver.t = min(gameOver.t + dt, 1);
    }
    let y1 = 510;
    let y2 = 220;
    // ease in utils.js
    gameOver.y = lerp(y1, y2, ease.inOutCubic(gameOver.t));
}

gameOver.keyPressed = function() {
    if (gameOver.t >= 1 && keyCode === 32) { // Space
        gameOver.resetGame();
        gameOver.load();
    }
}

gameOver.draw = function() {
    if (gameOver.t > 0) {
        // save drawing state before modifying it (fill, textAlign, etc)
        push();
    
        // overlay alpha
        let a = lerp(0, 255 * 0.6, gameOver.t);
        fill(0, a);
        rect(0, 0, width, height);

        // text
        fill('#ECF3FE');
        textFont(fonts.retroComputer);
        textSize(40);
        textAlign(CENTER, TOP);
        text('GAMEOVER', width / 2, gameOver.y);
        textSize(20);
        text("PRESS 'SPACE' TO RESTART", width / 2, gameOver.y + 68);
    
        // reset drawing state to what it was before
        pop();
    }
}
