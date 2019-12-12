
var gfx = {};
var sfx = {};
var fonts = {};
var objects = {};

var dtTimer = 0;
let fixedDt = 1 / 60;
var sceneManager;

var mario;

// lobby
var bgClouds;
var trainX = -300;
var cloudX1 = 100;
var cloudX2 = 500;
var cloudX3 = 20;
var cloudX4 = 300;
var cloudX5 = 700;

var gBG;
var bgObjects;

function preload() {
    // all mario images should be the same width / height
    gfx.marioIdle = loadImage('gfx/marioIdle.png');
    gfx.marioWalk = loadImage('gfx/marioWalk.png');
    gfx.marioJump = loadImage('gfx/marioJump.png');

    gfx.heart = loadImage('gfx/heart.png');
    gfx.heartGrey = loadImage('gfx/heartGrey.png');

    gfx.level1bg = loadImage('gfx/level1bg.png');

    gfx.tiles = {
        brick1: loadImage('gfx/tiles/brick1.png'),
        brick2: loadImage('gfx/tiles/brick2.png'),
        ground: loadImage('gfx/tiles/ground.png'),
        questionBoxActive: loadImage('gfx/tiles/questionBoxActive.png'),
        questionBoxInactive: loadImage('gfx/tiles/questionBoxInactive.png')
    };

    gfx.pickups = {
        burger: loadImage('gfx/pickups/burger.png'),
        cake: loadImage('gfx/pickups/cake.png'),
        pancake: loadImage('gfx/pickups/pancake.png'),
        pizza: loadImage('gfx/pickups/pizza.png'),
        pokeball: loadImage('gfx/pickups/pokeball.png')
    };

    gfx.enemies = {
        diglettAppear: loadImage('gfx/enemies/diglettAppear.png'),
        diglettHide: loadImage('gfx/enemies/diglettHide.png'),
        gengar: loadImage('gfx/enemies/gengar.png')
    };

    fonts.retroComputer = loadFont('fonts/retro_computer_personal_use.ttf');

    // lobby
    objects.ferrisWheelRotate = loadImage('gfx/ferrisWheelRotate.png');
    objects.ferrisWheelBase = loadImage('gfx/ferrisWheelBase.png');
}

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent('sketch');

    // load scene manager
    sceneManager = new SceneManager();
    sceneManager.load();

    gameOver.load();
}

// call fixedUpdate 60 times per second (if fixedDt = 1/60 and frame takes less than 1/10 sec to render)
// using a small fixed delta time helps with collision and consistent jump height
function update() {
    dtTimer += min(1 / frameRate(), 1 / 10);
    while (dtTimer > 0) {
        dtTimer -= fixedDt;
        fixedUpdate(fixedDt);
    }
}

function fixedUpdate(dt) {
    sceneManager.update(dt);
    gameOver.update(dt);
}

function keyPressed() {
    if (sceneManager) {
        sceneManager.keyPressed();
    }
    gameOver.keyPressed();
}

function draw() {
    update();

    // camera on when draw is called
    // turn camera off and on to apply changes from this frame
    camera.off();
    // any background elements that should stay still while the camera moves would go here
    //background('#000');
    camera.on();
    
    sceneManager.drawWorld();

    camera.off();
    // draw ui elements here
    sceneManager.drawUI();
    gameOver.draw();
}
