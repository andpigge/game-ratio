import CreateNode from './CreateNode';
import Game from './Game';

const parentElement = document.querySelector('.game__list');
if (parentElement) {
	const game = new Game(new CreateNode, { parentElement, size: 25 });
}
