import CreateNode from './CreateNode';

export interface IGame {
	parentElement: Element;
	size: number;
}

export default class Game {
	private parentElement: Element;
	private createNode: CreateNode;
	private randomNumber: number = .9;

	constructor(createNode: CreateNode, { parentElement, size }: IGame) {
		this.createNode = createNode;
		this.parentElement = parentElement;

		for (let i = 1; i <= size; i++) {
			const li = this.createNode.createNode({ tag: 'li', className: 'game__item' });
			this.createRandomItem(li);
			this.parentElement.append(li);
		}
	}

	private createRandomItem(parentElement: Element) {
		if (Math.random() > .8) {
			const textContent = String(Math.random() > this.randomNumber ? 4 : 2);

			const div = this.createNode.createNode({ tag: 'div', className: 'cell' });
			const p = this.createNode.createNode({ tag: 'p', className: 'cell__text', textContent });

			div.append(p);
			parentElement.append(div);
		}
	}
}
