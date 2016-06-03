var MAX_DISTANCE = 500;
// ropeID is the entityId of the rope, fromPosition is from where, and toPosition to where.
function connectRope(ropeId, fromPosition, toPosition) {
        var ropeObject = Entities.getEntityProperties(ropeId, ["dimensions"]);

        var rotation = Quat.multiply(Quat.lookAt(toPosition, fromPosition, Vec3.UP), {
            w: 0.707,
            z: 0,
            x: 0.707,
            y: 0
        });
        var distance = Vec3.distance(fromPosition, toPosition);
        if (distance >= MAX_DISTANCE) {
          Entities.deleteEntity(ropeId); 
          return;
        }

        var scale = ropeObject.dimensions;
        scale.y = distance;
        var between = Vec3.mix(fromPosition, toPosition, 0.5);

        Entities.editEntity(ropeId, {
            dimensions: scale,
            rotation: rotation,
            position: between
        });

    }

   // Create simple entity
   var rope = Entities.addEntity({
          type: "Cube", 
          name: "Rope",
          collisionless: true,
          dimensions: {x:0.25,y:0.25,z:0.25},
          position: MyAvatar.position
   });

   // Connects the entity with the id of rope, from MyAvatar position to the origin of the domain (0,0,0)
   connectRope(rope, MyAvatar.position, {x:0,y:0,z:0});