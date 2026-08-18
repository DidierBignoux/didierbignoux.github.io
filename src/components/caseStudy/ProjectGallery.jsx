import React from 'react';

export default function ProjectGallery({ images = [] }) {
	if (!images || images.length === 0) return null;
	return (
		<section
			className="project-gallery"
			style={{ marginTop: 24 }}
		>
			<div className="row">
				{images.map((src, i) => (
					<div
						className="col-md-6"
						key={i}
						style={{ marginBottom: 12 }}
					>
						<div
							className="card"
							style={{ overflow: 'hidden' }}
						>
							<img
								src={src}
								alt={`screenshot-${i}`}
								style={{ width: '100%', display: 'block' }}
								loading="lazy"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
