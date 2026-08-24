import React from 'react';

export default function TechStack({ items = [] }) {
	return (
		<div className="tech-stack">
			<h5>Technologies used</h5>
			<ul>
				{items.map((t) => (
					<li key={t}>{t}</li>
				))}
			</ul>
		</div>
	);
}
