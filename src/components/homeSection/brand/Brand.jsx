import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCloudflare,
	faCss3Alt,
	faFigma,
	faHtml5,
	faJs,
	faReact,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import Reveal from '../../ui/Reveal';

const technologies = [
	{ name: 'WordPress', icon: faWordpress, color: '#21759b' },
	{ name: 'HTML5', icon: faHtml5, color: '#e34f26' },
	{ name: 'CSS3', icon: faCss3Alt, color: '#1572b6' },
	{ name: 'JavaScript', icon: faJs, color: '#f7df1e' },
	{ name: 'React', icon: faReact, color: '#61dafb' },
	{ name: 'Figma', icon: faFigma, color: '#a259ff' },
	{ name: 'Cloudflare', icon: faCloudflare, color: '#f48120' },
	{ name: 'WooCommerce', type: 'woo', color: '#96588a' },
];

function Brand() {
	const [slide, setSlide] = useState(0);
	const [sliding, setSliding] = useState(true);
	const [visibleLogos, setVisibleLogos] = useState(5);
	const carouselItems = [...technologies, ...technologies];

	useEffect(() => {
		const updateVisibleLogos = () => {
			setVisibleLogos(window.innerWidth <= 480 ? 2 : window.innerWidth <= 800 ? 3 : 5);
		};

		updateVisibleLogos();
		window.addEventListener('resize', updateVisibleLogos);

		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (reducedMotion.matches) {
			return () => window.removeEventListener('resize', updateVisibleLogos);
		}

		const timer = window.setInterval(() => {
			setSlide((current) => current + 1);
		}, 2600);

		return () => {
			window.clearInterval(timer);
			window.removeEventListener('resize', updateVisibleLogos);
		};
	}, []);

	const resetCarousel = () => {
		if (slide !== technologies.length) return;

		setSliding(false);
		setSlide(0);
		window.requestAnimationFrame(() => {
			window.requestAnimationFrame(() => setSliding(true));
		});
	};

	return (
		<section className="brands-area" aria-label="Tools and technologies">
			<div className="container">
				<Reveal>
					<div className="brand-wrap">
						<div className="brand-carousel">
						<div
							className={`brand-list${sliding ? '' : ' no-transition'}`}
			style={{ transform: `translateX(${-slide * (100 / visibleLogos)}%)` }}
							onTransitionEnd={resetCarousel}
						>
							{carouselItems.map((technology, index) => (
								<div
									className="single-brand"
									key={`${technology.name}-${index}`}
									style={{ '--brand-color': technology.color }}
									title={technology.name}
								>
									{technology.type === 'woo' ? (
										<span className="woo-logo" aria-hidden="true">Woo</span>
									) : (
										<FontAwesomeIcon icon={technology.icon} aria-hidden="true" />
									)}
									<span className="brand-name">{technology.name}</span>
								</div>
							))}
						</div>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

export default Brand;
