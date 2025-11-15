// Dynamically update the favicon based on the dark mode state
const updateFavicon = () => {
	const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
	favicon.rel = 'icon';
	favicon.href = darkMode
		? '/new/favicon-fullwhite.svg' // White monogram for dark mode
		: '/new/favicon-fullblack.svg'; // Black monogram for light mode
	document.head.appendChild(favicon);
};

// Initial favicon update
updateFavicon();

// Listen for changes in the theme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);

console.log('themeFavicon.js loaded');