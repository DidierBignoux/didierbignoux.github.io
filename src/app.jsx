import React from 'react';
import Navigation from './components/navigation/Navigation';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import useHashRoute from './hooks/useHashRoute';

export function App() {
	const path = useHashRoute();
	const projectMatch = path.match(/^\/project\/([^/]+)$/);

	return (
		<>
			<Navigation />
			{projectMatch ? (
				<ProjectPage slug={decodeURIComponent(projectMatch[1])} />
			) : (
				<HomePage />
			)}
		</>
	);
}
