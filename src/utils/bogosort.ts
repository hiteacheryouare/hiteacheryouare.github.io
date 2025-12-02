import shuffle from 'lodash/shuffle';

type ProgressCallback = (attempts: number, currentArray: number[]) => void;

export const bogosort = async (
	input: number[],
	onProgress?: ProgressCallback,
	maxAttempts = 1_000_000,
	yieldEvery = 100
): Promise<boolean> => {
	let arr = input.slice();
	
	if (arr.length < 2) {
		return true;
	}

	const isSorted = (a: number[]): boolean => {
		for (let i = 0; i < a.length - 1; i++) {
			if (a[i] > a[i + 1]) {
				return false;
			}
		}
		return true;
	};

	// Yields control to browser, allowing UI updates
	const yieldToBrowser = () => new Promise<void>(resolve => setTimeout(resolve, 0));

	let attempts = 0;
	
	while (!isSorted(arr)) {
		if (++attempts > maxAttempts) {
			throw new Error('bogosort: reached maxAttempts');
		}
		
		// lodash shuffle returns a NEW array, so reassign
		arr = shuffle(arr);
		// Small noticeable delay between attempts
		await new Promise<void>(resolve => setTimeout(resolve, 20));
		
		// Report progress
		onProgress?.(attempts, arr);
		
		// Yield to browser every N attempts to prevent freezing
		if (attempts % yieldEvery === 0) {
			await yieldToBrowser();
		}
	}

	// Final progress update with sorted array
	onProgress?.(attempts, arr);

	// Delay after finishing sorting
	await new Promise<void>(resolve => setTimeout(resolve, 5000));
	
	return true;
};