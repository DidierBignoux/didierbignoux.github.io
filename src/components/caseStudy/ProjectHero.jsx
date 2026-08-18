import React from 'react';

export default function ProjectHero({ title, image }) {
	return (
		<section
			className="project-hero"
			style={{ marginBottom: 24 }}
		>
			<div className="row">
				<div className="col-12">
					<div
						className="hero-img"
						style={{ overflow: 'hidden', borderRadius: 8 }}
					>
						<img
							src={image}
							alt={title}
							style={{ width: '100%', display: 'block' }}
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div style={{ marginTop: 18 }}>
				<h1>{title}</h1>
			</div>
		</section>
	);
}
