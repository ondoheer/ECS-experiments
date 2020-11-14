/**
 * render.js
 *  This script contains the game logic acts as a controller for the Entity 
 *  Component System
 */

function clearCanvas () {
    // Store the current transformation matrix
    ECS.context.save();

    // Use the identity matrix while clearing the canvas
    ECS.context.setTransform(1, 0, 0, 1, 0, 0);
    ECS.context.clearRect(0, 0, ECS.$canvas.width, ECS.$canvas.height);

    // Restore the transform
    ECS.context.restore();
}

// ECS - System - Render
// --------------------------------------
ECS.systems.render = function systemRender ( entities ) {
    // Here, we've implemented systems as functions which take in an array of
    // entities. An optimization would be to have some layer which only 
    // feeds in relevant entities to the system, but for demo purposes we'll
    // assume all entities are passed in and iterate over them.

    // This happens each tick, so we need to clear out the previous rendered
    // state
    clearCanvas();

    var curEntity, fillStyle; 

    // iterate over all entities
    for( var entityId in entities ){
        curEntity = entities[entityId];

        // Only run logic if entity has relevant components
        // For rendering, we need appearance and position. 
        if( curEntity.components.appearance && curEntity.components.position && curEntity.components.shape ){
            // console.log(curEntity)
            switch (curEntity.components.shape.shape) {
                case "square":
                    
                    drawSquare(curEntity);
                    break;
                case "circle":
                    drawCircle(curEntity);
                    break;
            
                default:
                    break;
            }

        }
    }
};