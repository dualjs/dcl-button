# dcl-button

DCL Button widget. It is a Dual wrapper of bootstrap button.

It imports Twitter Bootstrap styles from `'dcl-bootstrap'` module automatically.

## Installation

    npm install dcl-button

## Usage

Create a button wit `new` keyword:

```javascript
var Button = require('dcl-button');

var b = new Button();
b.setCaption('hello world!');
b.setLook('primary');
```

...or declaratively:

```javascript
var D = require('dual');
var b = D.fromJSON([
  'button', //using alias 'button'
  {
    look: 'primary',
    caption: 'hello world!'
  }], {
  button : require('dcl-button') //declaring module 'dcl-button' as alias 'button'
});
```

Then use it:

```javascript
// - in another Dual node:
myDualNode.appendChild(b);

// - directly in DOM tree:
document.body.appendChild(b.domify());

// - on the server:
res.end(b.stringift());

```

## Buiding

1. All Dual and DCL parts are written in CommonJS, so `Browserify` is used for building JS.
2. Stylesheet is built with `grunt-dcl-resources` and `grunt-less`. Please, see `Gruntfile.js` demo task to find out how it is done.
