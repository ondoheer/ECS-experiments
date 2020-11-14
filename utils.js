function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function drawSquare(entity){
   // Build up the fill style based on the entity's color data
   fillStyle = `rgba(${entity.components.appearance.colors.r},${entity.components.appearance.colors.g},${entity.components.appearance.colors.b},1)`;
                

   ECS.context.fillStyle = fillStyle;            

   // draw a little black line around every rect
   ECS.context.strokeStyle = 'rgba(0,0,0,1)';

   // draw the rect
   ECS.context.fillRect( 
       entity.components.position.x - entity.components.appearance.size,
       entity.components.position.y - entity.components.appearance.size,
       entity.components.appearance.size * 2,
       entity.components.appearance.size * 2
   );
   // stroke it
   ECS.context.strokeRect(
       entity.components.position.x - entity.components.appearance.size,
       entity.components.position.y - entity.components.appearance.size,
       entity.components.appearance.size * 2,
       entity.components.appearance.size * 2
   );
}

function drawCircle(entity){
  fillStyle = `rgba(${entity.components.appearance.colors.r},${entity.components.appearance.colors.g},${entity.components.appearance.colors.b},1)`;
                

   ECS.context.fillStyle = fillStyle;            

   // draw a little black line around every rect
   ECS.context.strokeStyle = 'rgba(0,0,0,1)';

    ECS.context.beginPath();
    ECS.context.arc(entity.components.position.x, entity.components.position.y, entity.components.appearance.size/4, 0, Math.PI * 2, false);
    ECS.context.fill();
}