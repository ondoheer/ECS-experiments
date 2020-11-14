ECS.Entity = function Entity(){
    // pseudo random ID should allow us to have uniqueIDs
    this.id = (+new Date()).toString(16) + (Math.random() * 100000000 | 0).toString(16) +
    ECS.Entity.prototype._count;

    // increment the counter
    ECS.Entity.prototype._count++;

    // Entity Components hashmap
    this.components = {};

    return this;
}

// Track entities created
ECS.Entity.prototype._count = 0;

ECS.Entity.prototype.addComponent = function addComponent (component){
    // Add component data to the entity
    // NOTE: The component must have a name property (which is defined as 
    // a prototype protoype of a component function)
    this.components[component.name] = component;
    return this;
}

ECS.Entity.prototype.removeComponent = function removeComponent(componentName){
    // Remove component data by removing the reference to it.
    // Allows either a component function or a string of a component name to be
    // passed in
    var name = componentName; // assumes string was passed as argument

    if(typeof componentName === 'function'){
        // get the name from the passed in component function
        name = componentName.prototype.name;
    }

    // remove it's data by removing the reference to it
    delete this.components[name];
    return this;
}

ECS.Entity.prototype.print = function print(){
    // log information about the entity
    console.log(JSON.stringify(this, null, 4));
    return this;
}