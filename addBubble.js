// The name of the new mapping, you could change the “example.triggerExample” to anything you want
var MAPPING_NAME = "com.highfidelity.controllers.add";
 
// Create a new mapping object, do not change this line of code
var mapping = Controller.newMapping(MAPPING_NAME);
 
// Add a route to the mapping object
 mapping.from(Controller.Standard.RT).to(addBubble());
 
//Enable the new mapping, do not change this line of code
 Controller.enableMapping(MAPPING_NAME);
 
// Disable the new mapping when the script ends, do not change this line of code
 Script.scriptEnding.connect(function () {
     Controller.disableMapping(MAPPING_NAME);
});

// Create a bubble
function addBubble() {
	var height = Vec3.sum(MyAvatar.getEyePosition(), Quat.getFront(Camera.getOrientation()));
	Vec3.print("height", height);
	var propertiesSphere = {
		type: "Model",
		modelURL: "http://hifi-content.s3.amazonaws.com/alan/dev/Glass-Sphere-4.fbx",
		dimensions: {x: 0.2, y: 0.2, z: 0.2},
		position: height,
		dynamic: true,
		collisionless: true,
		script: Script.resolvePath("changeColorOnClickDown.js")
	};
	var bubble = Entities.addEntity(propertiesSphere);
	print(bubble); // bubble ID
	
	var propertiesText = {
		type: "Text",
		parentID: bubble,
		text: "Bubble Test",
		lineHeight: 12,
		faceCamera: true,
		backgroundColor: {red: 255, green: 255, blue: 255},
		textColor: {red: 0, green: 0, blue: 0}
	}
	Entities.addEntity(propertiesText);
}