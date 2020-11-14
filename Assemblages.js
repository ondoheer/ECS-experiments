/* =========================================================================
 *
 * Assemblages.js
 *  Contains assemblages. Assemblages are essentially entity "templates"
 *
 * ========================================================================= */

 ECS.Assemblages = {
     // Each assemblage creates an entity then returns it. The entity can 
    // then have components added or removed - this is just like a helper
    // factory to create objects which can still be modified

    Square: function Square(){
        entity = new ECS.Entity();
        entity.addComponent( new ECS.Components.Appearance());
        entity.addComponent( new ECS.Components.Position());
        entity.addComponent(new ECS.Components.Moving());
        return entity;
    }
 }