// `mark` picks which of the six brand colours this item's sidebar marker uses.
// In brand order top to bottom, so the collapsed sidebar reads as the rainbow.
export const navLinks = [
	{ name: 'Home', href: '/', mark: 'yellow' },
	{ name: 'Work', href: '/#work', mark: 'orange' },
	{ name: 'About', href: '/about', mark: 'red' },
	{ name: 'Résumé', href: '/resume', mark: 'purple' },
	{ name: 'Press', href: '/press', mark: 'blue' },
	{ name: 'Research', href: '/research', mark: 'green' },
] as const;
