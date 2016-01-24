'use strict';

/**
 * Waits for the condition function to return a truthy value.
 * @param  {function(): *} condition The function that will be called to check the condition.
 * @param  {function(param: *): *} [value=condition]
 * The function that will be called to determine the resolve value, if this function is not
 * condition then the result of the the condition check function will be passed to it.
 * @param {number} [interval=50] The interval in which to check the condition.
 * @return {Promise<*>} Resolves what the either condition or value function returned.
 */
const nativePromise = Promise;
module.exports = Promise => function waitFor(condition, value, interval) {
	Promise = Promise || nativePromise;
	value = value || condition;
	interval = interval || 50;
	return new Promise((resolve, reject) => {
		const int = setInterval(() => {
			try {
				const isDone = condition();
				if (isDone) {
					if (condition === value) {
						resolve(isDone);
					} else {
						resolve(value(isDone));
					}
					clearInterval(int);
				}
			} catch (error) {
				clearInterval(int);
				reject(error);
			}
		}, interval);
	});
};
