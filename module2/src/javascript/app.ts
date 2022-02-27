const list = document.querySelectorAll('.list');

const coordinates = [
	{
		name: 4,
		x: 1,
		y: 1
	},
	{
		name: 4,
		x: 2,
		y: 1
	},
];

class Game {
	private spanEll!: HTMLSpanElement;
	x: number;
	y: number;
	name: number;

	constructor(x: number, y: number, name: number) {
		this.x = x;
		this.y = y;
		this.name = name;
	}

	private createSpan(name: number) {
		this.spanEll = document.createElement('span');
		this.spanEll.textContent = String(name);
		this.spanEll.classList.add('ell');
		return this.spanEll;
	}

	init(list: NodeListOf<Element>) {
		this.createSpan(this.name);
		Array.from(list)[this.y].children[this.x - 1].append(this.spanEll);
	}
}

coordinates.forEach(ell => {
	const game = new Game(ell.x, ell.y - 1, ell.name);
	game.init(list);
});