import React, { useEffect, useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
import logo from '../../assets/img/logo.png';
import { getHashPath, navigate } from '../../hooks/useHashRoute';

const sectionIds = ['home', 'about', 'experience', 'service', 'work'];

function NavigationLinks({ activeSection, onNavigate, labels }) {
	const links = sectionIds.map((id) => ({ id, label: labels[id] }));
	return (
		<ul className="nav-menu">
			{links.map((link) => (
				<li key={link.id}>
					<button
						type="button"
						className={activeSection === link.id ? 'active' : ''}
						aria-current={activeSection === link.id ? 'location' : undefined}
						onClick={() => onNavigate(link.id)}
					>
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
	const [activeSection, setActiveSection] = useState('home');
	const [contactCtaActive, setContactCtaActive] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const updateNavigationState = () => {
			setScrolled(window.scrollY > 100);

			if (getHashPath() !== '/') {
				setActiveSection('');
				setContactCtaActive(false);
				return;
			}

			const activationLine = Math.max(120, window.innerHeight * 0.3);
			const contactSection = document.getElementById('contact');
			const isContactSectionActive = Boolean(
				contactSection && contactSection.getBoundingClientRect().top <= activationLine,
			);
			setContactCtaActive(isContactSectionActive);

			if (isContactSectionActive) {
				setActiveSection('');
				return;
			}

			let currentSection = 'home';
			sectionIds.forEach((id) => {
				const section = document.getElementById(id);
				if (section && section.getBoundingClientRect().top <= activationLine) {
					currentSection = id;
				}
			});
			setActiveSection(currentSection);
		};

		updateNavigationState();
		window.addEventListener('scroll', updateNavigationState, { passive: true });
		window.addEventListener('resize', updateNavigationState);
		window.addEventListener('hashchange', updateNavigationState);
		return () => {
			window.removeEventListener('scroll', updateNavigationState);
			window.removeEventListener('resize', updateNavigationState);
			window.removeEventListener('hashchange', updateNavigationState);
		};
	}, []);

	useEffect(() => {
		document.body.classList.toggle('mobile-nav-active', mobileOpen);
		return () => document.body.classList.remove('mobile-nav-active');
	}, [mobileOpen]);

	const scrollToSection = (id) => {
		setMobileOpen(false);
		setActiveSection(id);
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
							<NavigationLinks activeSection={activeSection} onNavigate={scrollToSection} labels={t.nav} />
						</nav>
						<div className="header-controls">
							{scrolled && (
								<a
									className={`primary-btn header-contact-button${contactCtaActive ? ' contact-attention' : ''}`}
									data-text={t.hero.email}
									href="mailto:didierbignoux@hotmail.com"
								>
									{t.hero.email.split('').map((letter, index) => (
										<span key={`${letter}-${index}`}>
											{letter === ' ' ? '\u00a0' : letter}
										</span>
									))}
								</a>
							)}
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
				<span className={`mobile-nav-icon${mobileOpen ? ' is-open' : ''}`} aria-hidden="true">
					<span />
				</span>
			</button>
			<nav id="mobile-nav" aria-label="Navigation mobile">
				<NavigationLinks activeSection={activeSection} onNavigate={scrollToSection} labels={t.nav} />
				{scrolled && (
					<a
						className={`primary-btn mobile-contact-button${contactCtaActive ? ' contact-attention' : ''}`}
						data-text={t.hero.email}
						href="mailto:didierbignoux@hotmail.com"
					>
						{t.hero.email.split('').map((letter, index) => (
							<span key={`${letter}-${index}`}>
								{letter === ' ' ? '\u00a0' : letter}
							</span>
						))}
					</a>
				)}
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
