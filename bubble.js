// Create a bubble
function addBubble() {
	var height = Vec3.sum(MyAvatar.getEyePosition(), {x: 0, y: 0, z: -1});
	Vec3.print("height", height);
	var properties = {
		type: "Sphere",
		position: height,
		// attaches the color changing script
		script: Script.resolvePath("changeColorOnClickDown.js"),
		dynamic: true,
		collisionless: true,
		color: { red: 255, green: 105, blue: 180}
	};

	var bubble = Entities.addEntity(properties);
}

addBubble();