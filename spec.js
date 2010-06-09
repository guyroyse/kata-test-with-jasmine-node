var fs = require('fs')
eval(fs.readFileSync('jasmine-node.js'));
eval(fs.readFileSync('implementation.js'));

describe('A suite with some variables', function () {
});

jasmine.run();

