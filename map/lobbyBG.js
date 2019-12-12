//**REFERENCE**//
//some of the graphical elements of the Seattle's background is inspired by https://society6.com/product/seattle-morning623396_tapestry?sku=s6-7403398p42a55v412 

//**CODE**//
class seattleBG {
    constructor(x, y, scale) {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.light = false;
    }

    show(trx) {

        // define common colors

        noStroke();
        let black = color(40, 40, 40); //outline 
        let darkblue = color(20, 35, 54); //shadow of ledge
        let darkbrown = color(248, 208, 192); //color of ledge
        let blue = color(30, 131, 171); //color of bridge
        let blueshadow = color(87, 155, 180); //color of bridge shadow
        let white = color(253, 255, 255);
        let bluebuilding = color(135, 181, 206); //color of 1st layer of buildings
        let bluebshadow = color(100, 160, 190);
        let bluewindow = color(147, 204, 225);
        let bluereflection = color(201, 229, 225);
        let bluelake = color('rgba(24, 109, 150,0.7)');
        let lakereflect = color('rgba(41,116,150,0.5)');
        let brown = color(77, 67, 75);
        let brownshadow = color(43, 39, 54);
        let metalgreen = color(110, 128, 111); //railing of ledge
        let metalshadow = color(154, 160, 111);
        let bluebgbuilding = color(173, 225, 246);
        let lightblue = color(200, 238, 252);
        let midblue = color(147, 206, 225);

        // 3rd level buildings 
        {
            // 3rd level marina bay sands
            {
                //ship shape top 
                {
                    fill(bluebgbuilding);
                    rect(this.x + 220 * this.scale, this.y - 26 * this.scale, 7 * this.scale, 3 * this.scale);
                    rect(this.x + 190 * this.scale, this.y - 26 * this.scale, 7 * this.scale, 3 * this.scale);
                    rect(this.x + 186 * this.scale, this.y - 24 * this.scale, 4 * this.scale, 1 * this.scale);
                    rect(this.x + 216 * this.scale, this.y - 24 * this.scale, 13 * this.scale, 1 * this.scale);
                    rect(this.x + 227 * this.scale, this.y - 25 * this.scale, 1 * this.scale, 1 * this.scale);
                    rect(this.x + 218 * this.scale, this.y - 25 * this.scale, 1 * this.scale, 1 * this.scale);
                    rect(this.x + 219 * this.scale, this.y - 26 * this.scale, 1 * this.scale, 1 * this.scale);
                    rect(this.x + 188 * this.scale, this.y - 25 * this.scale, 1 * this.scale, 1 * this.scale);
                    rect(this.x + 189 * this.scale, this.y - 26 * this.scale, 1 * this.scale, 1 * this.scale);
                    rect(this.x + 229 * this.scale, this.y - 25 * this.scale, 4 * this.scale, 2 * this.scale)
                    rect(this.x + 181 * this.scale, this.y - 23 * this.scale, 55 * this.scale, 1 * this.scale);
                    rect(this.x + 181 * this.scale, this.y - 21 * this.scale, 57 * this.scale, 2 * this.scale);
                    rect(this.x + 179 * this.scale, this.y - 22 * this.scale, 58 * this.scale, 2 * this.scale);

                    fill(lightblue);
                    rect(this.x + 179 * this.scale, this.y - 22 * this.scale, 20 * this.scale, 1 * this.scale);
                    rect(this.x + 179 * this.scale, this.y - 21 * this.scale, 18 * this.scale, 1 * this.scale);

                    fill(bluebgbuilding);
                    rect(this.x + 182 * this.scale, this.y - 20 * this.scale, 54 * this.scale, 1 * this.scale);
                    rect(this.x + 182 * this.scale, this.y - 19 * this.scale, 54 * this.scale, 2 * this.scale);

                    fill(bluewindow);
                    rect(this.x + 183 * this.scale, this.y - 17 * this.scale, 51 * this.scale, 1 * this.scale);
                    rect(this.x + 216 * this.scale, this.y - 18 * this.scale, 20 * this.scale, 1 * this.scale);
                    rect(this.x + 229 * this.scale, this.y - 19 * this.scale, 7 * this.scale, 1 * this.scale);
                    rect(this.x + 231 * this.scale, this.y - 21 * this.scale, 7 * this.scale, 2 * this.scale);
                    rect(this.x + 230 * this.scale, this.y - 22 * this.scale, 7 * this.scale, 1 * this.scale);
                    rect(this.x + 230 * this.scale, this.y - 23 * this.scale, 6 * this.scale, 1 * this.scale);
                    rect(this.x + 231 * this.scale, this.y - 25 * this.scale, 2 * this.scale, 2 * this.scale);
                    rect(this.x + 196 * this.scale, this.y - 25 * this.scale, 2 * this.scale, 2 * this.scale);
                    rect(this.x + 196 * this.scale, this.y - 26 * this.scale, 1 * this.scale, 1 * this.scale);
                    rect(this.x + 226 * this.scale, this.y - 26 * this.scale, 1 * this.scale, 1 * this.scale);
                    rect(this.x + 226 * this.scale, this.y - 25 * this.scale, 2 * this.scale, 1 * this.scale);
                }
                //pillars
                push();
                translate(-5, 0); {
                    fill(lightblue);
                    rect(this.x + 190 * this.scale, this.y - 16 * this.scale, 9 * this.scale, 10 * this.scale);
                    rect(this.x + 190 * this.scale, this.y - 12 * this.scale, 9.5 * this.scale, 30 * this.scale);
                    rect(this.x + 190 * this.scale, this.y - 8 * this.scale, 10.5 * this.scale, 30 * this.scale);

                    fill(bluebgbuilding);
                    rect(this.x + 189.5 * this.scale, this.y - 10 * this.scale, 1 * this.scale, 4 * this.scale);
                    rect(this.x + 197 * this.scale, this.y - 16 * this.scale, 2 * this.scale, 4 * this.scale);
                    rect(this.x + 198 * this.scale, this.y - 12 * this.scale, 1.5 * this.scale, 4 * this.scale);


                    fill(bluewindow); //shadow
                    rect(this.x + 189 * this.scale, this.y - 6 * this.scale, 1 * this.scale, 4 * this.scale);
                    rect(this.x + 188.5 * this.scale, this.y - 2 * this.scale, 2 * this.scale, 6 * this.scale);
                    rect(this.x + 188 * this.scale, this.y + 4 * this.scale, 2 * this.scale, 8 * this.scale);
                    rect(this.x + 187.5 * this.scale, this.y + 12 * this.scale, 3 * this.scale, 8 * this.scale);

                }
                pop();
                push();
                for (var i = 0; i < 2; i++) {
                    translate(45, 0); {
                        fill(lightblue);
                        rect(this.x + 190 * this.scale, this.y - 16 * this.scale, 9 * this.scale, 10 * this.scale);
                        rect(this.x + 190 * this.scale, this.y - 12 * this.scale, 9.5 * this.scale, 30 * this.scale);
                        rect(this.x + 190 * this.scale, this.y - 8 * this.scale, 10.5 * this.scale, 30 * this.scale);

                        fill(bluebgbuilding);
                        rect(this.x + 189.5 * this.scale, this.y - 10 * this.scale, 1 * this.scale, 4 * this.scale);
                        rect(this.x + 197 * this.scale, this.y - 16 * this.scale, 2 * this.scale, 4 * this.scale);
                        rect(this.x + 198 * this.scale, this.y - 12 * this.scale, 1.5 * this.scale, 4 * this.scale);


                        fill(bluewindow); //shadow
                        rect(this.x + 189 * this.scale, this.y - 6 * this.scale, 1 * this.scale, 4 * this.scale);
                        rect(this.x + 188.5 * this.scale, this.y - 2 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 188 * this.scale, this.y + 4 * this.scale, 2 * this.scale, 8 * this.scale);
                        rect(this.x + 187.5 * this.scale, this.y + 12 * this.scale, 3 * this.scale, 8 * this.scale);

                    }
                }
                pop();

            }

            // 3rd level building D
            {
                {
                    fill(bluebgbuilding);
                    rect(this.x + 190 * this.scale, this.y - 4 * this.scale, 28 * this.scale, 53 * this.scale);
                    rect(this.x + 190 * this.scale, this.y - 6 * this.scale, 28 * this.scale, 1 * this.scale);
                    rect(this.x + 192 * this.scale, this.y - 5 * this.scale, 2 * this.scale, 1 * this.scale);

                    fill(lightblue);
                    rect(this.x + 193 * this.scale, this.y - 0 * this.scale, 15 * this.scale, 8 * this.scale);
                    rect(this.x + 193 * this.scale, this.y + 10 * this.scale, 15 * this.scale, 2 * this.scale);
                    push();
                    for (var i = 0; i < 10; i++) {
                        translate(0, 10);
                        rect(this.x + 193 * this.scale, this.y + 10 * this.scale, 15 * this.scale, 2 * this.scale);

                    }
                    pop();

                    fill("#9fd8ef");
                    rect(this.x + 211 * this.scale, this.y - 4 * this.scale, 7 * this.scale, 50 * this.scale);
                    rect(this.x + 211 * this.scale, this.y - 6 * this.scale, 7 * this.scale, 1 * this.scale);
                    rect(this.x + 214 * this.scale, this.y - 5 * this.scale, 2 * this.scale, 1 * this.scale);


                }

            }

            // 3rd level building C
            {
                fill(midblue);
                rect(this.x + 214 * this.scale, this.y + 5 * this.scale, 32 * this.scale, 45 * this.scale);
                rect(this.x + 218 * this.scale, this.y + 4 * this.scale, 1 * this.scale, 1 * this.scale);
                rect(this.x + 219 * this.scale, this.y + 3 * this.scale, 15 * this.scale, 1 * this.scale);
                rect(this.x + 234 * this.scale, this.y + 1 * this.scale, 6 * this.scale, 4 * this.scale);
                rect(this.x + 220 * this.scale, this.y + 4 * this.scale, 1 * this.scale, 1 * this.scale);
                rect(this.x + 222 * this.scale, this.y + 4 * this.scale, 1 * this.scale, 1 * this.scale);
                push();
                for (var i = 0; i < 8; i++) {
                    translate(5, 0);
                    rect(this.x + 222 * this.scale, this.y + 4 * this.scale, 1 * this.scale, 1 * this.scale);
                }
                pop();


                fill("#76bbd7");
                rect(this.x + 240 * this.scale, this.y + 5 * this.scale, 6 * this.scale, 45 * this.scale);
                rect(this.x + 240 * this.scale, this.y + 1 * this.scale, 2 * this.scale, 4 * this.scale);

                fill(lightblue);
                rect(this.x + 218 * this.scale, this.y + 8 * this.scale, 22 * this.scale, 0.8 * this.scale);

                fill("#84c5e0");
                rect(this.x + 240 * this.scale, this.y + 8 * this.scale, 4 * this.scale, 0.8 * this.scale);

                push();
                for (let i = 0; i < 12; i++) {
                    translate(0, 10);
                    fill(bluewindow);
                    fill(lightblue);
                    rect(this.x + 218 * this.scale, this.y + 8 * this.scale, 22 * this.scale, 0.8 * this.scale);

                    fill("#84c5e0");
                    rect(this.x + 240 * this.scale, this.y + 8 * this.scale, 4 * this.scale, 0.8 * this.scale);
                }
                pop();
            }

            // 3rd level spaceneedle
            {
                fill(bluebgbuilding);
                rect(this.x + 32.5 * this.scale, this.y - 2 * this.scale, 7 * this.scale, 7 * this.scale);
                rect(this.x + 33 * this.scale, this.y - 8 * this.scale, 6 * this.scale, 7 * this.scale);
                rect(this.x + 34 * this.scale, this.y - 14 * this.scale, 4 * this.scale, 7 * this.scale);
                rect(this.x + 35 * this.scale, this.y - 20 * this.scale, 2 * this.scale, 7 * this.scale);
                rect(this.x + 34 * this.scale, this.y - 21 * this.scale, 4 * this.scale, 1 * this.scale);
                rect(this.x + 33 * this.scale, this.y - 22 * this.scale, 6 * this.scale, 1 * this.scale);
                rect(this.x + 32 * this.scale, this.y - 24.5 * this.scale, 8 * this.scale, 1 * this.scale);
                rect(this.x + 34 * this.scale, this.y - 25.5 * this.scale, 4 * this.scale, 1 * this.scale);
                rect(this.x + 35 * this.scale, this.y - 27.5 * this.scale, 2 * this.scale, 2 * this.scale);

                fill(lightblue);
                rect(this.x + 31 * this.scale, this.y - 23.5 * this.scale, 10 * this.scale, 1.5 * this.scale);

                fill(bluewindow); //shadow
                rect(this.x + 37 * this.scale, this.y - 24.5 * this.scale, 3 * this.scale, 1 * this.scale);
                rect(this.x + 38 * this.scale, this.y - 23.5 * this.scale, 3 * this.scale, 1.5 * this.scale);
                rect(this.x + 37 * this.scale, this.y - 22 * this.scale, 2 * this.scale, 1 * this.scale);

            }

            // 3rd level building left to spaceneedle
            {
                //roof
                {
                    fill(bluebgbuilding);
                    rect(this.x + 21 * this.scale, this.y - 15 * this.scale, 3 * this.scale, 3 * this.scale);
                    rect(this.x + 14 * this.scale, this.y - 14 * this.scale, 7 * this.scale, 1 * this.scale);
                    rect(this.x + 13 * this.scale, this.y - 13 * this.scale, 1 * this.scale, 1 * this.scale);
                    rect(this.x + 15 * this.scale, this.y - 13 * this.scale, 1 * this.scale, 1 * this.scale);
                    rect(this.x + 17 * this.scale, this.y - 13 * this.scale, 1 * this.scale, 1 * this.scale);
                    rect(this.x + 19 * this.scale, this.y - 13 * this.scale, 1 * this.scale, 1 * this.scale);

                    fill(bluewindow);
                    rect(this.x + 24 * this.scale, this.y - 15 * this.scale, 2 * this.scale, 3 * this.scale);
                }

                //rows of windows
                {
                    fill(bluebgbuilding);
                    rect(this.x + 10 * this.scale, this.y - 12 * this.scale, 15 * this.scale, 2 * this.scale);
                    rect(this.x + 11 * this.scale, this.y - 10 * this.scale, 1 * this.scale, 2 * this.scale);
                    rect(this.x + 23 * this.scale, this.y - 10 * this.scale, 1 * this.scale, 2 * this.scale);


                    fill(bluewindow);
                    rect(this.x + 12 * this.scale, this.y - 10 * this.scale, 1 * this.scale, 2 * this.scale);
                    rect(this.x + 13 * this.scale, this.y - 10 * this.scale, 8 * this.scale, 2 * this.scale);
                    rect(this.x + 21 * this.scale, this.y - 10 * this.scale, 2 * this.scale, 2 * this.scale);
                    rect(this.x + 24 * this.scale, this.y - 10 * this.scale, 4 * this.scale, 2 * this.scale);
                    rect(this.x + 25 * this.scale, this.y - 12 * this.scale, 4 * this.scale, 2 * this.scale);

                    fill(lightblue);
                    rect(this.x + 13 * this.scale, this.y - 9.5 * this.scale, 2 * this.scale, 1.5 * this.scale);
                    rect(this.x + 16 * this.scale, this.y - 9.5 * this.scale, 2 * this.scale, 1.5 * this.scale);
                    rect(this.x + 19 * this.scale, this.y - 9.5 * this.scale, 2 * this.scale, 1.5 * this.scale);

                }
                push();
                for (let i = 0; i < 4; i++) {
                    translate(0, 12); {
                        fill(bluebgbuilding);
                        rect(this.x + 10 * this.scale, this.y - 12 * this.scale, 15 * this.scale, 2 * this.scale);
                        rect(this.x + 11 * this.scale, this.y - 10 * this.scale, 1 * this.scale, 2 * this.scale);
                        rect(this.x + 23 * this.scale, this.y - 10 * this.scale, 1 * this.scale, 2 * this.scale);


                        fill(bluewindow);
                        rect(this.x + 12 * this.scale, this.y - 10 * this.scale, 1 * this.scale, 2 * this.scale);
                        rect(this.x + 13 * this.scale, this.y - 10 * this.scale, 8 * this.scale, 2 * this.scale);
                        rect(this.x + 21 * this.scale, this.y - 10 * this.scale, 2 * this.scale, 2 * this.scale);
                        rect(this.x + 24 * this.scale, this.y - 10 * this.scale, 4 * this.scale, 2 * this.scale);
                        rect(this.x + 25 * this.scale, this.y - 12 * this.scale, 4 * this.scale, 2 * this.scale);

                        fill(lightblue);
                        rect(this.x + 13 * this.scale, this.y - 9.5 * this.scale, 2 * this.scale, 1.5 * this.scale);
                        rect(this.x + 16 * this.scale, this.y - 9.5 * this.scale, 2 * this.scale, 1.5 * this.scale);
                        rect(this.x + 19 * this.scale, this.y - 9.5 * this.scale, 2 * this.scale, 1.5 * this.scale);

                    }
                }
                pop();

            }
        }

        // 2nd level buildings 
        {
            // 2nd level building A
            {
                fill(midblue);
                rect(this.x + 75 * this.scale, this.y + 25 * this.scale, 20 * this.scale, 25 * this.scale);
                rect(this.x + 77 * this.scale, this.y + 19 * this.scale, 9 * this.scale, 5 * this.scale);
                rect(this.x + 77 * this.scale, this.y + 24 * this.scale, 1 * this.scale, 5 * this.scale);
                rect(this.x + 85 * this.scale, this.y + 21 * this.scale, 1 * this.scale, 5 * this.scale);

                fill(bluebuilding);
                rect(this.x + 86 * this.scale, this.y + 19 * this.scale, 1 * this.scale, 6 * this.scale);

                fill(lightblue);
                rect(this.x + 78 * this.scale, this.y + 28 * this.scale, 2 * this.scale, 4 * this.scale);
                rect(this.x + 82 * this.scale, this.y + 28 * this.scale, 2 * this.scale, 4 * this.scale);
                rect(this.x + 86 * this.scale, this.y + 28 * this.scale, 2 * this.scale, 4 * this.scale);
                rect(this.x + 90 * this.scale, this.y + 28 * this.scale, 2 * this.scale, 4 * this.scale);
                rect(this.x + 78 * this.scale, this.y + 34 * this.scale, 2 * this.scale, 10 * this.scale);
                rect(this.x + 82 * this.scale, this.y + 34 * this.scale, 2 * this.scale, 10 * this.scale);
                rect(this.x + 86 * this.scale, this.y + 34 * this.scale, 2 * this.scale, 10 * this.scale);
                rect(this.x + 90 * this.scale, this.y + 34 * this.scale, 2 * this.scale, 10 * this.scale);
            }

            // 2nd level building B 
            {
                fill(bluebuilding);
                rect(this.x + 246 * this.scale, this.y - 10 * this.scale, 20 * this.scale, 60 * this.scale);

                fill(blueshadow);
                rect(this.x + 264 * this.scale, this.y - 10 * this.scale, 2 * this.scale, 60 * this.scale);

                fill(bluewindow);
                rect(this.x + 248 * this.scale, this.y - 7 * this.scale, 14 * this.scale, 0.8 * this.scale);

                push();
                for (let i = 0; i < 16; i++) {
                    translate(0, 10);
                    fill(bluewindow);
                    rect(this.x + 248 * this.scale, this.y - 7 * this.scale, 14 * this.scale, 0.8 * this.scale);
                }
                pop();
            }
        }

        // 1st level buildings 
        {
            // 1st level building below spaceneedle
            {
                {
                    fill(bluebuilding);
                    rect(this.x + 3 * this.scale, this.y + 5 * this.scale, 45 * this.scale, 44 * this.scale);

                    fill(bluebshadow);
                    rect(this.x + 45 * this.scale, this.y + 5 * this.scale, 10 * this.scale, 44 * this.scale);
                }
                //row of windows
                {
                    fill(bluebshadow);
                    rect(this.x + 3 * this.scale, this.y + 10 * this.scale, 28 * this.scale, 4 * this.scale);
                    rect(this.x + 34 * this.scale, this.y + 10 * this.scale, 4 * this.scale, 4 * this.scale);
                    rect(this.x + 41 * this.scale, this.y + 10 * this.scale, 4 * this.scale, 4 * this.scale);

                    fill(bluewindow);
                    rect(this.x + 5 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                    rect(this.x + 9 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                    rect(this.x + 15 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                    rect(this.x + 19 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                    rect(this.x + 25 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                    rect(this.x + 29 * this.scale, this.y + 11 * this.scale, 2 * this.scale, 3 * this.scale);
                    rect(this.x + 42 * this.scale, this.y + 11 * this.scale, 2 * this.scale, 3 * this.scale);
                    rect(this.x + 52 * this.scale, this.y + 11 * this.scale, 1 * this.scale, 3 * this.scale);

                    fill(bluereflection);
                    rect(this.x + 54 * this.scale, this.y + 11 * this.scale, 1 * this.scale, 3 * this.scale);

                    push();
                    for (let i = 0; i < 3; i++) {
                        translate(0, 27);
                        fill(bluebshadow);
                        rect(this.x + 3 * this.scale, this.y + 10 * this.scale, 28 * this.scale, 4 * this.scale);
                        rect(this.x + 34 * this.scale, this.y + 10 * this.scale, 4 * this.scale, 4 * this.scale);
                        rect(this.x + 41 * this.scale, this.y + 10 * this.scale, 4 * this.scale, 4 * this.scale);

                        fill(bluewindow);
                        rect(this.x + 5 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                        rect(this.x + 9 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                        rect(this.x + 15 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                        rect(this.x + 19 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                        rect(this.x + 25 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                        rect(this.x + 29 * this.scale, this.y + 11 * this.scale, 2 * this.scale, 3 * this.scale);
                        rect(this.x + 42 * this.scale, this.y + 11 * this.scale, 2 * this.scale, 3 * this.scale);
                        rect(this.x + 52 * this.scale, this.y + 11 * this.scale, 1 * this.scale, 3 * this.scale);

                        fill(bluereflection);
                        rect(this.x + 54 * this.scale, this.y + 11 * this.scale, 1 * this.scale, 3 * this.scale);
                    }
                    pop();
                }
            }

            // 1st level building B
            {
                fill(bluebshadow);
                rect(this.x + 176 * this.scale, this.y + 18 * this.scale, 21 * this.scale, 31 * this.scale);
                fill('rgba(201, 229, 225, 0.3)');
                rect(this.x + 178 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 182 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 188 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 192 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);

                push();
                for (let i = 0; i < 4; i++) {
                    translate(0, 17);
                    fill('rgba(201, 229, 225, 0.3)');
                    rect(this.x + 178 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                    rect(this.x + 182 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                    rect(this.x + 188 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                    rect(this.x + 192 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                }
                pop();

            }

            // 1st level building A
            {
                push();
                fill(bluebuilding);
                rect(this.x + 120 * this.scale, this.y + 18 * this.scale, 58 * this.scale, 3 * this.scale);
                rect(this.x + 122 * this.scale, this.y + 21 * this.scale, 1 * this.scale, 3 * this.scale);
                rect(this.x + 175 * this.scale, this.y + 21 * this.scale, 1 * this.scale, 3 * this.scale);

                fill(bluebshadow);
                rect(this.x + 123 * this.scale, this.y + 21 * this.scale, 52 * this.scale, 3 * this.scale);

                fill(bluewindow);
                rect(this.x + 125 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 129 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 135 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 139 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 145 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 149 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 155 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 159 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 165 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 169 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);

                for (let i = 0; i < 4; i++) {
                    translate(0, 18);
                    fill(bluebuilding);
                    rect(this.x + 120 * this.scale, this.y + 18 * this.scale, 58 * this.scale, 3 * this.scale);
                    rect(this.x + 122 * this.scale, this.y + 21 * this.scale, 1 * this.scale, 3 * this.scale);
                    rect(this.x + 175 * this.scale, this.y + 21 * this.scale, 1 * this.scale, 3 * this.scale);

                    fill(bluebshadow);
                    rect(this.x + 123 * this.scale, this.y + 21 * this.scale, 52 * this.scale, 3 * this.scale);

                    fill(bluewindow);
                    rect(this.x + 125 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                    rect(this.x + 129 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                    rect(this.x + 135 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                    rect(this.x + 139 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                    rect(this.x + 145 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                    rect(this.x + 149 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                    rect(this.x + 155 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                    rect(this.x + 159 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                    rect(this.x + 165 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                    rect(this.x + 169 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                }
                pop();

                fill(bluebuilding);
                rect(this.x + 120 * this.scale, this.y + 48 * this.scale, 58 * this.scale, 2 * this.scale);
            }
        }

        // bridge & trains 
        {
            // street lights behind train
            {
                push();
                fill(blue);
                rect(this.x + 15 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 6 * this.scale);
                rect(this.x + 14 * this.scale, this.y + 29 * this.scale, 1 * this.scale, 1 * this.scale);

                fill(white);
                rect(this.x + 14 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 1 * this.scale);

                for (let i = 0; i < 8; i++) {
                    translate(120, 0);
                    fill(blue);
                    rect(this.x + 15 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 6 * this.scale);
                    rect(this.x + 14 * this.scale, this.y + 29 * this.scale, 1 * this.scale, 1 * this.scale);

                    fill(white);
                    rect(this.x + 14 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 1 * this.scale);
                }
                pop();
            }

            // moving train; var trainX
            {
                push();
                //base of the train
                fill("#46c0cf");
                rect(trx, 197, 70, 18);
                rect(trx + 70, 200, 4, 17);
                rect(trx + 74, 197, 70, 18);
                rect(trx + 144, 200, 4, 17);
                rect(trx + 148, 197, 70, 17);

                //windows of train
                fill("#87d1cf");
                rect(trx + 5, 200, 10, 10);
                rect(trx + 20, 200, 10, 10);
                rect(trx + 35, 200, 10, 10);
                rect(trx + 50, 200, 10, 10);
                rect(trx + 80, 200, 10, 10);
                rect(trx + 95, 200, 10, 10);
                rect(trx + 110, 200, 10, 10);
                rect(trx + 125, 200, 10, 10);
                rect(trx + 155, 200, 10, 10);
                rect(trx + 170, 200, 10, 10);
                rect(trx + 185, 200, 25, 10);
                pop();

            }

            // street lights infront of train
            {
                push();
                fill(blue);
                rect(this.x + 5 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 6 * this.scale);
                rect(this.x + 6 * this.scale, this.y + 29 * this.scale, 1 * this.scale, 1 * this.scale);

                fill(white);
                rect(this.x + 6 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 1 * this.scale);

                for (let i = 0; i < 8; i++) {
                    translate(120, 0);
                    fill(blue);
                    rect(this.x + 5 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 6 * this.scale);
                    rect(this.x + 6 * this.scale, this.y + 29 * this.scale, 1 * this.scale, 1 * this.scale);

                    fill(white);
                    rect(this.x + 6 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 1 * this.scale);
                }
                pop();
            }

            // overhead bridge pillars
            {
                fill(blue);
                rect(this.x + 0 * this.scale, this.y + 35 * this.scale, 370 * this.scale, 1 * this.scale);
                rect(this.x + 0 * this.scale, this.y + 38 * this.scale, 370 * this.scale, 1.5 * this.scale);
                rect(this.x + 5 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 5 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 30 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 30 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 55 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 55 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 80 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 80 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 105 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 105 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 130 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 130 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 155 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 155 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 180 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 180 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 205 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 205 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 230 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 230 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 255 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 255 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 280 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 280 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 305 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 305 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 330 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 330 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 355 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 355 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
            }

            // overhead bridge railing
            {
                fill(blue);
                rect(this.x + 0 * this.scale, this.y + 35 * this.scale, 1 * this.scale, 4 * this.scale);
                push();
                for (let i = 0; i < 185; i++) {
                    translate(6, 0);
                    rect(this.x + 0 * this.scale, this.y + 35 * this.scale, 1 * this.scale, 4 * this.scale);
                }
                pop();
            }

            // bridge shadow
            {
                fill(blueshadow);
                rect(this.x + 10 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 10 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 35 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 35 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 60 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 60 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 85 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 85 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 110 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 110 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 135 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 135 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 160 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 160 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 185 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 185 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 210 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 210 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 235 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 235 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 260 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 260 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 285 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 285 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 310 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 310 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 335 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 335 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                rect(this.x + 360 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                rect(this.x + 360 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
            }
        }

        // lake
        {
            // reflection on lake
            {
                push();
                translate(0, 497);
                scale(1, -1); {

                    // 2nd level building A
                    {
                        fill(midblue);
                        rect(this.x + 75 * this.scale, this.y + 25 * this.scale, 20 * this.scale, 25 * this.scale);
                        rect(this.x + 77 * this.scale, this.y + 19 * this.scale, 9 * this.scale, 5 * this.scale);
                        rect(this.x + 77 * this.scale, this.y + 24 * this.scale, 1 * this.scale, 5 * this.scale);
                        rect(this.x + 85 * this.scale, this.y + 21 * this.scale, 1 * this.scale, 5 * this.scale);

                        fill(bluebuilding);
                        rect(this.x + 86 * this.scale, this.y + 19 * this.scale, 1 * this.scale, 6 * this.scale);

                        fill(lightblue);
                        rect(this.x + 78 * this.scale, this.y + 28 * this.scale, 2 * this.scale, 4 * this.scale);
                        rect(this.x + 82 * this.scale, this.y + 28 * this.scale, 2 * this.scale, 4 * this.scale);
                        rect(this.x + 86 * this.scale, this.y + 28 * this.scale, 2 * this.scale, 4 * this.scale);
                        rect(this.x + 90 * this.scale, this.y + 28 * this.scale, 2 * this.scale, 4 * this.scale);
                        rect(this.x + 78 * this.scale, this.y + 34 * this.scale, 2 * this.scale, 10 * this.scale);
                        rect(this.x + 82 * this.scale, this.y + 34 * this.scale, 2 * this.scale, 10 * this.scale);
                        rect(this.x + 86 * this.scale, this.y + 34 * this.scale, 2 * this.scale, 10 * this.scale);
                        rect(this.x + 90 * this.scale, this.y + 34 * this.scale, 2 * this.scale, 10 * this.scale);
                    }

                    // 2nd level building B 
                    {
                        fill(bluebuilding);
                        rect(this.x + 246 * this.scale, this.y - 10 * this.scale, 20 * this.scale, 60 * this.scale);

                        fill(blueshadow);
                        rect(this.x + 264 * this.scale, this.y - 10 * this.scale, 2 * this.scale, 60 * this.scale);

                        fill(bluewindow);
                        rect(this.x + 248 * this.scale, this.y - 7 * this.scale, 14 * this.scale, 0.8 * this.scale);

                        push();
                        for (let i = 0; i < 16; i++) {
                            translate(0, 10);
                            fill(bluewindow);
                            rect(this.x + 248 * this.scale, this.y - 7 * this.scale, 14 * this.scale, 0.8 * this.scale);
                        }
                        pop();
                    }

                    // 1st level building below spaceneedle
                    {
                        {
                            fill(bluebuilding);
                            rect(this.x + 3 * this.scale, this.y + 5 * this.scale, 45 * this.scale, 44 * this.scale);

                            fill(bluebshadow);
                            rect(this.x + 45 * this.scale, this.y + 5 * this.scale, 10 * this.scale, 44 * this.scale);
                        }
                        //row of windows
                        {
                            fill(bluebshadow);
                            rect(this.x + 3 * this.scale, this.y + 10 * this.scale, 28 * this.scale, 4 * this.scale);
                            rect(this.x + 34 * this.scale, this.y + 10 * this.scale, 4 * this.scale, 4 * this.scale);
                            rect(this.x + 41 * this.scale, this.y + 10 * this.scale, 4 * this.scale, 4 * this.scale);

                            fill(bluewindow);
                            rect(this.x + 5 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                            rect(this.x + 9 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                            rect(this.x + 15 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                            rect(this.x + 19 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                            rect(this.x + 25 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                            rect(this.x + 29 * this.scale, this.y + 11 * this.scale, 2 * this.scale, 3 * this.scale);
                            rect(this.x + 42 * this.scale, this.y + 11 * this.scale, 2 * this.scale, 3 * this.scale);
                            rect(this.x + 52 * this.scale, this.y + 11 * this.scale, 1 * this.scale, 3 * this.scale);

                            fill(bluereflection);
                            rect(this.x + 54 * this.scale, this.y + 11 * this.scale, 1 * this.scale, 3 * this.scale);

                            push();
                            for (let i = 0; i < 3; i++) {
                                translate(0, 27);
                                fill(bluebshadow);
                                rect(this.x + 3 * this.scale, this.y + 10 * this.scale, 28 * this.scale, 4 * this.scale);
                                rect(this.x + 34 * this.scale, this.y + 10 * this.scale, 4 * this.scale, 4 * this.scale);
                                rect(this.x + 41 * this.scale, this.y + 10 * this.scale, 4 * this.scale, 4 * this.scale);

                                fill(bluewindow);
                                rect(this.x + 5 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                                rect(this.x + 9 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                                rect(this.x + 15 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                                rect(this.x + 19 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                                rect(this.x + 25 * this.scale, this.y + 11 * this.scale, 3 * this.scale, 3 * this.scale);
                                rect(this.x + 29 * this.scale, this.y + 11 * this.scale, 2 * this.scale, 3 * this.scale);
                                rect(this.x + 42 * this.scale, this.y + 11 * this.scale, 2 * this.scale, 3 * this.scale);
                                rect(this.x + 52 * this.scale, this.y + 11 * this.scale, 1 * this.scale, 3 * this.scale);

                                fill(bluereflection);
                                rect(this.x + 54 * this.scale, this.y + 11 * this.scale, 1 * this.scale, 3 * this.scale);
                            }
                            pop();
                        }
                    }

                    // 1st level building B
                    {
                        fill(bluebshadow);
                        rect(this.x + 176 * this.scale, this.y + 18 * this.scale, 21 * this.scale, 31 * this.scale);
                        fill('rgba(201, 229, 225, 0.3)');
                        rect(this.x + 178 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        rect(this.x + 182 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        rect(this.x + 188 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        rect(this.x + 192 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);

                        push();
                        for (let i = 0; i < 4; i++) {
                            translate(0, 17);
                            fill('rgba(201, 229, 225, 0.3)');
                            rect(this.x + 178 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                            rect(this.x + 182 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                            rect(this.x + 188 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                            rect(this.x + 192 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        }
                        pop();

                    }

                    // 1st level building A
                    {
                        push();
                        fill(bluebuilding);
                        rect(this.x + 120 * this.scale, this.y + 18 * this.scale, 58 * this.scale, 3 * this.scale);
                        rect(this.x + 122 * this.scale, this.y + 21 * this.scale, 1 * this.scale, 3 * this.scale);
                        rect(this.x + 175 * this.scale, this.y + 21 * this.scale, 1 * this.scale, 3 * this.scale);

                        fill(bluebshadow);
                        rect(this.x + 123 * this.scale, this.y + 21 * this.scale, 52 * this.scale, 3 * this.scale);

                        fill(bluewindow);
                        rect(this.x + 125 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        rect(this.x + 129 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        rect(this.x + 135 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        rect(this.x + 139 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        rect(this.x + 145 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        rect(this.x + 149 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        rect(this.x + 155 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        rect(this.x + 159 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        rect(this.x + 165 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        rect(this.x + 169 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);

                        for (let i = 0; i < 4; i++) {
                            translate(0, 18);
                            fill(bluebuilding);
                            rect(this.x + 120 * this.scale, this.y + 18 * this.scale, 58 * this.scale, 3 * this.scale);
                            rect(this.x + 122 * this.scale, this.y + 21 * this.scale, 1 * this.scale, 3 * this.scale);
                            rect(this.x + 175 * this.scale, this.y + 21 * this.scale, 1 * this.scale, 3 * this.scale);

                            fill(bluebshadow);
                            rect(this.x + 123 * this.scale, this.y + 21 * this.scale, 52 * this.scale, 3 * this.scale);

                            fill(bluewindow);
                            rect(this.x + 125 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                            rect(this.x + 129 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                            rect(this.x + 135 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                            rect(this.x + 139 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                            rect(this.x + 145 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                            rect(this.x + 149 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                            rect(this.x + 155 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                            rect(this.x + 159 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                            rect(this.x + 165 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                            rect(this.x + 169 * this.scale, this.y + 22 * this.scale, 3 * this.scale, 2 * this.scale);
                        }
                        pop();

                        fill(bluebuilding);
                        rect(this.x + 120 * this.scale, this.y + 48 * this.scale, 58 * this.scale, 2 * this.scale);
                    }

                    // street lights behind train
                    {
                        push();
                        fill(blue);
                        rect(this.x + 15 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 6 * this.scale);
                        rect(this.x + 14 * this.scale, this.y + 29 * this.scale, 1 * this.scale, 1 * this.scale);

                        fill(white);
                        rect(this.x + 14 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 1 * this.scale);

                        for (let i = 0; i < 8; i++) {
                            translate(120, 0);
                            fill(blue);
                            rect(this.x + 15 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 6 * this.scale);
                            rect(this.x + 14 * this.scale, this.y + 29 * this.scale, 1 * this.scale, 1 * this.scale);

                            fill(white);
                            rect(this.x + 14 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 1 * this.scale);
                        }
                        pop();
                    }

                    // moving train; var trainX
                    {
                        push();
                        //base of the train
                        fill("#46c0cf");
                        rect(trx, 197, 70, 18);
                        rect(trx + 70, 200, 4, 17);
                        rect(trx + 74, 197, 70, 18);
                        rect(trx + 144, 200, 4, 17);
                        rect(trx + 148, 197, 70, 17);

                        //windows of train
                        fill("#87d1cf");
                        rect(trx + 5, 200, 10, 10);
                        rect(trx + 20, 200, 10, 10);
                        rect(trx + 35, 200, 10, 10);
                        rect(trx + 50, 200, 10, 10);
                        rect(trx + 80, 200, 10, 10);
                        rect(trx + 95, 200, 10, 10);
                        rect(trx + 110, 200, 10, 10);
                        rect(trx + 125, 200, 10, 10);
                        rect(trx + 155, 200, 10, 10);
                        rect(trx + 170, 200, 10, 10);
                        rect(trx + 185, 200, 25, 10);
                        pop();

                    }

                    // street lights infront of train
                    {
                        push();
                        fill(blue);
                        rect(this.x + 5 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 6 * this.scale);
                        rect(this.x + 6 * this.scale, this.y + 29 * this.scale, 1 * this.scale, 1 * this.scale);

                        fill(white);
                        rect(this.x + 6 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 1 * this.scale);

                        for (let i = 0; i < 8; i++) {
                            translate(120, 0);
                            fill(blue);
                            rect(this.x + 5 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 6 * this.scale);
                            rect(this.x + 6 * this.scale, this.y + 29 * this.scale, 1 * this.scale, 1 * this.scale);

                            fill(white);
                            rect(this.x + 6 * this.scale, this.y + 30 * this.scale, 1 * this.scale, 1 * this.scale);
                        }
                        pop();
                    }

                    // overhead bridge pillars
                    {
                        fill(blue);
                        rect(this.x + 0 * this.scale, this.y + 35 * this.scale, 370 * this.scale, 1 * this.scale);
                        rect(this.x + 0 * this.scale, this.y + 38 * this.scale, 370 * this.scale, 1.5 * this.scale);
                        rect(this.x + 5 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 5 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 30 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 30 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 55 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 55 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 80 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 80 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 105 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 105 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 130 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 130 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 155 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 155 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 180 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 180 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 205 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 205 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 230 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 230 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 255 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 255 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 280 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 280 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 305 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 305 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 330 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 330 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 355 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 355 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                    }

                    // overhead bridge railing
                    {
                        fill(blue);
                        rect(this.x + 0 * this.scale, this.y + 35 * this.scale, 1 * this.scale, 4 * this.scale);
                        push();
                        for (let i = 0; i < 184; i++) {
                            translate(6, 0);
                            rect(this.x + 0 * this.scale, this.y + 35 * this.scale, 1 * this.scale, 4 * this.scale);
                        }
                        pop();
                    }

                    // bridge shadow
                    {
                        fill(blueshadow);
                        rect(this.x + 10 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 10 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 35 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 35 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 60 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 60 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 85 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 85 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 110 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 110 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 135 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 135 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 160 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 160 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 185 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 185 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 210 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 210 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 235 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 235 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 260 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 260 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 285 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 285 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 310 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 310 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 335 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 335 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                        rect(this.x + 360 * this.scale, this.y + 39.5 * this.scale, 3 * this.scale, 4 * this.scale);
                        rect(this.x + 360 * this.scale, this.y + 43 * this.scale, 2 * this.scale, 6 * this.scale);
                    }
                }
                pop();
            }

            // lake 
            {
                fill("#1da3cc");
                rect(this.x + 0 * this.scale, this.y + 49 * this.scale, 370 * this.scale, 1 * this.scale);

                fill(bluelake);
                rect(this.x + 0 * this.scale, this.y + 50 * this.scale, 370 * this.scale, 83 * this.scale);

                //creating reflections lines
                fill(lakereflect);
                rect(this.x + 0 * this.scale, this.y + 70 * this.scale, 200 * this.scale, 1 * this.scale);
                rect(this.x + 0 * this.scale, this.y + 71 * this.scale, 170 * this.scale, 1 * this.scale);
                rect(this.x + 0 * this.scale, this.y + 72 * this.scale, 175 * this.scale, 1 * this.scale);
                rect(this.x + 0 * this.scale, this.y + 75 * this.scale, 175 * this.scale, 1 * this.scale);
                rect(this.x + 100 * this.scale, this.y + 75 * this.scale, 175 * this.scale, 1 * this.scale);
                rect(this.x + 80 * this.scale, this.y + 74 * this.scale, 120 * this.scale, 1 * this.scale);
                rect(this.x + 110 * this.scale, this.y + 73 * this.scale, 120 * this.scale, 1 * this.scale);
                rect(this.x + 120 * this.scale, this.y + 72 * this.scale, 150 * this.scale, 1 * this.scale);
                rect(this.x + 90 * this.scale, this.y + 76 * this.scale, 175 * this.scale, 1 * this.scale);
                rect(this.x + 85 * this.scale, this.y + 77 * this.scale, 75 * this.scale, 1 * this.scale);
                rect(this.x + 80 * this.scale, this.y + 78 * this.scale, 75 * this.scale, 1 * this.scale);
                rect(this.x + 200 * this.scale, this.y + 90 * this.scale, 75 * this.scale, 1 * this.scale);
                rect(this.x + 200 * this.scale, this.y + 89 * this.scale, 75 * this.scale, 1 * this.scale);
                rect(this.x + 210 * this.scale, this.y + 88 * this.scale, 50 * this.scale, 1 * this.scale);
                rect(this.x + 215 * this.scale, this.y + 86 * this.scale, 40 * this.scale, 1 * this.scale);
                rect(this.x + 220 * this.scale, this.y + 85 * this.scale, 40 * this.scale, 1 * this.scale);
                rect(this.x + 220 * this.scale, this.y + 80 * this.scale, 45 * this.scale, 1 * this.scale);
                rect(this.x + 220 * this.scale, this.y + 80 * this.scale, 45 * this.scale, 1 * this.scale);
                rect(this.x + 210 * this.scale, this.y + 79 * this.scale, 45 * this.scale, 1 * this.scale);
                rect(this.x + 210 * this.scale, this.y + 91 * this.scale, 65 * this.scale, 1 * this.scale);
                rect(this.x + 220 * this.scale, this.y + 92 * this.scale, 60 * this.scale, 1 * this.scale);
            }
        }

        // foreground
        {
            // brown ledge
            {
                //main ledge
                fill(brown);
                rect(this.x + 10 * this.scale, this.y + 85 * this.scale, 21 * this.scale, 35 * this.scale);
                rect(this.x + 31 * this.scale, this.y + 101 * this.scale, 80 * this.scale, 15 * this.scale);
                rect(this.x + 109 * this.scale, this.y + 86 * this.scale, 21 * this.scale, 34 * this.scale);
                rect(this.x + 110 * this.scale, this.y + 85 * this.scale, 19 * this.scale, 1 * this.scale);

                fill(brownshadow);
                rect(this.x + 30 * this.scale, this.y + 86 * this.scale, 8 * this.scale, 15 * this.scale);
                rect(this.x + 31 * this.scale, this.y + 85 * this.scale, 6 * this.scale, 15 * this.scale);
                rect(this.x + 123 * this.scale, this.y + 86 * this.scale, 7 * this.scale, 34 * this.scale);
                rect(this.x + 124 * this.scale, this.y + 85 * this.scale, 5 * this.scale, 1 * this.scale);

                fill(metalgreen);
                rect(this.x + 22 * this.scale, this.y + 85 * this.scale, 6 * this.scale, 1 * this.scale);
                rect(this.x + 17 * this.scale, this.y + 85 * this.scale, 3 * this.scale, 1 * this.scale);
                rect(this.x + 113 * this.scale, this.y + 85 * this.scale, 5 * this.scale, 1 * this.scale);
                rect(this.x + 120 * this.scale, this.y + 85 * this.scale, 1 * this.scale, 1 * this.scale);

                //shadow of the ledge
                fill(brownshadow);
                rect(this.x + 0 * this.scale, this.y + 85 * this.scale, 10 * this.scale, 35 * this.scale);
                rect(this.x + 45 * this.scale, this.y + 116 * this.scale, 80 * this.scale, 2 * this.scale);
                triangle(this.x + 10 * this.scale, this.y + 85 * this.scale, this.x + 10 * this.scale, this.y + 120 * this.scale, this.x + 50 * this.scale, this.y + 120 * this.scale);

                //metal railing on ledge
                {
                    fill(metalgreen);
                    rect(this.x + 34 * this.scale, this.y + 87 * this.scale, 75 * this.scale, 2 * this.scale);
                    rect(this.x + 35 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 2 * this.scale);

                    fill(brownshadow);
                    rect(this.x + 34 * this.scale, this.y + 89 * this.scale, 75 * this.scale, 1 * this.scale);
                    rect(this.x + 35 * this.scale, this.y + 98 * this.scale, 75 * this.scale, 2 * this.scale);
                    rect(this.x + 41 * this.scale, this.y + 89 * this.scale, 2 * this.scale, 9 * this.scale);

                    fill(metalgreen);
                    rect(this.x + 41 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 3 * this.scale);

                    fill(brownshadow);
                    rect(this.x + 46 * this.scale, this.y + 89 * this.scale, 2 * this.scale, 9 * this.scale);

                    fill(metalgreen);
                    rect(this.x + 46 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 4 * this.scale);

                    fill(brownshadow);
                    rect(this.x + 51 * this.scale, this.y + 89 * this.scale, 2 * this.scale, 9 * this.scale);

                    fill(metalgreen);
                    rect(this.x + 51 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 5 * this.scale);

                    fill(brownshadow);
                    rect(this.x + 56 * this.scale, this.y + 89 * this.scale, 2 * this.scale, 9 * this.scale);

                    fill(metalgreen);
                    rect(this.x + 56 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 7 * this.scale);

                    fill(brownshadow);
                    rect(this.x + 61 * this.scale, this.y + 89 * this.scale, 2 * this.scale, 9 * this.scale);

                    fill(metalgreen);
                    rect(this.x + 61 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 7 * this.scale);
                    rect(this.x + 59 * this.scale, this.y + 98 * this.scale, 3 * this.scale, 1 * this.scale);

                    push();
                    for (let i = 0; i < 8; i++) {
                        translate(16, 0); {
                            fill(brownshadow);
                            rect(this.x + 61 * this.scale, this.y + 89 * this.scale, 2 * this.scale, 9 * this.scale);

                            fill(metalgreen);
                            rect(this.x + 61 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 7 * this.scale);
                            rect(this.x + 59 * this.scale, this.y + 98 * this.scale, 3 * this.scale, 1 * this.scale);
                        }
                    }
                    pop();

                    fill(metalshadow);
                    rect(this.x + 42 * this.scale, this.y + 87 * this.scale, 10 * this.scale, 0.7 * this.scale);
                    rect(this.x + 55 * this.scale, this.y + 87 * this.scale, 3 * this.scale, 0.7 * this.scale);

                }

            }

            // main street lamp
            {
                push();
                translate(-40, 0);
                fill(brown);
                rect(this.x + 235 * this.scale, this.y + 35 * this.scale, 7 * this.scale, 85 * this.scale);
                rect(this.x + 236 * this.scale, this.y + 34 * this.scale, 5 * this.scale, 1 * this.scale);
                rect(this.x + 234 * this.scale, this.y + 50 * this.scale, 1 * this.scale, 7 * this.scale);
                rect(this.x + 233 * this.scale, this.y + 49 * this.scale, 1 * this.scale, 7 * this.scale);
                rect(this.x + 232 * this.scale, this.y + 48 * this.scale, 1 * this.scale, 6 * this.scale);
                rect(this.x + 231 * this.scale, this.y + 47 * this.scale, 1 * this.scale, 5 * this.scale);
                rect(this.x + 230 * this.scale, this.y + 46 * this.scale, 1 * this.scale, 5 * this.scale);
                rect(this.x + 229 * this.scale, this.y + 45 * this.scale, 1 * this.scale, 4 * this.scale);
                rect(this.x + 228 * this.scale, this.y + 44 * this.scale, 1 * this.scale, 4 * this.scale);
                rect(this.x + 227 * this.scale, this.y + 43 * this.scale, 1 * this.scale, 4 * this.scale);
                rect(this.x + 225 * this.scale, this.y + 42 * this.scale, 2 * this.scale, 3 * this.scale);
                rect(this.x + 222 * this.scale, this.y + 41 * this.scale, 3 * this.scale, 2 * this.scale);
                rect(this.x + 218 * this.scale, this.y + 40 * this.scale, 4 * this.scale, 2 * this.scale);
                rect(this.x + 207 * this.scale, this.y + 39 * this.scale, 11 * this.scale, 2 * this.scale);
                rect(this.x + 204 * this.scale, this.y + 40 * this.scale, 4 * this.scale, 2 * this.scale);
                rect(this.x + 204 * this.scale, this.y + 42 * this.scale, 1 * this.scale, 2 * this.scale);

                fill(white);
                rect(this.x + 203 * this.scale, this.y + 44 * this.scale, 3 * this.scale, 1 * this.scale);
                rect(this.x + 202 * this.scale, this.y + 45 * this.scale, 5 * this.scale, 1 * this.scale);
                rect(this.x + 201 * this.scale, this.y + 46 * this.scale, 7 * this.scale, 1 * this.scale);
                rect(this.x + 200 * this.scale, this.y + 47 * this.scale, 9 * this.scale, 3 * this.scale);
                rect(this.x + 201 * this.scale, this.y + 50 * this.scale, 7 * this.scale, 1 * this.scale);
                pop();
            }


            // bricks 
            {
                fill(brown);
                rect(this.x + 0 * this.scale, this.y + 117.5 * this.scale, 380 * this.scale, 16 * this.scale);
                push();
                bricks(0, 400, 2.5, 2.5);
                for (let i = 0; i < 24; i++) {
                    translate(45, 0);
                    bricks(0, 400, 2.5, 2.5);
                }
                pop();
            }
        }

    }

    // objects that player interacts with
    interact() {

        // lamp light turns on
        {
            push();
            translate(-40, 0);
            if (this.light) {
                fill(245, 251, 236, 150);
                quad(602, 252, 626, 252, 680, 452, 560, 452);
                //this.light = false;
            } else {
                //this.light = false;
            }
            pop();
        }

        //collide with ledge 

    }

    // background animation
    animate() {


        //ferris wheel 


    }

}

// creating brown ledge
function brownLedge() {
    let brown = color(77, 67, 75);
    let brownshadow = color(43, 39, 54);
    let metalgreen = color(110, 128, 111); //railing of ledge
    let metalshadow = color(154, 160, 111);

    //main ledge
    fill(brown);
    rect(this.x + 10 * this.scale, this.y + 85 * this.scale, 21 * this.scale, 35 * this.scale);
    rect(this.x + 31 * this.scale, this.y + 101 * this.scale, 80 * this.scale, 15 * this.scale);
    rect(this.x + 109 * this.scale, this.y + 86 * this.scale, 21 * this.scale, 34 * this.scale);
    rect(this.x + 110 * this.scale, this.y + 85 * this.scale, 19 * this.scale, 1 * this.scale);

    fill(brownshadow);
    rect(this.x + 30 * this.scale, this.y + 86 * this.scale, 8 * this.scale, 15 * this.scale);
    rect(this.x + 31 * this.scale, this.y + 85 * this.scale, 6 * this.scale, 15 * this.scale);
    rect(this.x + 123 * this.scale, this.y + 86 * this.scale, 7 * this.scale, 34 * this.scale);
    rect(this.x + 124 * this.scale, this.y + 85 * this.scale, 5 * this.scale, 1 * this.scale);


    fill(metalgreen);
    rect(this.x + 22 * this.scale, this.y + 85 * this.scale, 6 * this.scale, 1 * this.scale);
    rect(this.x + 17 * this.scale, this.y + 85 * this.scale, 3 * this.scale, 1 * this.scale);
    rect(this.x + 113 * this.scale, this.y + 85 * this.scale, 5 * this.scale, 1 * this.scale);
    rect(this.x + 120 * this.scale, this.y + 85 * this.scale, 1 * this.scale, 1 * this.scale);

    //shadow of the ledge
    fill(brownshadow);
    rect(this.x + 0 * this.scale, this.y + 85 * this.scale, 10 * this.scale, 35 * this.scale);
    rect(this.x + 45 * this.scale, this.y + 116 * this.scale, 80 * this.scale, 2 * this.scale);
    triangle(this.x + 10 * this.scale, this.y + 85 * this.scale, this.x + 10 * this.scale, this.y + 120 * this.scale, this.x + 50 * this.scale, this.y + 120 * this.scale);

    //metal railing on ledge
    {
        fill(metalgreen);
        rect(this.x + 34 * this.scale, this.y + 87 * this.scale, 75 * this.scale, 2 * this.scale);
        rect(this.x + 35 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 2 * this.scale);

        fill(brownshadow);
        rect(this.x + 34 * this.scale, this.y + 89 * this.scale, 75 * this.scale, 1 * this.scale);
        rect(this.x + 35 * this.scale, this.y + 98 * this.scale, 75 * this.scale, 2 * this.scale);
        rect(this.x + 41 * this.scale, this.y + 89 * this.scale, 2 * this.scale, 9 * this.scale);

        fill(metalgreen);
        rect(this.x + 41 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 3 * this.scale);

        fill(brownshadow);
        rect(this.x + 46 * this.scale, this.y + 89 * this.scale, 2 * this.scale, 9 * this.scale);

        fill(metalgreen);
        rect(this.x + 46 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 4 * this.scale);

        fill(brownshadow);
        rect(this.x + 51 * this.scale, this.y + 89 * this.scale, 2 * this.scale, 9 * this.scale);

        fill(metalgreen);
        rect(this.x + 51 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 5 * this.scale);

        fill(brownshadow);
        rect(this.x + 56 * this.scale, this.y + 89 * this.scale, 2 * this.scale, 9 * this.scale);

        fill(metalgreen);
        rect(this.x + 56 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 7 * this.scale);

        fill(brownshadow);
        rect(this.x + 61 * this.scale, this.y + 89 * this.scale, 2 * this.scale, 9 * this.scale);

        fill(metalgreen);
        rect(this.x + 61 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 7 * this.scale);
        rect(this.x + 59 * this.scale, this.y + 98 * this.scale, 3 * this.scale, 1 * this.scale);

        push();
        for (let i = 0; i < 8; i++) {
            translate(16, 0); {
                fill(brownshadow);
                rect(this.x + 61 * this.scale, this.y + 89 * this.scale, 2 * this.scale, 9 * this.scale);

                fill(metalgreen);
                rect(this.x + 61 * this.scale, this.y + 91 * this.scale, 1 * this.scale, 7 * this.scale);
                rect(this.x + 59 * this.scale, this.y + 98 * this.scale, 3 * this.scale, 1 * this.scale);
            }
        }
        pop();

        fill(metalshadow);
        rect(this.x + 42 * this.scale, this.y + 87 * this.scale, 10 * this.scale, 0.7 * this.scale);
        rect(this.x + 55 * this.scale, this.y + 87 * this.scale, 3 * this.scale, 0.7 * this.scale);

    }

}

// creating bricks for the background
function bricks(x5, y5, bw, bh) {
    let brown = color(92, 39, 41);
    let lightbrown = color(174, 132, 123);
    let white = color(255, 231, 197);
    let mainbrown = color(202, 123, 70);
    let redbrown = color(97, 40, 48);
    let pink = color('rgba(251, 151, 158, 0.75)');
    let pink05 = color('rgba(251, 151, 158, 0.4)');
    let lightpink = color(255, 190, 169);
    let pinkwhite = color(239, 178, 145);
    let whitebrown = color(226, 171, 128);
    let brown208 = color(208, 123, 74);
    let darkbrown = color(143, 72, 38);
    let brown185 = color(185, 108, 59);
    let brown193 = color(193, 114, 71);
    let brown169 = color(169, 98, 56);
    let dredbrown = color(108, 44, 45);

    fill(lightbrown);
    rect(x5 + 1 * bw, y5 + 22 * bh, 18 * bw, 1 * bh);

    fill(brown208);
    rect(x5 + 11 * bw, y5 + 22 * bh, 1 * bw, 2 * bh);
    rect(x5 + 14 * bw, y5 + 38 * bh, 2 * bw, 1 * bh);

    fill(mainbrown);
    rect(x5 + 2 * bw, y5 + 24 * bh, 10 * bw, 6 * bh);
    rect(x5 + 12 * bw, y5 + 24 * bh, 5 * bw, 3 * bh);
    rect(x5 + 3 * bw, y5 + 30 * bh, 6 * bw, 4 * bh);
    rect(x5 + 4 * bw, y5 + 31 * bh, 5 * bw, 4 * bh);
    rect(x5 + 5 * bw, y5 + 32 * bh, 4 * bw, 4 * bh);
    rect(x5 + 2 * bw, y5 + 38 * bh, 6 * bw, 1 * bh);
    rect(x5 + 7 * bw, y5 + 37 * bh, 1 * bw, 2 * bh);
    rect(x5 + 14 * bw, y5 + 30 * bh, 3 * bw, 8 * bh);

    fill(white);
    rect(x5 + 1 * bw, y5 + 23 * bh, 18 * bw, 1 * bh);
    rect(x5 + 1 * bw, y5 + 23 * bh, 1 * bw, 7 * bh);
    rect(x5 + 13 * bw, y5 + 24 * bh, 1 * bw, 12 * bh);
    rect(x5 + 11 * bw, y5 + 38 * bh, 1 * bw, 1 * bh);
    rect(x5 + 14 * bw, y5 + 29 * bh, 1 * bw, 1 * bh);

    fill('rgba(156,110,104,0.5)'); //browngrey
    rect(x5 + 12 * bw, y5 + 24 * bh, 1 * bw, 12 * bh);
    rect(x5 + 2 * bw, y5 + 36 * bh, 5 * bw, 2 * bh);
    rect(x5 + 18 * bw, y5 + 32 * bh, 1 * bw, 5 * bh);
    rect(x5 + 13 * bw, y5 + 36 * bh, 1 * bw, 4 * bh);

    fill('rgba(134,68,72,0.5)'); //lightbrowngrey
    rect(x5 + 12 * bw, y5 + 28 * bh, 2 * bw, 1 * bh);
    rect(x5 + 12 * bw, y5 + 29 * bh, 2 * bw, 2 * bh);
    rect(x5 + 12 * bw, y5 + 39 * bh, 2 * bw, 1 * bh);


    fill(redbrown);
    rect(x5 + 17 * bw, y5 + 30 * bh, 1 * bw, 3 * bh);

    fill(pink);
    rect(x5 + 10 * bw, y5 + 22 * bh, 1 * bw, 1 * bh);
    rect(x5 + 10 * bw, y5 + 23 * bh, 1 * bw, 1 * bh);
    rect(x5 + 17 * bw, y5 + 22 * bh, 1 * bw, 1 * bh);
    rect(x5 + 17 * bw, y5 + 23 * bh, 1 * bw, 1 * bh);
    rect(x5 + 3 * bw, y5 + 24 * bh, 1 * bw, 1 * bh);
    rect(x5 + 1 * bw, y5 + 30 * bh, 1 * bw, 1 * bh);
    rect(x5 + 12 * bw, y5 + 26 * bh, 2 * bw, 1 * bh);
    rect(x5 + 13 * bw, y5 + 30 * bh, 1 * bw, 1 * bh);
    rect(x5 + 11 * bw, y5 + 39 * bh, 1 * bw, 1 * bh);

    fill(pink05);
    rect(x5 + 3 * bw, y5 + 25 * bh, 1 * bw, 1 * bh);
    rect(x5 + 9 * bw, y5 + 22 * bh, 1 * bw, 2 * bh);
    rect(x5 + 2 * bw, y5 + 30 * bh, 1 * bw, 1 * bh);
    rect(x5 + 18 * bw, y5 + 22 * bh, 1 * bw, 1 * bh);
    rect(x5 + 18 * bw, y5 + 23 * bh, 1 * bw, 1 * bh);
    rect(x5 + 12 * bw, y5 + 25 * bh, 2 * bw, 1 * bh);
    rect(x5 + 16 * bw, y5 + 29 * bh, 1 * bw, 1 * bh);

    fill(lightpink);
    rect(x5 + 2 * bw, y5 + 24 * bh, 1 * bw, 1 * bh);
    rect(x5 + 13 * bw, y5 + 29 * bh, 1 * bw, 1 * bh);
    rect(x5 + 2 * bw, y5 + 38 * bh, 1 * bw, 1 * bh);
    rect(x5 + 3 * bw, y5 + 37 * bh, 1 * bw, 1 * bh);
    rect(x5 + 10 * bw, y5 + 38 * bh, 1 * bw, 1 * bh);

    fill(pinkwhite);
    rect(x5 + 2 * bw, y5 + 25 * bh, 1 * bw, 1 * bh);
    rect(x5 + 13 * bw, y5 + 31 * bh, 1 * bw, 1 * bh);
    rect(x5 + 13 * bw, y5 + 35 * bh, 1 * bw, 1 * bh);
    rect(x5 + 12 * bw, y5 + 36 * bh, 1 * bw, 2 * bh);
    rect(x5 + 4 * bw, y5 + 37 * bh, 1 * bw, 1 * bh);
    rect(x5 + 15 * bw, y5 + 29 * bh, 1 * bw, 1 * bh);
    rect(x5 + 16 * bw, y5 + 30 * bh, 1 * bw, 1 * bh);

    fill(226, 202, 180);
    rect(x5 + 11 * bw, y5 + 36 * bh, 1 * bw, 2 * bh);

    fill(whitebrown);
    rect(x5 + 2 * bw, y5 + 26 * bh, 1 * bw, 4 * bh);
    rect(x5 + 18 * bw, y5 + 24 * bh, 1 * bw, 6 * bh);
    rect(x5 + 10 * bw, y5 + 39 * bh, 1 * bw, 1 * bh);

    fill(darkbrown);
    rect(x5 + 10 * bw, y5 + 24 * bh, 1 * bw, 12 * bh);
    rect(x5 + 1 * bw, y5 + 32 * bh, 1 * bw, 1 * bh);
    rect(x5 + 17 * bw, y5 + 25 * bh, 1 * bw, 3 * bh);
    rect(x5 + 17 * bw, y5 + 33 * bh, 1 * bw, 2 * bh);
    rect(x5 + 9 * bw, y5 + 36 * bh, 1 * bw, 2 * bh);
    rect(x5 + 6 * bw, y5 + 36 * bh, 3 * bw, 1 * bh);
    rect(x5 + 3 * bw, y5 + 35 * bh, 3 * bw, 1 * bh);
    rect(x5 + 1 * bw, y5 + 33 * bh, 1 * bw, 1 * bh);

    fill(brown185);
    rect(x5 + 1 * bw, y5 + 31 * bh, 1 * bw, 1 * bh);
    rect(x5 + 9 * bw, y5 + 24 * bh, 1 * bw, 12 * bh);
    rect(x5 + 17 * bw, y5 + 24 * bh, 1 * bw, 1 * bh);
    rect(x5 + 17 * bw, y5 + 28 * bh, 1 * bw, 2 * bh);
    rect(x5 + 6 * bw, y5 + 35 * bh, 3 * bw, 1 * bh);
    rect(x5 + 3 * bw, y5 + 34 * bh, 3 * bw, 1 * bh);
    rect(x5 + 3 * bw, y5 + 33 * bh, 2 * bw, 1 * bh);
    rect(x5 + 9 * bw, y5 + 39 * bh, 1 * bw, 1 * bh);

    fill(brown193);
    rect(x5 + 2 * bw, y5 + 31 * bh, 1 * bw, 1 * bh);
    rect(x5 + 1 * bw, y5 + 39 * bh, 1 * bw, 1 * bh);

    fill(brown169);
    rect(x5 + 2 * bw, y5 + 32 * bh, 1 * bw, 3 * bh);
    rect(x5 + 2 * bw, y5 + 37 * bh, 1 * bw, 1 * bh);
    rect(x5 + 17 * bw, y5 + 35 * bh, 1 * bw, 3 * bh);
    rect(x5 + 8 * bw, y5 + 37 * bh, 1 * bw, 2 * bh);
    rect(x5 + 14 * bw, y5 + 38 * bh, 2 * bw, 1 * bh);
    rect(x5 + 16 * bw, y5 + 37 * bh, 1 * bw, 1 * bh);

    fill(dredbrown);
    rect(x5 + 11 * bw, y5 + 24 * bh, 1 * bw, 12 * bh);
    rect(x5 + 2 * bw, y5 + 34 * bh, 1 * bw, 3 * bh);
    rect(x5 + 1 * bw, y5 + 33 * bh, 1 * bw, 6 * bh);
    rect(x5 + 12 * bw, y5 + 27 * bh, 2 * bw, 1 * bh);
    rect(x5 + 10 * bw, y5 + 36 * bh, 1 * bw, 2 * bh);
    rect(x5 + 3 * bw, y5 + 36 * bh, 3 * bw, 1 * bh);

    fill(darkbrown);
    rect(x5 + 2 * bw, y5 + 34 * bh, 1 * bw, 3 * bh);
    rect(x5 + 3 * bw, y5 + 35 * bh, 1 * bw, 1 * bh);
    rect(x5 + 3 * bw, y5 + 34 * bh, 1 * bw, 1 * bh);
    rect(x5 + 14 * bw, y5 + 27 * bh, 2 * bw, 1 * bh);
    rect(x5 + 17 * bw, y5 + 28 * bh, 1 * bw, 1 * bh);
    rect(x5 + 18 * bw, y5 + 30 * bh, 1 * bw, 2 * bh);
    rect(x5 + 18 * bw, y5 + 37 * bh, 1 * bw, 3 * bh);
    rect(x5 + 17 * bw, y5 + 37 * bh, 1 * bw, 1 * bh);
    rect(x5 + 12 * bw, y5 + 38 * bh, 1 * bw, 1 * bh);
    rect(x5 + 2 * bw, y5 + 39 * bh, 2 * bw, 1 * bh);
    rect(x5 + 9 * bw, y5 + 38 * bh, 1 * bw, 1 * bh);

    fill(dredbrown);
    rect(x5 + 3 * bw, y5 + 36 * bh, 3 * bw, 1 * bh);
    rect(x5 + 2 * bw, y5 + 35 * bh, 2 * bw, 2 * bh);
    rect(x5 + 7 * bw, y5 + 36 * bh, 3 * bw, 1 * bh);
    rect(x5 + 14 * bw, y5 + 28 * bh, 3 * bw, 1 * bh);
    rect(x5 + 16 * bw, y5 + 27 * bh, 1 * bw, 1 * bh);
    rect(x5 + 17 * bw, y5 + 26 * bh, 1 * bw, 2 * bh);
    rect(x5 + 17 * bw, y5 + 29 * bh, 1 * bw, 1 * bh);
    rect(x5 + 16 * bw, y5 + 38 * bh, 2 * bw, 2 * bh);
    rect(x5 + 14 * bw, y5 + 39 * bh, 2 * bw, 1 * bh);
    rect(x5 + 4 * bw, y5 + 39 * bh, 5 * bw, 1 * bh);

    fill(lightpink);
    rect(x5 + 18 * bw, y5 + 29 * bh, 1 * bw, 1 * bh);

    fill(brown193);
    rect(x5 + 17 * bw, y5 + 31 * bh, 1 * bw, 4 * bh);
}

// creating clouds 
function clouds(xCloud, yCloud, size) {
    fill("rgba(255, 255, 255, 0.5)");
    noStroke();
    arc(xCloud, yCloud, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
    arc(xCloud + 10, yCloud, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
    arc(xCloud + 25, yCloud, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
    arc(xCloud + 40, yCloud, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);


}

// creating gradient background
function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis == "Y") { // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
            var inter = map(i, y, y + h, 0, 1);
            var c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    } else if (axis == "X") { // Left to right gradient
        for (let j = x; j <= x + w; j++) {
            var inter2 = map(j, x, x + w, 0, 1);
            var d = lerpColor(c1, c2, inter2);
            stroke(d);
            line(j, y, j, y + h);
        }
    }
}