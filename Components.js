/**
 * Components for this demo
 * 
 * 
 */



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