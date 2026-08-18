import React from 'react';
import Reveal from '../../ui/Reveal';
import aboutImage from '../../../assets/img/about-img.png';
import resumePdfEn from '../../../assets/documents/didier-bignoux-cv-en.pdf';
import resumePdfFr from '../../../assets/documents/didier-bignoux-cv-fr.pdf';
import { useLanguage } from '../../../i18n/LanguageContext';

function About() {
	const { language, t } = useLanguage();
	const resumePdf = language === 'en' ? resumePdfEn : resumePdfFr;
	return (
		<section
			className="about-area section-gap"
			id="about"
		>
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-6 about-left">
						<Reveal>
							<img
								className="img-fluid"
								src={aboutImage}
								alt={t.about.imageAlt}
							/>
						</Reveal>
					</div>
					<div className="col-lg-5 col-md-12 about-right">
						<div className="section-title">
							<Reveal>
								<h2>{t.about.title}</h2>
							</Reveal>
						</div>
						<Reveal delay={120}>
							<div className="mb-50">
								{t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
							</div>
						</Reveal>

						<a
							href="#service"
							className="primary-btn white"
							data-text={t.about.services}
						>
							{t.about.services.split('').map((letter, index) => (
								<span key={`${letter}-${index}`}>
									{letter === ' ' ? '\u00a0' : letter}
								</span>
							))}
						</a>
						<a
							href={resumePdf}
							className="primary-btn"
							data-text={t.about.resume}
							target="_blank"
							rel="noopener noreferrer"
						>
							{t.about.resume.split('').map((letter, index) => (
								<span key={`${letter}-${index}`}>
									{letter === ' ' ? '\u00a0' : letter}
								</span>
							))}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
