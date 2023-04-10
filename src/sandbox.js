import Repeatable  from "./main"

new Repeatable({
	template: `.person-template`,
	button: `.add-person`,
	removeButton: `.remove-person`,
	emptyState: `.no-people`,
	min: 1,
	max: 5,
})

const form = document.querySelector(`#people-form`)
form.addEventListener(`submit`, e => {
	e.preventDefault()
	const data = new FormData(form)
	const obj = {}
	for (const [key, value]  of data.entries()) {
		obj[key] = value
	}
	alert(JSON.stringify(obj, null, 2))
})