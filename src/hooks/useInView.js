import { useEffect, useRef, useState } from 'react';

export default function useInView(options = {}) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	const once = options.once ?? false;
	const threshold = options.threshold ?? 0.12;

	useEffect(() => {
		if (!ref.current) return;
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true);
						if (once) obs.unobserve(entry.target);
					} else if (!once) {
						setVisible(false);
					}
				});
			},
			{ threshold },
		);

		obs.observe(ref.current);
		return () => obs.disconnect();
	}, [once, threshold]);

	return [ref, visible];
}
