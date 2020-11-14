/**
 * movement.js
 *  This script contains the game logic acts as a controller for the Entity 
 *  Component System that moves the items randomly accross the screen
 */

 ECS.systems.movement = function systemMovement(entities) {
     // this system will move the entities in the direction and speed they have so that they update their position
     var curEntity;
     // iterate over the entities
     for(var entityId in entities){
        curEntity = entities[entityId];
        // curEntity.print();
        if(curEntity.components.moving){
            switch (curEntity.components.moving.direction) {
                case "top":
                    curEntity.components.position.y -= curEntity.components.moving.speed;
                    break;
                case "right":
                    curEntity.components.position.x += curEntity.components.moving.speed;
                    break;

                case "bottom":
                    curEntity.components.position.y += curEntity.components.moving.speed;
                    break;
                case "left":
                    curEntity.components.position.x -= curEntity.components.moving.speed;
                    break;

            
                default:
                    break;
            }
        }
     }
 }