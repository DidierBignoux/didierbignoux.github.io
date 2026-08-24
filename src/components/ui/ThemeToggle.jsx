import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../i18n/LanguageContext';

const THEME_KEY = 'site_theme';

function getInitialTheme() {
	try {
		const stored = localStorage.getItem(THEME_KEY);
		if (stored === 'light' || stored === 'dark') return stored;
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		)
			return 'dark';
	} catch (e) {}
	return 'light';
}

export default function ThemeToggle({ className = '' }) {
	const { t } = useLanguage();
	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		document.documentElement.style.colorScheme = theme;
		const themeColor = document.querySelector('meta[name="theme-color"]');
		if (themeColor) {
			themeColor.setAttribute('content', theme === 'dark' ? '#0b0f14' : '#ffffff');
		}
		try {
			localStorage.setItem(THEME_KEY, theme);
		} catch (e) {}
	}, [theme]);

	const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

	return (
		<button
			aria-label={theme === 'light' ? t.theme.dark : t.theme.light}
			aria-pressed={theme === 'dark'}
			className={`theme-toggle ${className}`}
			onClick={toggle}
			title={theme === 'light' ? t.theme.dark : t.theme.light}
		>
			<span className="theme-toggle-thumb" aria-hidden="true">
				<FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
			</span>
		</button>
	);
}
