// Create a bubble
function addBubble() {
	// TODO: determine bubble's distance away from the avatar's face
	var height = MyAvatar.getDefaultEyePosition();
	var properties = {
	  type: "Sphere",
	  position: height
	};

	var bubble = Entities.addEntity(properties);
}


addBubble()

// The name of the new mapping
var MAPPING_NAME = "com.highfidelity.controllers.example.triggerExample";

// Create a new mapping object
var mapping = Controller.newMapping(MAPPING_NAME);

// Add a route to the mapping object
 mapping.from(Controller.Standard.RT).to(function (value) {
     print("Right trigger is " + value);
 });

//Enable the new mapping
 Controller.enableMapping(MAPPING_NAME);

// Disable the new mapping when the script ends
 Script.scriptEnding.connect(function () {
     Controller.disableMapping(MAPPING_NAME);
});