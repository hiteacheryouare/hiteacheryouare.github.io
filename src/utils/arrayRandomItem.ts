// grab a random item in an array
export const sample = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

// Fisher-Yates. Returns a new array rather than sorting in place.
export const shuffle = <T>(array: T[]): T[] => {
	const result = array.slice();
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}
	return result;
};

export default sample;