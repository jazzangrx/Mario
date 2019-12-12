//trying to organise my codes for moving objects in the lobby background

//background class holding multiple object with different moving speeds

class Objects {
    constructor() {
        this.angle = 0.0;
        this.rotateangle = 0.1;


    }

    draw() {

        // ferris wheel
        {
            push();
            this.angle += 0.003;
            translate(475, 120);
            rotate(this.angle);
            imageMode(CENTER);
            image(objects.ferrisWheelRotate, 0, 0, 100, 100);
            pop();
        }



    }
}
