// Create a bubble
function addBubble() {
	var height = Vec3.sum(MyAvatar.getEyePosition(), Quat.getFront(Camera.getOrientation()));
	Vec3.print("height", height);
	var properties = {
		type: "Sphere",
		position: height,
		dynamic: true,
		collisionless: true
	};
	var bubble = Entities.addEntity(properties);
}

addBubble();