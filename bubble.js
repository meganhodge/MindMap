// Create a bubble
function addBubble() {
	// TODO: determine bubble's distance away from the avatar's face
	var height = MyAvatar.getDefaultEyePosition();
	var properties = {
		type: "Sphere",
		position: height,
		// attaches the color changing script
		script: Script.resolvePath("changeColorOnClickDown.js"),
		dynamic: true,
		// velocity: {
		// 	x: 0,
		// 	y: 0,
		// 	z: 0
		// },
		// gravity: {
		// 	x: 0,
		// 	y: 0,
		// 	z: -1
		// }
	};

	var bubble = Entities.addEntity(properties);
}

addBubble();