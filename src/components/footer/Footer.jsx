import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/img/logo.png';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';

const socialIcons = [
	{ id: 'linkedin', title: 'LinkedIn', icon: faLinkedinIn, url: 'https://www.linkedin.com/in/didierbignoux/' },
	{ id: 'facebook', title: 'Facebook', icon: faFacebookF, url: 'https://www.facebook.com/didierbignoux' },
];

export default function Footer() {
	const { t } = useLanguage();

	return (
		<footer className="footer-area">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="footer-top flex-column">
							<div className="footer-logo">
								<a href="#/"><img src={logo} alt="Didier Bignoux" /></a>
								<h4>{t.footer.follow}</h4>
							</div>
							<div className="footer-social">
								{socialIcons.map((social) => (
									<a href={social.url} key={social.id} target="_blank" rel="noopener noreferrer" aria-label={`Visit Didier Bignoux on ${social.title}`}>
										<FontAwesomeIcon className="icone" icon={social.icon} />
									</a>
								))}
							</div>
							<div className="footer-language"><LanguageSwitcher placement="footer" /></div>
						</div>
					</div>
				</div>
				<div className="row footer-bottom justify-content-center">
					<p className="col-lg-8 col-sm-12 footer-text">
						Copyright &copy; {new Date().getFullYear()} {t.footer.rights} | {t.footer.made}{' '}
						<FontAwesomeIcon className="footer-heart" icon={faHeart} aria-label="love" />
					</p>
				</div>
			</div>
		</footer>
	);
}
