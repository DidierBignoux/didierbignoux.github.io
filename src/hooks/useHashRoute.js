import { useEffect, useState } from 'react';

export function getHashPath() {
	return window.location.hash.replace(/^#/, '') || '/';
}

export function navigate(path) {
	window.location.hash = path;
}

export default function useHashRoute() {
	const [path, setPath] = useState(getHashPath);

	useEffect(() => {
		const updatePath = () => setPath(getHashPath());
		window.addEventListener('hashchange', updatePath);
		return () => window.removeEventListener('hashchange', updatePath);
	}, []);

	return path;
}
