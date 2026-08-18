import React from 'react';
import portfolio from '../data/portfolio';
import CaseStudyLayout from '../components/caseStudy/CaseStudyLayout';
import ProjectHero from '../components/caseStudy/ProjectHero';
import ProjectInfo from '../components/caseStudy/ProjectInfo';
import TechStack from '../components/caseStudy/TechStack';
import ProjectGallery from '../components/caseStudy/ProjectGallery';
import NextProjectNavigation from '../components/caseStudy/NextProjectNavigation';

function ProjectPage({ slug }) {
	const idx = portfolio.findIndex((p) => p.slug === slug);
	const project = idx >= 0 ? portfolio[idx] : null;

	if (!project) {
		return (
			<CaseStudyLayout>
				<div className="row">
					<div className="col-12">
						<h2>Project not found</h2>
						<a href="#/">Back to portfolio</a>
					</div>
				</div>
			</CaseStudyLayout>
		);
	}

	const prev = portfolio[idx - 1] || null;
	const next = portfolio[idx + 1] || null;

	// minimal example content; users can extend per-project data
	return (
		<CaseStudyLayout>
			<ProjectHero
				title={project.name}
				image={project.img[0]}
			/>

			<ProjectInfo>
				<p>{project.short}</p>
				<h4>Problem / Goal</h4>
				<p>Increase conversions and improve user clarity across the funnel.</p>
				<h4>My role</h4>
				<p>
					Lead Developer & Designer — responsible for design system and
					implementation.
				</p>
				<TechStack items={['React', 'Sass', 'Webpack']} />
				<h4>Design & development process</h4>
				<p>Research → Prototypes → Implementation → Testing → Monitoring</p>
				<h4>Challenges & solutions</h4>
				<p>
					Legacy integration and performance constraints — solved by progressive
					enhancement and lazy loading.
				</p>
				<h4>Final result</h4>
				<p>
					Delivered a responsive, accessible interface with improved conversion
					metrics.
				</p>
			</ProjectInfo>

			<ProjectGallery images={project.img} />

			<div style={{ marginTop: 16 }}>
				<a href="#/">Back to portfolio</a>
			</div>

			<NextProjectNavigation
				prev={prev}
				next={next}
			/>
		</CaseStudyLayout>
	);
}

export default ProjectPage;
