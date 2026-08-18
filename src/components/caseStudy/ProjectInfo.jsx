import React from 'react';

export default function ProjectInfo({ children }) {
	return (
		<section className="project-info">
			<div className="row">
				<div className="col-lg-8">
					<div className="content">{children}</div>
				</div>
				<div className="col-lg-4">
					<aside>
						<div
							className="card"
							style={{ padding: 18 }}
						>
							<h4>Project details</h4>
							{/** place for structured info list passed as children */}
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}
