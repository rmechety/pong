const GameObjectProxyWrapper = {
	set(obj, prop, value) {
		if (prop in obj) {
			GO_HANDLER[prop](obj, value);
		} else {
			throw new Error("Property " + prop + " does not exist.");
		}
	},
};
const MovingObjectProxyWrapper = {
	set(obj, prop, value) {
		if (prop in obj) {
			MO_HANDLER[prop](obj, value);
		} else {
			throw new Error("Property " + prop + " does not exist.");
		}
	},
};

var Object_handler = function (type, options) {
	if (type === "GameObject") {
		return new Proxy(
			new GameObject(
				options.spritename,
				options.x,
				options.y,
				options.width,
				options.height,
				options.isvisible,
				options.iscollidable,
				options.uplimit,
				options.downlimit,
			),
			GameObjectProxyWrapper,
		);
	}
	if (type === "MovingObject") {
		return new Proxy(
			new MovingObject(
				options.spritename,
				options.x,
				options.y,
				options.width,
				options.height,
				options.isvisible,
				options.iscollidable,
				options.uplimit,
				options.downlimit,
				options.vx,
				options.vy,
			),
			MovingObjectProxyWrapper,
		);
	}
};
