import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';
import portfolio from '../data/portfolio';

const LANGUAGE_KEY = 'site_language';
const LanguageContext = createContext(null);

function detectLanguage() {
	const query = new URLSearchParams(window.location.search).get('lang');
	if (translations[query]) return query;
	const stored = localStorage.getItem(LANGUAGE_KEY);
	if (translations[stored]) return stored;
	const browserLanguage = navigator.language.toLowerCase();
	if (browserLanguage.startsWith('mfe')) return 'mfe';
	if (browserLanguage.startsWith('fr')) return 'fr';
	return 'en';
}

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState(detectLanguage);
	const t = translations[language];

	useEffect(() => {
		const syncMetadata = () => {
			localStorage.setItem(LANGUAGE_KEY, language);
			document.documentElement.lang = t.locale;

			const projectMatch = window.location.hash.match(/^#\/project\/([^/]+)$/);
			const project = projectMatch
				? portfolio.find((item) => item.slug === decodeURIComponent(projectMatch[1]))
				: null;
			const pageTitle = project ? `${project.name} | Didier Bignoux` : t.meta.title;
			const pageDescription = project ? project.copy[language] : t.meta.description;
			document.title = pageTitle;

			const description = document.querySelector('meta[name="description"]');
			if (description) description.setAttribute('content', pageDescription);
			const url = new URL(window.location.href);
			if (language === 'en') url.searchParams.delete('lang');
			else url.searchParams.set('lang', language);
			window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
			const canonicalUrl = language === 'en' ? 'https://didierbignoux.com/' : `https://didierbignoux.com/?lang=${language}`;
			const canonical = document.querySelector('link[rel="canonical"]');
			if (canonical) canonical.setAttribute('href', canonicalUrl);
			const metadata = {
				'meta[property="og:url"]': canonicalUrl,
				'meta[property="og:locale"]': t.locale.replace('-', '_'),
				'meta[property="og:title"]': pageTitle,
				'meta[property="og:description"]': pageDescription,
				'meta[name="twitter:title"]': pageTitle,
				'meta[name="twitter:description"]': pageDescription,
			};
			Object.entries(metadata).forEach(([selector, content]) => {
				const element = document.querySelector(selector);
				if (element) element.setAttribute('content', content);
			});
			const structuredData = document.getElementById('structured-data');
			if (structuredData) {
				try {
					const data = JSON.parse(structuredData.textContent);
					const website = data['@graph']?.find((item) => item['@type'] === 'WebSite');
					if (website) website.inLanguage = t.locale;
					structuredData.textContent = JSON.stringify(data);
				} catch (error) {
					// Keep the valid server-provided structured data if it cannot be updated.
				}
			}
		};

		syncMetadata();
		window.addEventListener('hashchange', syncMetadata);
		return () => window.removeEventListener('hashchange', syncMetadata);
	}, [language, t]);

	const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);
	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
	return context;
}
