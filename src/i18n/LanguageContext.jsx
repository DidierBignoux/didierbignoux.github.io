import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

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
		localStorage.setItem(LANGUAGE_KEY, language);
		document.documentElement.lang = t.locale;
		document.title = t.meta.title;
		const description = document.querySelector('meta[name="description"]');
		if (description) description.setAttribute('content', t.meta.description);
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
			'meta[property="og:title"]': t.meta.title,
			'meta[property="og:description"]': t.meta.description,
			'meta[name="twitter:title"]': t.meta.title,
			'meta[name="twitter:description"]': t.meta.description,
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
	}, [language, t]);

	const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);
	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
	return context;
}
