class Limits {
	constructor(up, down) {
		this.up = up;
		this.down = down;
	}
}

class GameObject {
	// x , y , width , height , isvisible , iscollidable ,sprite, uplimit , downlimit
	constructor(
		spritename = "default.jpg",
		x = 0,
		y = 0,
		width = 0,
		height = 0,
		isvisible = true,
		iscollidable = true,
		uplimit = 0,
		downlimit = 0,
	) {
		this.spritename = spritename;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.limit = new Limits(uplimit, downlimit);
		this.isvisible = isvisible;
		this.iscollidable = iscollidable;
		this.sprite = PIXI.Sprite.from(this.spritename);
	}

	display() {
		this.sprite.x = this.x;
		this.sprite.y = this.y;
		this.sprite.width = this.width;
		this.sprite.height = this.height;
		app.stage.addChild(this.sprite);
	}
	hide() {
		app.stage.removeChild(this.sprite);
		this.isvisible = false;
	}
	show() {
		app.stage.addChild(this.sprite);
		this.isvisible = true;
	}
	collide(other) {
		// to test
		if (!(this.iscollidable && other.iscollidable)) return false;
		if (
			this.x < other.x + other.width &&
			this.x + this.width > other.x &&
			this.y < other.y + other.height &&
			this.y + this.height > other.y
		) {
			return true;
		}
		return false;
	}
}

class MovingObject extends GameObject {
	// gameobject + vx,vy,targetx,targety
	constructor(
		spritename = "default.jpg",
		x = 0,
		y = 0,
		width = 0,
		height = 0,
		isvisible = true,
		iscollidable = true,
		uplimit = 0,
		downlimit = 0,
		vx = 0,
		vy = 0,
	) {
		super(spritename, x, y, width, height, isvisible, iscollidable, uplimit, downlimit);
		this.vx = vx;
		this.vy = vy;
	}
	move() {
		this.x += this.vx;
		this.y += this.vy;
	}
}
