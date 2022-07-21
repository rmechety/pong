function w_spritename(obj, spritename) {
	obj.spritename = spritename;
	if (spritename == undefined) obj.spritename = "default.jpg";
	obj.hide();
	obj.sprite = PIXI.Sprite.from(obj.spritename);
	obj.display();
}
function w_x(obj, x) {
	obj.x = x;
	obj.sprite.x = obj.x;
}
function w_y(obj, y) {
	obj.y = y;
	obj.sprite.y = obj.y;
}
function w_width(obj, width) {
	obj.width = width;
	obj.sprite.width = obj.width;
}
function w_height(obj, height) {
	obj.height = height;
	obj.sprite.height = obj.height;
}

function w_isvisible(obj, isvisible) {
	if (isvisible != obj.isvisible) {
		if (isvisible) {
			obj.show();
		} else {
			obj.hide();
		}
	}
	obj.isvisible = isvisible;
}

function w_iscollidable(obj, iscollidable) {
	obj.iscollidable = iscollidable;
}
function w_limit(obj, limit) {
	obj.limit = limit;
}

function w_vx(obj, vx) {
	obj.vx = vx;
}

function w_vy(obj, vy) {
	obj.vy = vy;
}

function w_default() {}

// GameObject wrapper for proxy
const GO_WRAPPER = {
	spritename: w_spritename,
	x: w_x,
	y: w_y,
	width: w_width,
	height: w_height,
	isvisible: w_isvisible,
	iscollidable: w_iscollidable,
	limit: w_limit,
};

const MO_WRAPPER = {
	spritename: w_spritename,
	x: w_x,
	y: w_y,
	width: w_width,
	height: w_height,
	isvisible: w_isvisible,
	iscollidable: w_iscollidable,
	limit: w_limit,
	vx: w_vx,
	vy: w_vy,
};
