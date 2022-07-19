const GameObjectProxyWrapper = {
	set(obj, prop, value) {
		if (prop in obj) {
			GO_HANDLER[prop](value);
		} else {
			throw new Error("Property " + prop + " does not exist.");
		}
	},
};
const MovingGameObjectProxyWrapper = {
	set(obj, prop, value) {
		if (prop in obj) {
			MGO_HANDLER[prop](value);
		} else {
			throw new Error("Property " + prop + " does not exist.");
		}
	},
};

function Object_handler(type, options) {
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
	if (type === "MovingGameObject") {
		return new Proxy(
			new MovingGameObject(
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
			MovingGameObjectProxyWrapper,
		);
	}
}
