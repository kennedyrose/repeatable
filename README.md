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

## Options

### Empty State

If you want to show a message when there are no elements, you can pass an `emptyState` option. It accepts either a query selector string or an element. This element will show when there are no elements and hide when there are.

```html
<div class="empty-state">No people added yet.</div>
```

```javascript
new Repeatable({
	// ...
	emptyState: `.empty-state`,
})
```

### Start Empty

Set `startEmpty` to `true` to start with no elements and an empty state.

```javascript
new Repeatable({
	// ...
	startEmpty: true,
})
```

### Min/Max Elements

Set `min` and `max` to limit the number of elements that can be added. If `min` is set, the remove button will be disabled when there are fewer than that number of elements. If `max` is set, the add button will be disabled when there are more than that number of elements.

```javascript
new Repeatable({
	// ...
	min: 3,
	max: 6,
})
```