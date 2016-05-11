//  changeColorOnClickDown.js
//  two color options, alternate based off number of clicks (even/odd)
//  might want to link to a color panel
(function(){ 
    var clickedEven = false;
    this.clickDownOnEntity = function(entityID, mouseEvent) { 
        if (clickedEven){
            Entities.editEntity(entityID, { color: { red: 0, green: 255, blue: 255} });
            clickedEven = false;
        } else{
            Entities.editEntity(entityID, { color: { red: 255, green: 255, blue: 0} });
            clickedEven = true; 
        }
    };
})
