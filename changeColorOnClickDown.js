//  changeColorOnClickDown.js
(function(){ 
    var selected = false;
    this.clickDownOnEntity = function(entityID, mouseEvent) { 
        if (selected){
            Entities.editEntity(entityID, { color: { red: 0, green: 255, blue: 255} });
            selected = false;
        } else{
            Entities.editEntity(entityID, { color: { red: 255, green: 255, blue: 0} });
            selected = true;
        }
    };
})