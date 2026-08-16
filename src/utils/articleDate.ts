// Collection entries arrive as a Date, coerced by the schema. The markdown
// pages under `src/pages/opinion` set pressRelease.astro as their `layout` and
// so bypass Zod entirely, handing over whatever string their frontmatter holds.
// Both shapes land here.
const toDate = (value: Date | string) => (value instanceof Date ? value : new Date(value));

// Formatting and the datetime attribute both read UTC so they can't disagree
// about which day it is depending on where the build ran.
export const formatArticleDate = (value: Date | string) =>
	toDate(value).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC',
	});

export const articleDateAttr = (value: Date | string) => toDate(value).toISOString().slice(0, 10);

export const articleDateValue = (value: Date | string) => toDate(value).valueOf();
