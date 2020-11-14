/**
 * removeFromCanvas.js
 *  This script contains the game logic acts as a controller for the Entity 
 *  Component System that removes the items if they leave the canvas
 */


 ECS.systems.remove = function systemRemoveFromCanvas(entities){
     var curEntity;

     for(var entityId in entities){
         curEntity = entities[entityId];

         if(curEntity.components.position.x  > ECS.$canvas.width ||
            curEntity.components.position.x + curEntity.components.appearance.size < 0 ||
            curEntity.components.position.y > ECS.$canvas.height ||
            curEntity.components.position.y + curEntity.components.appearance.size < 0){
            // curEntity.print()
             delete ECS.entities[entityId];
             ECS.Entity.prototype._count--;

             break;
         }
     }
 }