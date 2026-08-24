import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../i18n/LanguageContext';

function BackToTop() {
	const { t } = useLanguage();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const updateVisibility = () => setVisible(window.scrollY > 100);
		updateVisibility();
		window.addEventListener('scroll', updateVisibility, { passive: true });
		return () => window.removeEventListener('scroll', updateVisibility);
	}, []);

	return (
		<div id="back-top" className={visible ? 'back-top-animation' : ''}>
			<a
				href="#home"
				aria-label={t.footer.top}
				onClick={(event) => {
					event.preventDefault();
					window.scrollTo({ top: 0, behavior: 'smooth' });
				}}
			>
				<FontAwesomeIcon className="icone" icon={faArrowUp} />
			</a>
		</div>
	);
}

export default BackToTop;
