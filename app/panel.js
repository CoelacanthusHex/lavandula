const c = lavandula.create
const h = lavandula.hyperscript

class Panel {
	toggle() {
		this.$.toggleClass('lavandula-hide')
	}
	
	constructor() {
		this.$ = $(
			h('div#lavandula-panel.lavandula-body.lavandula-hide'))
			.append(this.$info = $(
				h('div#lavandula-panel-info.lavandula-panel-card',
					h('div.lavandula-card-primary',
						h('div.lavandula-card-primary-title'), $('title').first().html()))))
			.append(this.$buttons = $(
				h('div#lavandula-panel-buttons.lavandula-panel-card')))
			.append(this.$tools = $(
				h('div#lavandula-panel-tools')))
			.append(this.$reader = $(
				h('div#lavandula-panel-reader')))
	}
}

module.exports = new Panel()