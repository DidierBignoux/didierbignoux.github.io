import React from 'react';

export default function CaseStudyLayout({ children }) {
	return (
		<main
			className="case-study"
			style={{ padding: '48px 0' }}
		>
			<div className="container">{children}</div>
		</main>
	);
}
