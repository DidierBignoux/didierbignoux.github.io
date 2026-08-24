import React, { useMemo, useState } from 'react';
import portfolio from '../../../data/portfolio';
import { useLanguage } from '../../../i18n/LanguageContext';
import Reveal from '../../ui/Reveal';

const filterOrder = ['all', 'healthcare', 'business', 'events', 'agency', 'lifestyle'];

function ArrowIcon() {
	return <span aria-hidden="true">↗</span>;
}

function WorkPortfolio() {
	const { language, t } = useLanguage();
	const [filter, setFilter] = useState('all');
	const projects = useMemo(
		() => filter === 'all' ? portfolio : portfolio.filter((project) => project.category === filter),
		[filter],
	);

	return (
		<section className="projects-section" id="work">
			<div className="container">
				<Reveal>
					<div className="projects-heading section-title">
						<h2>{t.projects.title}</h2>
						<p>{t.projects.intro}</p>
					</div>
				</Reveal>

				<div className="project-filters" role="group" aria-label={t.projects.eyebrow}>
					{filterOrder.map((key) => (
						<button
							key={key}
							type="button"
							className={filter === key ? 'active' : ''}
							onClick={() => setFilter(key)}
						>
							{t.projects.filters[key]}
						</button>
					))}
				</div>

				<div className="project-grid">
					{projects.map((project, index) => {
						const caseLabel = `${t.projects.viewCase} →`;
						return (
						<Reveal
							key={project.slug}
							delay={(index % 3) * 70}
							className={index === 0 && filter === 'all' ? 'project-grid-item project-grid-item-featured' : 'project-grid-item'}
						>
							<article
								className={`project-card ${index === 0 && filter === 'all' ? 'project-card-featured' : ''}`}
								style={{ '--project-accent': project.accent }}
							>
								<a
									className="project-card-image-link"
									href={`#/project/${project.slug}`}
									aria-label={`${t.projects.viewCase}: ${project.name}`}
								>
									<img
										src={project.image}
										alt={`Aperçu du site ${project.name}`}
										loading="lazy"
										style={{ objectFit: project.imageFit || 'cover' }}
									/>
								</a>
								<div className="project-card-shade" />
								<div className="project-card-topline">
									<span>{t.projects.filters[project.category]}</span>
									<span>{project.location}</span>
								</div>
								<div className="project-card-content">
									<h3>{project.name}</h3>
									<p>{project.copy[language]}</p>
									<div className="project-card-actions">
										<a
											className="primary-btn white project-case-link"
											data-text={caseLabel}
											href={`#/project/${project.slug}`}
										>
											{caseLabel.split('').map((letter, letterIndex) => (
												<span key={`${letter}-${letterIndex}`}>
													{letter === ' ' ? '\u00a0' : letter}
												</span>
											))}
										</a>
										<a
											className="project-live-link"
											href={project.siteUrl}
											target="_blank"
											rel="noreferrer"
											aria-label={`${t.projects.visitSite}: ${project.name}`}
										>
											<ArrowIcon />
										</a>
									</div>
								</div>
							</article>
						</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default WorkPortfolio;
