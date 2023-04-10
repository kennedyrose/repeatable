# @kennedyrose/repeatable

A simple, lightweight, and no-dependency library for repeating elements with a button click. Useful for input groups in forms that need to be repeated so the user can submit an arbitrary number of items.

## Installation

```bash
npm install @kennedyrose/repeatable
```

or

```bash
yarn add @kennedyrose/repeatable
```

## Usage

```html
<ul>
	<li class="person-template">
		<input name='people[][firstName]' placeholder='First Name' />
		<input name='people[][lastName]' placeholder='Last Name' />
		<button class="remove-person">Remove person</button>
	</li>
</ul>

<button class="add-person">Add person</button>
```

```javascript
import Repeatable from '@kennedyrose/repeatable'

new Repeatable({
	template: `.person-template`,
	button: `.add-person`,
	removeButton: `.remove-person`,
})
```