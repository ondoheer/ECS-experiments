/**
 * keepSquaresAtMax.js
 *  This script contains the game logic acts as a controller for the Entity 
 *  Component System that makes the system always have 20 squares drawn
 */

 ECS.systems.generate = function systemKeepSquaresAtMax(entities){
     
    if (ECS.Entity.prototype._count < 20 ){// should come from config file
        entity = ECS.Assemblages.Square()
        entities[entity.id] = entity;
        //entity.print()
    } 
     
 }