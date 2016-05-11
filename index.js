'use strict';

/**
 * Waits for the condition function to return a truthy value.
 * @param  {Function(): Promise} Promise An ES6-compatible Promise implementation.
 * @param  {Function(): *} condition The function that will be called to check the condition.
 * @param {Number} [interval=50] The interval in which to check the condition.
 * @return {Promise.<*>} Resolves what the either condition or value function returned.
 */
function waitFor(Promise, condition, interval) {
	interval = interval || 50;
	return new Promise((resolve, reject) => {
		const int = setInterval(() => {
			try {
				const isDone = condition();
				if (isDone) {
					resolve(isDone);
					clearInterval(int);
				}
			} catch (error) {
				clearInterval(int);
				reject(error);
			}
		}, interval);
	});
}

function use (Promise) {
	return waitFor.bind(null, Promise);
}

module.exports = use(Promise);
module.exports.use = use;