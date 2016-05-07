'use strict';

/**
 * Waits for the condition function to return a truthy value.
 * @param  {Function(): *} condition The function that will be called to check the condition.
 * @param {Number} [interval=50] The interval in which to check the condition.
 * @return {Promise.<*>} Resolves what the either condition or value function returned.
 */
const nativePromise = Promise;
module.exports = Promise => function waitFor(condition, interval) {
	Promise = Promise || nativePromise;
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
};
