// grab a random item in an array
export const sample = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];
export default sample;