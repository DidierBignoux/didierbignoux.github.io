import React, { useEffect, useRef, useState } from 'react';
import { languageOptions } from '../../i18n/translations';
import { useLanguage } from '../../i18n/LanguageContext';

export default function LanguageSwitcher({ placement = 'header' }) {
	const { language, setLanguage } = useLanguage();
	const [open, setOpen] = useState(false);
	const wrapperRef = useRef(null);
	const current = languageOptions.find((option) => option.code === language);

	useEffect(() => {
		const close = (event) => {
			if (!wrapperRef.current?.contains(event.target)) setOpen(false);
		};
		document.addEventListener('pointerdown', close);
		return () => document.removeEventListener('pointerdown', close);
	}, []);

	return (
		<div className={`language-switcher language-switcher-${placement}`} ref={wrapperRef}>
			<button
				type="button"
				className="language-trigger"
				aria-label="Choose language"
				aria-expanded={open}
				onClick={() => setOpen((value) => !value)}
			>
				<span aria-hidden="true">{current.flag}</span>
				<span className="language-code">{current.code.toUpperCase()}</span>
				<span className="language-chevron" aria-hidden="true">⌄</span>
			</button>
			{open && (
				<div className="language-menu" role="menu">
					{languageOptions.map((option) => (
						<button
							type="button"
							role="menuitemradio"
							aria-checked={language === option.code}
							className={language === option.code ? 'active' : ''}
							key={option.code}
							onClick={() => { setLanguage(option.code); setOpen(false); }}
						>
							<span aria-hidden="true">{option.flag}</span>
							<span>{option.label}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
