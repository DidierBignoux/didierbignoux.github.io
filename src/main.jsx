import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import { LanguageProvider } from './i18n/LanguageContext';

//includes
import './assets/css/main.min.css';
import './assets/css/header-overrides.css';
import './assets/css/bootstrap/bootstrap-reboot.min.css';
import './assets/css/bootstrap/bootstrap.min.css';
import './assets/css/main.inject.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<LanguageProvider>
			<App />
		</LanguageProvider>
	</StrictMode>,
);
