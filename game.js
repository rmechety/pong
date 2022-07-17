function init_player(n) {
	let sprite = PIXI.Sprite.from("stick.png");
	sprite.height = HEIGHT / 5;
	sprite.width = WIDTH / 10;

	n == 1 ? (sprite.x = WIDTH / 100) : (sprite.x = WIDTH - (WIDTH / 100) * 10);

	sprite.y = HEIGHT / 2;
	sprite.movingoffset = 4;
	sprite.uplimit = 0;
	sprite.downlimit = HEIGHT - sprite.height;
	app.stage.addChild(sprite);

	return sprite;
}

let app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);
const HEIGHT = app.view.height;
const WIDTH = app.view.width;

app.stage.interactive = true;
app.stage.on("pointermove", getMousepos);

mousepos = { x: 0, y: 0 };
function getMousepos(e) {
	let pos = e.data.global;
	mousepos.x = pos.x;
	mousepos.y = pos.y;
	movePos();
}

function movePos() {
	let baseoffset = 5;
	if (Math.abs(mousepos.y - player.y) < 5) {
		baseoffset = Math.abs(mousepos.y - player.y);
	}

	let offset = baseoffset * (mousepos.y > player.y ? 1 : -1);

	if (player.y + offset > player.downlimit || player.y + offset < player.uplimit) return;

	player.y += offset;
}

let player = init_player(1);
let player2 = init_player(0);

function update(player) {
	player.y += player.movingoffset;
	if (player.y > player.downlimit) {
		player.movingoffset = -4;
	} else if (player.y < player.uplimit) {
		player.movingoffset = 4;
	}
}
setInterval(() => {
	// update(player);
	update(player2);
	// console.log(PIXI.FederatedMouseEvent);
	// console.log(mousepos.y)
	if (player.y != mousepos.y) movePos();
}, 1000 / 60);
