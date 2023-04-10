const defaultOptions = {
	startEmpty: true,
	incrementInputs: true,
}

export default class Repeatable{
	constructor(userOptions){
		this.options = {...defaultOptions, ...userOptions}
		this.total = 0


		// Create empty state
		if(this.options.emptyState){
			this.emptyState = this.options.emptyState
			if(typeof this.emptyState === `string`){
				this.emptyState = document.querySelector(this.emptyState)
			}
			this.emptyState.style.display = `block`
		}

		// Create template
		let template = this.options.template
		if(typeof template === `string`){
			template = document.querySelector(template)
		}
		this.parent = template.parentNode
		this.template = template.cloneNode(true)
		this.parent.removeChild(template)

		// Create first item
		if(!this.options.startEmpty){
			this.create()
		}

		// Add event listeners
		if(this.options.button){
			this.button = this.options.button
			if(typeof this.button === `string`){
				this.button = document.querySelector(this.button)
			}
			this.button.addEventListener(`click`, e => {
				e.preventDefault()
				this.create()
			})
		}
		
	}
	create(){
		let el = this.template.cloneNode(true)

		// Add remove button
		if(this.options.removeButton){
			let removeButton = el.querySelector(this.options.removeButton)
			if(removeButton){
				removeButton.addEventListener(`click`, e => {
					e.preventDefault()
					this.remove(el)
				})
			}
		}

		// Add element
		this.parent.appendChild(el)
		this.total++

		// Increment inputs
		this.incrementInputs()

		this.toggleEmpty(`hide`)
	}
	remove(el){
		this.parent.removeChild(el)
		this.total--
		if(this.total < 0) this.total = 0
		this.incrementInputs()
		if(this.total === 0){
			this.toggleEmpty(`show`)
		}
	}
	toggleEmpty(state){
		if(this.emptyState){
			this.emptyState.style.display = state === `show` ? `block` : `none`
		}
	}
	incrementInputs(){
		if(this.options.incrementInputs){
			let items = this.parent.querySelectorAll(this.options.template)
			for(let i = 0; i < items.length; i++){
				let inputs = items[i].querySelectorAll(`input, select, textarea`)
				for(let j = 0; j < inputs.length; j++){
					let input = inputs[j]
					let name = input.getAttribute(`name`)
					if(name){
						// Use regex since it may or may not have a number in []
						// people[][firstName] => people[0][firstName]
						const newName = name.replace(/\[[0-9]*\]/, `[${i}]`)
						console.log(`newName`, newName)
						input.setAttribute(`name`, newName)


					}
				}
			}
		}
	}
}