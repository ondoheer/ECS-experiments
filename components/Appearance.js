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