import React from 'react';

export default function NextProjectNavigation({ prev, next }) {
	return (
		<nav
			className="project-nav"
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				marginTop: 28,
			}}
		>
			<div>
				{prev && <a href={`#/project/${prev.slug}`}>&larr; {prev.name}</a>}
			</div>
			<div>
				{next && <a href={`#/project/${next.slug}`}>{next.name} &rarr;</a>}
			</div>
		</nav>
	);
}
