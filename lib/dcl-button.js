/*
 * dcl-button
 * https://github.com/dualjs/dcl-button
 *
 * Copyright (c) 2013 Mark
 * Licensed under the MIT license.
 */

var D = require('dual');
var Widget = require('dcl-widget');
require('dcl-bootstrap');

module.exports = Widget.extend({
    ATTRS: {
        enabled: {},
        caption: {
            textAsset: 'button'
        },
        block: {
            cssClass: 'btn-block',
            cssClassAsset: 'button'
        },
        size: {
            cssClass: {
                'large': 'btn-lg',
                'small': 'btn-sm',
                'tiny': 'btn-xs'
            },
            cssClassAsset: 'button'
        },
        look: {
            cssClass: {
                'default': 'btn-default',
                'primary': 'btn-primary',
                'warning': 'btn-warning',
                'danger': 'btn-danger',
                'success': 'btn-success',
                'info': 'btn-info',
                'link': 'btn-link'
            },
            cssClassAsset: 'button',
            init: 'default'
        },
        name: {
            htmlAttribute : 'name',
            htmlAttributeAsset : 'button'
        }
    },

    initStructure: function() {
        this.$ = D.fromJSON(['button', {
            'class:btn': true,
            'ui:asset': 'button'
        }]);
    },

    ready: function() {
        this.assets.button.listenTo('click');
        this.assets.button.on('dom.click', this.emit.bind(this, 'click'));
    },

    applyAttribute_enabled: function(v) {
        this.assets.button.setAttribute('disabled', !v);
    },

});