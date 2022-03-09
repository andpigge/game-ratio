interface IElement {
	tag: string;
	className?: string;
	textContent?: string;
}

export default class CreateNode {
	private template: Element;

	createNode({ tag, className, textContent }: IElement) {
		this.template = document.createElement(tag);
		if (className) {
			this.template.classList.add(className);
		}
		if (textContent) {
			this.template.textContent = textContent;
		}
		return this.template;
	}
}
