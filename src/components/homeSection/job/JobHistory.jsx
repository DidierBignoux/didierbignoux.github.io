import React from 'react';
import Reveal from '../../ui/Reveal';
import { useLanguage } from '../../../i18n/LanguageContext';

function AnimatedPeriod({ period }) {
	return (
		<span className="primary-btn job-period" aria-label={period}>
			{Array.from(period).map((character, index) => (
				<span
					className="job-period-char"
					key={`${character}-${index}`}
					style={{ '--char-delay': `${index * 65}ms` }}
					aria-hidden="true"
				>
					{character === ' ' ? '\u00a0' : character}
				</span>
			))}
		</span>
	);
}

function JobHistory() {
	const { t } = useLanguage();
	const experiences = t.jobs.items.map(([company, role, period, description]) => ({ company, role, period, description }));
	return (
		<section className="job-area section-gap-top section-gap-bottom-90" id="experience">
			<div className="container">
				<div className="row d-flex">
					<div className="col-lg-12">
						<div className="section-title">
							<Reveal>
								<h2>{t.jobs.title}</h2>
								<p>{t.jobs.intro}</p>
							</Reveal>
						</div>
					</div>
				</div>

				<div className="row">
					{experiences.map((experience, index) => (
						<div className="col-lg-6" key={`${experience.company}-${experience.period}`}>
							<Reveal delay={index * 80}>
								<article className="single-job">
									<div className="top-sec d-flex justify-content-between">
										<div className="top-left">
											<h4>{experience.company}</h4>
											<p>{experience.role}</p>
									</div>
									<div className="top-right">
										<AnimatedPeriod period={experience.period} />
									</div>
									</div>
									<div className="bottom-sec">{experience.description}</div>
								</article>
							</Reveal>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default JobHistory;
