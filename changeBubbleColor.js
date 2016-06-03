// two color options, alternate based off number of clicks (even/odd)
// The name of the new mapping, you could change the “example.triggerExample” to anything you want
var MAPPING_NAME = "com.highfidelity.controllers.changeColor";
 
// Create a new mapping object, do not change this line of code
var mapping = Controller.newMapping(MAPPING_NAME);

// keeps track of whether or not the bubble is selected
var selected = false;

// Add a route to the mapping object
mapping.from(Controller.Standard.LT).to(function(entityID) { 
        if (selected){
            Entities.editEntity(entityID, { color: { red: 0, green: 255, blue: 255} });
            selected = false;
        } else{
            Entities.editEntity(entityID, { color: { red: 255, green: 255, blue: 0} });
            selected = true;
        }
});
 
//Enable the new mapping, do not change this line of code
Controller.enableMapping(MAPPING_NAME);
 
// Disable the new mapping when the script ends, do not change this line of code
Script.scriptEnding.connect(function () {
     Controller.disableMapping(MAPPING_NAME);
});