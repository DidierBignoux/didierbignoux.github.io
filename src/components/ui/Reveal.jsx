import React from 'react';
import useInView from '../../hooks/useInView';

export default function Reveal({
	children,
	className = '',
	delay = 0,
	once = true,
}) {
	const [ref, visible] = useInView({ once });

	const style = {
		transitionDelay: `${delay}ms`,
	};

	return (
		<div
			ref={ref}
			className={`reveal ${visible ? 'visible' : ''} ${className}`}
			style={style}
			aria-hidden={!visible}
		>
			{children}
		</div>
	);
}
