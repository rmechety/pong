function init_player(n, spritename) {
	let pos = { x: n == 0 ? WIDTH / 100 : WIDTH - (WIDTH / 100) * 10, y: HEIGHT / 2 };

	let player = Object_handler("MovingObject", {
		spritename: spritename,
		x: pos.x,
		y: pos.y,
		width: WIDTH / 10,
		height: HEIGHT / 5,
		isvisible: true,
		iscollidable: true,
		uplimit: 0,
		downlimit: HEIGHT - HEIGHT / 5,
		vx: 0,
		vy: 5,
	});

	player.display();

	return player;
}

function getMousepos(e) {
	let pos = e.data.global;
	mousepos.x = pos.x;
	mousepos.y = pos.y;
	movePos(player2);
	1;
}

function creategame() {
	let app = new PIXI.Application({ width: 640, height: 360 });
	document.body.appendChild(app.view);
	app.stage.interactive = true;
	app.stage.on("pointermove", getMousepos);
	return app;
}

app = creategame();
const HEIGHT = app.view.height;
const WIDTH = app.view.width;

var mousepos = { x: 0, y: 0 };

let player = init_player(1);
let player2 = init_player(0, "stick.png");

function update(player) {
	player.y += player.vy;
	if (player.y > player.limit.down) {
		player.vy = -4;
	} else if (player.y < player.limit.up) {
		player.vy = 4;
	}
}

function movePos(tomove) {
	let baseoffset = tomove.vy;
	if (Math.abs(mousepos.y - tomove.y) < tomove.y) {
		baseoffset = Math.abs(mousepos.y - tomove.y);
	}

	let offset = baseoffset * (mousepos.y > tomove.y ? 1 : -1);

	if (tomove.y + offset > tomove.limit.down || tomove.y + offset < tomove.limit.up) {
		// debugger;
		return;
	}
	// debugger;

	tomove.y += offset;
}

setInterval(
	(player, player2) => {
		update(player);
		if (player.y != mousepos.y) movePos(player2);
	},
	1000 / 60,
	player,
	player2,
);

// setTimeout(() => {
// 	debugger;
// }, 1000);

// setInterval(() => {
// 	// player2.spritename = player2.spritename == "default.jpg" ? "stick.png" : undefined;
// 	// player2.isvisible = !player2.isvisible;
// }, 1000);
