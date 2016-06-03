// The name of the new mapping, you could change the “example.triggerExample” to anything you want
var MAPPING_NAME = "com.highfidelity.controllers.delete";
 
// Create a new mapping object, do not change this line of code
var mapping = Controller.newMapping(MAPPING_NAME);
 
// Add a route to the mapping object
 mapping.from(Controller.Standard.LT).to(function(entityID) { 
        Entities.deleteEntity(entityID);
});
 
//Enable the new mapping, do not change this line of code
 Controller.enableMapping(MAPPING_NAME);
 
// Disable the new mapping when the script ends, do not change this line of code
 Script.scriptEnding.connect(function () {
     Controller.disableMapping(MAPPING_NAME);
});