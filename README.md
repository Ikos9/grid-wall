# Grid Wall

Straightforward package that will simply create a wall like grid moving its children it the higher position available.<br>
It tracks new children and if their height change and flow accordingly.

## Features

- Lightweight (~5KB minified)
- Tracks new children
- Tracks changes in children dimensions
- Custom transitions
- Auto handle resize
- Plug and play

## Installing

Import as a module

```bash
npm install --save grid-wall
# or
yarn add grid-wall
```

or directly in the html:

```html
<script src="grid-wall.min.js"></script>
```

## Example

Basic usage:

```js
const grid = document.querySelector('.grid');
const gridWall = new GridWall({
  container: grid,
  childrenWidthInPx: 100,
});
```

## API

#### `new GridWall(params: object)`

Initialize the module.

| Parameter             | Type                    | Description                                               |
| --------------------- | ----------------------- | --------------------------------------------------------- |
| **container**         | HTMLElement             | html element                                              |
| **childrenWidthInPx** | number                  | children width in px                                      |
| enableResize          | boolean                 | it will track resize event and adapt the container width  |
| resizeDebounceInMs    | number                  | debounce the resize event, default is 100ms               |
| margin                | center \| left \| right | it will place the remaining space in the position defined |
| insertStyle           | CSSStyleDeclaration     | style of a child when added to the container              |
| beforeStyle           | CSSStyleDeclaration     | style of a child before the first reflow                  |
| afterStyle            | CSSStyleDeclaration     | style of a child after the first reflow                   |

#### `resize(containerWidthInPx: number): void`

Resize container width the reflow the children.

#### How to use the style properties

The children will fade in when added, but then will transition when moved.

```js
new GridWall({
  container: element,
  childrenWidthInPx: 200,
  insertStyle: {
    opacity: '0',
    transition: 'opacity 0.2s ease-in, transform 0s ease-in',
  },
  beforeStyle: {
    opacity: '1',
  },
  afterStyle: {
    transition: 'opacity 0.2s ease-in, transform 0.2s ease-in',
  },
});
```

The children will transition to position also when added.

```js
new GridWall({
  container: element,
  childrenWidthInPx: 200,
  insertStyle: {
    transition: 'transform 0.2s ease-in',
  },
  afterStyle: {
    transition: 'transform 0.2s ease-in',
  },
});
```

## Licence

[MIT](LICENSE) © [Federico Moretti](https://federicomoretti.dev)
