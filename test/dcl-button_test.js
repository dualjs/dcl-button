'use strict';

var Button = require('../lib/dcl-button.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['button'] = {
    setUp: function(done) {
        // setup here
        done();
    },
    'look and size': function(test) {
        test.expect(1);

        var b = new Button();
        b.setLook('primary');
        b.setSize('large');
        test.equal(b.stringify(), '<button class="btn btn-primary btn-lg"></button>');

        test.done();
    },
    'enabled': function(test) {
        test.expect(1);

        var b = new Button();
        b.setEnabled(false);
        test.equal(b.stringify(), '<button class="btn btn-default" disabled="disabled"></button>');

        test.done();
    },
    'block': function(test) {
        test.expect(1);

        var b = new Button();
        b.setBlock(true);
        test.equal(b.stringify(), '<button class="btn btn-default btn-block"></button>');

        test.done();
    },
    'caption': function(test) {
        test.expect(1);

        var b = new Button();
        b.setCaption('hello');
        test.equal(b.stringify(), '<button class="btn btn-default">hello</button>');

        test.done();
    },
    'name': function(test) {
        test.expect(1);

        var b = new Button();
        b.setName('hello');
        test.equal(b.stringify(), '<button class="btn btn-default" name="hello"></button>');

        test.done();
    }
};