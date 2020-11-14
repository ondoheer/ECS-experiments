/**
 * Components for this demo
 * 
 * 
 */

 // Appearance
ECS.Components.Appearance = function ComponentAppearance(params){
    // data for color and size
    params = params || {}
    this.colors = params.colors;
    if(!this.colors){
        this.colors = {
            r: randomIntFromInterval(0,255),
            g: randomIntFromInterval(0,255),
            b: randomIntFromInterval(0,255)
        }
    }

    this.size = params.size || randomIntFromInterval(30,80);

    return this;
}

ECS.Components.Appearance.prototype.name = 'appearance';

// Position
ECS.Components.Position = function ComponentPosition(params) {
    params = params || {};

    // generate random values if not passed in
    this.x = params.x || randomIntFromInterval(0, 700);
    this.y = params.y || randomIntFromInterval(0, 500);

    return this;
}

ECS.Components.Position.prototype.name = "position";

ECS.Components.Moving = function ComponentMoving(params) {
    params = params || {};

    // generate random speed
    this.speed = params.speed || randomIntFromInterval(1,10);

    directions = ["top","right","bottom","left"];
    this.direction = params.direction || randomChoice(directions);

    return this;
}

ECS.Components.Moving.prototype.name = "moving";