const h = lavandula.hyperscript

class Button {
	constructor() {
		this.$ = $(
			h('div#lavandula-toggle-button.lavandula-body'))
			.click(() => {
				lavandula.panel.toggle()
				lavandula.reader.toggle()
				if (!lavandula.reader.rendered) {
					lavandula.reader.render()
				}
			})
	}
}

module.exports = new Button()