'use strict';

/*global describe:false, it:false*/

const waitFor = require('./index.js');
const assert = require('assert');

describe('export', () => {
	it('Correctly makes the function use the given promise implementation', () => {
		const MyPromiseImp = class MyPromiseImp extends Promise {
		};
		const otherWaitFor = waitFor.use(MyPromiseImp);
		assert(
			otherWaitFor(() => true) instanceof MyPromiseImp,
			'Wrong promise implemetation'
		);
	});

	it('Defaults to the native promise implementation', () => {
		assert(
			waitFor(() => true) instanceof Promise,
			'Wrong promise implementation'
		);
	});
});

describe('waitFor', () => {
	it('Resolves once the condition is met', () => {
		let i = 0;
		setInterval(() => i++, 5);
		return waitFor(() => i >= 5);
	});

	it('Rejects the error when the condition causes an error', () =>
		waitFor(() => { throw new Error('WOOOOOOOO'); })
		.then(() => assert.fail('Resolved', 'Rejected'), e => {
			assert(e instanceof Error, 'Rejected value is not an error');
			assert(e.message = 'WOOOOOOOO', 'error is incorrect');
		})
	);
});
