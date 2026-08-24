import React, { useEffect } from 'react';
import portfolio from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

function ProjectPage({ slug }) {
	const { language, t } = useLanguage();
	const idx = portfolio.findIndex((project) => project.slug === slug);
	const project = idx >= 0 ? portfolio[idx] : null;

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [slug]);

	const backToProjects = (event) => {
		event.preventDefault();
		window.location.hash = '/';
		window.setTimeout(() => {
			document.getElementById('work')?.scrollIntoView({ block: 'start' });
		}, 120);
	};

	if (!project) {
		return (
			<main className="project-detail project-detail-empty">
				<div className="container">
					<h1>{t.projects.notFound}</h1>
					<a href="#/" onClick={backToProjects}>← {t.projects.back}</a>
				</div>
			</main>
		);
	}

	const previous = portfolio[(idx - 1 + portfolio.length) % portfolio.length];
	const next = portfolio[(idx + 1) % portfolio.length];
	const visitLabel = `${t.projects.visitSite} ↗`;

	return (
		<main className="project-detail" style={{ '--project-accent': project.accent }}>
			<section className="project-detail-hero">
				<div className="container">
					<div className="project-detail-breadcrumb">
						<a href="#/" onClick={backToProjects}>← {t.projects.back}</a>
						<span>{t.projects.filters[project.category]}</span>
					</div>
					<div className="project-detail-intro">
						<div>
							<span className="projects-eyebrow">{project.location}</span>
							<h1>{project.name}</h1>
							<p>{project.copy[language]}</p>
						</div>
						<a
							className="primary-btn white project-visit-button"
							data-text={visitLabel}
							href={project.siteUrl}
							target="_blank"
							rel="noreferrer"
						>
							{visitLabel.split('').map((letter, index) => (
								<span key={`${letter}-${index}`}>
									{letter === ' ' ? '\u00a0' : letter}
								</span>
							))}
						</a>
					</div>
					<div className={`project-detail-visual ${project.imageFit === 'contain' ? 'project-detail-visual-contain' : ''}`}>
						<img src={project.image} alt={`Aperçu du site ${project.name}`} style={{ objectFit: project.imageFit || 'cover' }} />
					</div>
				</div>
			</section>

			<section className="project-detail-body">
				<div className="container">
					<div className="project-detail-summary">
						<div>
							<span className="project-detail-label">{t.projects.overview}</span>
							<h2>{project.copy[language]}</h2>
						</div>
						<dl>
							<div><dt>{t.projects.role}</dt><dd>{t.projects.roleText}</dd></div>
							<div><dt>{t.projects.location}</dt><dd>{project.location}</dd></div>
							<div><dt>Focus</dt><dd>{project.tags.join(' · ')}</dd></div>
						</dl>
					</div>

					<div className="project-focus-heading">
						<span className="project-detail-label">{t.projects.role}</span>
						<h2>{t.projects.focusTitle}</h2>
					</div>
					<div className="project-focus-grid">
						{project.focus.map((key, index) => (
							<article key={key}>
								<span>0{index + 1}</span>
								<h3>{t.projects.focus[key][0]}</h3>
								<p>{t.projects.focus[key][1]}</p>
							</article>
						))}
					</div>

					<nav className="project-detail-navigation" aria-label="Project navigation">
						<a href={`#/project/${previous.slug}`}>
							<span>← {t.projects.previous}</span>
							<strong>{previous.name}</strong>
						</a>
						<a href={`#/project/${next.slug}`}>
							<span>{t.projects.next} →</span>
							<strong>{next.name}</strong>
						</a>
					</nav>
				</div>
			</section>
		</main>
	);
}

export default ProjectPage;
