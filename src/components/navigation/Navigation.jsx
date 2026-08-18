import React, { useEffect, useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
import logo from '../../assets/img/logo.png';
import { getHashPath, navigate } from '../../hooks/useHashRoute';

function NavigationLinks({ onNavigate, labels }) {
	const links = [
		{ id: 'home', label: labels.home },
		{ id: 'about', label: labels.about },
		{ id: 'service', label: labels.service },
	];
	return (
		<ul className="nav-menu">
			{links.map((link) => (
				<li key={link.id}>
					<button type="button" onClick={() => onNavigate(link.id)}>
						{link.label}
					</button>
				</li>
			))}
		</ul>
	);
}

function Navigation() {
	const { t } = useLanguage();
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	useEffect(() => {
		const updateHeader = () => setScrolled(window.scrollY > 100);
		updateHeader();
		window.addEventListener('scroll', updateHeader, { passive: true });
		return () => window.removeEventListener('scroll', updateHeader);
	}, []);

	useEffect(() => {
		document.body.classList.toggle('mobile-nav-active', mobileOpen);
		return () => document.body.classList.remove('mobile-nav-active');
	}, [mobileOpen]);

	const scrollToSection = (id) => {
		setMobileOpen(false);
		const scroll = () => {
			const target = document.getElementById(id);
			if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		};

		if (getHashPath() !== '/') {
			navigate('/');
			window.setTimeout(scroll, 80);
		} else {
			scroll();
		}
	};

	return (
		<>
			<header id="header" className={scrolled ? 'header-scrolled' : ''}>
				<div className="container main-menu">
					<div className="row align-items-center d-flex">
						<div id="logo">
							<a href="#/" onClick={(event) => { event.preventDefault(); scrollToSection('home'); }}>
								<img src={logo} alt="Didier Bignoux" />
							</a>
						</div>
						<nav id="nav-menu-container" aria-label="Navigation principale">
							<NavigationLinks onNavigate={scrollToSection} labels={t.nav} />
						</nav>
						<div className="header-controls">
							<LanguageSwitcher />
							<ThemeToggle />
						</div>
					</div>
				</div>
			</header>

			<button
				type="button"
				id="mobile-nav-toggle"
				aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
				aria-expanded={mobileOpen}
				onClick={() => setMobileOpen((open) => !open)}
			>
				<i className={`lnr ${mobileOpen ? 'lnr-cross' : 'lnr-menu'}`} />
			</button>
			<nav id="mobile-nav" aria-label="Navigation mobile">
				<NavigationLinks onNavigate={scrollToSection} labels={t.nav} />
			</nav>
			{mobileOpen && (
				<button
					type="button"
					id="mobile-body-overly"
					aria-label="Fermer le menu"
					onClick={() => setMobileOpen(false)}
				/>
			)}
		</>
	);
}

export default Navigation;
