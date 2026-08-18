import React, { useEffect, useState } from 'react';
import Reveal from '../ui/Reveal';
import bannerImage from '../../assets/img/banner-img.png';
import { useLanguage } from '../../i18n/LanguageContext';

function HomeHeader() {
	const { t } = useLanguage();
	const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

	useEffect(() => {
		window.scrollTo(0, 0);
		const updateHeight = () => setViewportHeight(window.innerHeight);
		window.addEventListener('resize', updateHeight);
		return () => window.removeEventListener('resize', updateHeight);
	}, []);

	return (
		<section
			className="home-banner-area"
			id="home"
		>
			<div className="container">
				<div
					className="row d-flex align-items-center"
					style={{ minHeight: viewportHeight }}
				>
					<div className="banner-content col-lg-6 col-md-12 justify-content-center">
						<Reveal>
							<div className="me">{t.hero.intro}</div>
						</Reveal>
						<Reveal delay={120}>
							<h1>Didier Bignoux</h1>
						</Reveal>
						<Reveal delay={220}>
							<div className="designation mb-50">
								{t.hero.lead}{' '}
								<span className="designer">{t.hero.webmaster}</span>{' '}
								{t.hero.connector}{' '}
								<span className="developer">{t.hero.developer}</span>{' '}
								{t.hero.ending}
							</div>
						</Reveal>
						<Reveal delay={320}>
							<a
								className="primary-btn"
								data-text={t.hero.email}
								href="mailto:didierbignoux@hotmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t.hero.email.split('').map((letter, index) => (
									<span key={`${letter}-${index}`}>
										{letter === ' ' ? '\u00a0' : letter}
									</span>
								))}
							</a>
						</Reveal>
					</div>

					<div className="banner-img col-lg-6 col-md-6 align-self-end">
						<Reveal delay={100}>
							<img
								className="img-fluid"
								src={bannerImage}
								alt={t.hero.imageAlt}
							/>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeHeader;
