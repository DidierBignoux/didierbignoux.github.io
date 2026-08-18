import React, { useMemo, useState } from 'react';

import portfolio from '../../../data/portfolio';
import Reveal from '../../ui/Reveal';

function WorkIso() {
	const [filter, setFilter] = useState('all');
	const projects = useMemo(
		() => portfolio.map((p) => ({
			...p,
			filtered: p.category.includes(filter),
		})),
		[filter],
	);
	return (
		<section
			className="work-area section-gap-top section-gap-bottom-90"
			id="work"
		>
			<div className="container">
				<div className="row d-flex justify-content-between align-items-end mb-80">
					<div className="col-lg-6">
						<div className="section-title">
							<h2>Latest Works</h2>
							<p>
								If you are looking at blank cassettes on the web, you may be
								very confused at the difference in price. You may see some for
								as low as $.17 each.
							</p>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="filters">
							<ul>
								<li>
									<a
										href="#"
										className={filter === 'all' ? 'active' : ''}
										onClick={(e) => {
											e.preventDefault();
											setFilter('all');
										}}
									>
										All Categories
									</a>
								</li>
								<li>
									<a
										href="#"
										className={filter === 'frontend' ? 'active' : ''}
										onClick={(e) => {
											e.preventDefault();
											setFilter('frontend');
										}}
									>
										Frontend
									</a>
								</li>
								<li>
									<a
										href="#"
										className={filter === 'mobile' ? 'active' : ''}
										onClick={(e) => {
											e.preventDefault();
											setFilter('mobile');
										}}
									>
										Mobile
									</a>
								</li>
								<li>
									<a
										href="#"
										className={filter === 'ux-ui' ? 'active' : ''}
										onClick={(e) => {
											e.preventDefault();
											setFilter('ux-ui');
										}}
									>
										UX/UI
									</a>
								</li>
								<li>
									<a
										href="#"
										className={filter === 'others' ? 'active' : ''}
										onClick={(e) => {
											e.preventDefault();
											setFilter('others');
										}}
									>
										Others
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="filters-content">
						<div className="row grid">
							{projects.map((item, idx) =>
								item.filtered === true ? (
									<Reveal
										key={item.name}
										delay={idx * 80}
									>
										<div
											className={`single-work col-lg-4 col-md-6 col-sm-12 all`}
										>
											<div className="relative card hover-zoom">
												<div className="thumb">
													<div className="overlay overlay-bg"></div>
													<img
														className="image img-fluid"
														src={item.img[0]}
														alt={item.name}
														loading="lazy"
													/>
												</div>
												<div className="middle">
													<h4>{item.name}</h4>
													<div className="cat">{item.project}</div>
												</div>
												<a
													href={`#/project/${item.slug}`}
													className="overlay"
													aria-label={`Open case study ${item.name}`}
												></a>
											</div>
										</div>
									</Reveal>
								) : null,
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WorkIso;
