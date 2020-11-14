// Shape

ECS.Components.Shape = function ComponentShape(params) {
    params = params || {}

    this.shape = params.shape || "square";

    return this;
}

ECS.Components.Shape.prototype.name = 'shape';