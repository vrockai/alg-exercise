const foo = require('../src/main.js');

describe("A suite", function() {
    it('should return correct value', function () {
        expect(foo('foo')).toBe('fookaz');
    });
});