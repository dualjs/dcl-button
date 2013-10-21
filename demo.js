/*jshint browser:true*/
var D = require('dual');
var Button = require('./');

var demo = D.fromJSON([
    'div', [
        ['p', [
            ['button', {
                caption: 'Hello',
                look: 'warning'
            }],
            ['button', {
                caption: 'button',
                look: 'primary'
            }],
            ['button', {
                caption: 'world!',
                look: 'success'
            }]
        ]],
        ['p', [
            ['button', {
                caption: 'Small example',
                size: 'tiny'
            }],
            ' of ', ['button', {
                caption: 'big',
                size: 'large'
            }],
            ['button', {
                caption: 'possibilities.'
            }]
        ]],
        ['p', [
            ['button', {
                caption: 'Change look',
                'ui:asset': 'btnLook'
            }]
        ]],
        ['p', [
            ['button', {
                caption: 'Change size',
                'ui:asset': 'btnSize',
                size: 'large'
            }]
        ]]
    ]
], {
    button: Button
});

var assets = D.utils.indexBy(demo, false, 'ui:asset');

var currentLook = 0,
    currentSize = 0;
var looks = [
    'default',
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'link'
];
var sizes = [
    'large',
    null,
    'small',
    'tiny'
];

assets.btnLook.on('click', function() {
    currentLook = (currentLook + 1) % looks.length;
    this.setLook(looks[currentLook]);
});

assets.btnSize.on('click', function() {
    currentSize = (currentSize + 1) % sizes.length;
    this.setSize(sizes[currentSize]);
});

document.body.appendChild(demo.domify());