//  deleteOnClickDown.js
(function(){ 
    var clickedEven = false;
    this.clickDownOnEntity = function(entityID, mouseEvent) { 
        Entities.deleteEntity(entityID);
    };
})