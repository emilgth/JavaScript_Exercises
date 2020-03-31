const readfile = require('./mymodule');
const fsExtra = require('fs-extra');


beforeEach(async function () {
	await fsExtra.mkdirSync('./learnyounode/sup');
	await fsExtra.writeFileSync('./learnyounode/sup/heythere.js');
});

describe('readFile', function () {
	it('should return filepath', function (done) {
		readfile('./learnyounode/sup', 'js', (err, list) => {
			if (list.length === 1) {
				done()
			}
		});
	});
});

afterEach(async function () {
	await fsExtra.removeSync('./learnyounode/sup')
});
