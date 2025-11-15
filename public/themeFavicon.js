// Dynamically update the favicon based on the dark mode state
const updateFavicon = () => {
	const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
	favicon.rel = 'icon';
	favicon.href = darkMode
		? '/2025/RM-monogram-white-on-transparent.svg' // White monogram for dark mode
		: '/2025/RM-monogram-black-on-transparent.svg'; // Black monogram for light mode
	document.head.appendChild(favicon);
};

// Initial favicon update
updateFavicon();

// Listen for changes in the theme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);