import React, { Fragment } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

//Navigation
import Navigation from './components/navigation/Navigation';

//Page
import LandingPage from './routes/LandingPage';
import Project from './routes/Project';

export const App = () => (
	<Fragment>
		<HashRouter>
			<Navigation />
			<Routes>
				<Route
					path="/"
					element={<LandingPage />}
				/>
				<Route
					path="/project/:slug"
					element={<Project />}
				/>
				<Route path="*" element={<LandingPage />} />
			</Routes>
		</HashRouter>
	</Fragment>
);
