import React from 'react';
import Reveal from '../../ui/Reveal';
import { useLanguage } from '../../../i18n/LanguageContext';

function Service() {
	const { t } = useLanguage();
	const icons = ['lnr-screen', 'lnr-laptop-phone', 'lnr-database', 'lnr-chart-bars'];
	return (
		<section className="service-area section-gap" id="service">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>{t.services.title}</h2>
							<p>{t.services.intro}</p>
						</div>
					</div>
				</div>
				<div className="row service-grid">
					{t.services.items.map(([first, second, description], index) => (
						<div className="col-lg-3 col-md-6" key={`${first}-${second}`}>
							<Reveal delay={index * 100}>
								<div className="single-service">
									<span className={`lnr ${icons[index]}`}></span>
									<h4><span>{first}</span> {second}</h4>
									<p>{description}</p>
								</div>
							</Reveal>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Service;
