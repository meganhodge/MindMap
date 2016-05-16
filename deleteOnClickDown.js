//  deleteOnClickDown.js
//  this currently doesn't work if the changeColorOnClickDown is linked and running
//  need to figure out how to link this to another controller/trigger
(function(){ 
    var clickedEven = false;
    this.clickDownOnEntity = function(entityID, mouseEvent) { 
        Entities.deleteEntity(entityID);
    };
})
