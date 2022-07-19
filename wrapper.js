function w_spritename(spritename) {
	this.spritename = spritename;
	this.sprite = PIXI.Sprite.from(this.spritename);
	this.display();
}
function w_x(x) {
	this.x = x;
	this.sprite.x = this.x;
}
function w_y(y) {
	this.y = y;
	this.sprite.y = this.y;
}
function w_width(width) {
	this.width = width;
	this.sprite.width = this.width;
}
function w_height(height) {
	this.height = height;
	this.sprite.height = this.height;
}

function w_isvisible(isvisible) {
	this.isvisible = isvisible;
}
function w_iscollidable(iscollidable) {
	this.iscollidable = iscollidable;
}
function w_limit(limit) {
	this.limit = limit;
}

function w_vx(vx) {
	this.vx = vx;
}

function w_vy(vy) {
	this.vy = vy;
}

function w_default() {}

// GameObject wrapper for proxy
GO_HANDLER = {
	spritename: w_spritename,
	x: w_x,
	y: w_y,
	width: w_width,
	height: w_height,
	isvisible: w_isvisible,
	iscollidable: w_iscollidable,
	limit: w_limit,
};

MGO_HANDLER = {
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
