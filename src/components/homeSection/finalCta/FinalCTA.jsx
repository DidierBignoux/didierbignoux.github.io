import React from 'react';
import Reveal from '../../ui/Reveal';
import { useLanguage } from '../../../i18n/LanguageContext';
import ctaPortrait from '../../../assets/img/about-cta-v3.png';

function FinalCTA() {
	const { t } = useLanguage();

	return (
		<section className="final-cta-section" id="contact" aria-labelledby="final-cta-title">
			<div className="container">
				<Reveal>
					<div className="final-cta-layout">
						<div className="final-cta-panel section-title">
							<h2 id="final-cta-title">{t.finalCta.title}</h2>
							<p>{t.finalCta.description}</p>
							<a
								className="primary-btn final-cta-button"
								data-text={t.finalCta.button}
								href="mailto:didierbignoux@hotmail.com"
							>
								{t.finalCta.button.split('').map((letter, index) => (
									<span key={`${letter}-${index}`}>
										{letter === ' ' ? '\u00a0' : letter}
									</span>
								))}
							</a>
						</div>
						<figure className="final-cta-portrait">
							<img src={ctaPortrait} alt="Didier Bignoux" loading="lazy" />
						</figure>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

export default FinalCTA;
