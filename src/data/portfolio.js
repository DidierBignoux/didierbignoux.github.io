import inzeeCare from '../assets/img/projects/inzee-care.png';
import afcopil from '../assets/img/projects/afcopil.png';
import fni from '../assets/img/projects/fni.png';
import qualidel from '../assets/img/projects/qualidel.png';
import afeebop from '../assets/img/projects/afeebop.png';
import adeliaMauritius from '../assets/img/projects/adelia-mu.png';
import oxysom from '../assets/img/projects/oxysom.png';
import cseUrml from '../assets/img/projects/cse-urml-oi.png';
import inflib from '../assets/img/projects/inflib.png';
import egallys from '../assets/img/projects/egallys.png';
import wineMoreTime from '../assets/img/projects/wine-more-time-hero.avif';
import greatPlaceToWork from '../assets/img/projects/great-place-to-work.png';
import vasco from '../assets/img/projects/vasco-logo.png';

const copy = (en, fr, mfe) => ({ en, fr, mfe });

const portfolio = [
	{
		name: 'inzee.Care', slug: 'inzee-care', siteUrl: 'https://www.inzee.care/', image: inzeeCare,
		category: 'healthcare', location: 'France', accent: '#3999e8',
		tags: ['Webmastering', 'UX', 'Patient journey'], focus: ['content', 'reliability', 'responsive', 'ux'],
		copy: copy(
			'A patient-facing platform that makes finding home nursing care simpler and more reassuring.',
			'Une plateforme patient qui simplifie et rassure la recherche de soins infirmiers à domicile.',
			'Enn platform pou pasian ki fer li pli fasil ek pli rasiran pou trouv enn infirmie pou swin lakaz.',
		),
	},
	{
		name: 'AFCOPIL', slug: 'afcopil', siteUrl: 'https://www.afcopil.fr/', image: afcopil,
		category: 'healthcare', location: 'France', accent: '#4d1a96',
		tags: ['Training', 'Content', 'WordPress'], focus: ['content', 'reliability', 'responsive', 'performance'],
		copy: copy(
			'A clear training catalogue helping independent nurses find the right learning format and programme.',
			'Un catalogue de formations clair pour aider les infirmiers libéraux à trouver le bon format et le bon programme.',
			'Enn katalog formasion kler pou ed bann infirmie liberal trouv bon format ek bon program.',
		),
	},
	{
		name: 'FNI', slug: 'fni', siteUrl: 'https://fni.fr/', image: fni,
		category: 'healthcare', location: 'France', accent: '#172878',
		tags: ['Institutional', 'Editorial', 'Membership'], focus: ['content', 'reliability', 'responsive', 'performance'],
		copy: copy(
			'The digital home of France’s national federation for independent nurses, built around news, services and advocacy.',
			'La vitrine numérique de la Fédération Nationale des Infirmiers, structurée autour de l’actualité, des services et de la défense de la profession.',
			'Vitrinn digital Federasion Nasional bann Infirmie, organize otour nouvel, servis ek defans profesion.',
		),
	},
	{
		name: "Qual'Idel", slug: 'qualidel', siteUrl: 'https://qualidel.fr/', image: qualidel,
		category: 'healthcare', location: 'France', accent: '#e7007f',
		tags: ['Quality', 'Resources', 'Member area'], focus: ['content', 'reliability', 'responsive', 'ux'],
		copy: copy(
			'A practical quality resource hub supporting better standards in independent nursing practices.',
			'Un espace de ressources pratiques qui accompagne la qualité des cabinets infirmiers libéraux.',
			'Enn lespas resours pratik ki soutenir kalite dan bann kabine infirmie liberal.',
		),
	},
	{
		name: 'Afeebop', slug: 'afeebop', siteUrl: 'https://afeebop.com/', image: afeebop,
		category: 'agency', location: 'France', accent: '#16d8c9',
		tags: ['Agency', 'Creative', 'Digital marketing'], focus: ['content', 'responsive', 'ux', 'performance'],
		copy: copy(
			'A bold agency showcase that turns digital expertise into an energetic and memorable experience.',
			'Une vitrine d’agence audacieuse qui transforme l’expertise digitale en expérience énergique et mémorable.',
			'Enn vitrinn lazans bien for ki transform lexpertiz digital an enn lexperyans enerzik ek memorab.',
		),
	},
	{
		name: 'Adelia Mauritius', slug: 'adelia-mauritius', siteUrl: 'https://adelia.mu/', image: adeliaMauritius,
		category: 'healthcare', location: 'Mauritius', accent: '#69b944',
		tags: ['Sleep care', 'Patient information', 'Local service'], focus: ['content', 'reliability', 'responsive', 'ux'],
		copy: copy(
			'A reassuring healthcare website helping people in Mauritius understand sleep apnoea and find personalised support.',
			'Un site de santé rassurant qui aide les Mauriciens à mieux comprendre l’apnée du sommeil et à trouver un accompagnement personnalisé.',
			'Enn sit lasante rasiran ki ed bann Morisien konpran apne somey ek trouv enn lakonpagnman personalize.',
		),
	},
	{
		name: 'OXYSOM', slug: 'oxysom', siteUrl: 'https://oxysom.re/', image: oxysom,
		category: 'healthcare', location: 'La Réunion', accent: '#3db98d',
		tags: ['Respiratory care', 'Local service', 'Appointments'], focus: ['content', 'reliability', 'responsive', 'ux'],
		copy: copy(
			'A calm, accessible digital presence for respiratory assistance and patient support across Réunion Island.',
			'Une présence numérique apaisante et accessible pour l’assistance respiratoire et l’accompagnement des patients à La Réunion.',
			'Enn prezans digital kalm ek aksesib pou asistans respiratwar ek sipor pasian dan La Réunion.',
		),
	},
	{
		name: 'Colloque Santé Environnement', slug: 'cse-urml-oi', siteUrl: 'https://cse-urml-oi.com/', image: cseUrml,
		category: 'events', location: 'La Réunion', accent: '#43a047',
		tags: ['Event', 'Programme', 'Registration'], focus: ['content', 'reliability', 'responsive', 'ux'],
		copy: copy(
			'An event platform bringing the programme, speakers and registrations for a major health-environment conference into one place.',
			'Une plateforme événementielle qui réunit programme, intervenants et inscriptions pour un colloque majeur sur la santé environnementale.',
			'Enn platform levennman ki rasanble program, intervenan ek inskripsion pou enn gran kolok lor lasante ek lanvironnman.',
		),
	},
	{
		name: 'Inflib', slug: 'inflib', siteUrl: 'https://inflib.com/', image: inflib,
		category: 'healthcare', location: 'France', accent: '#f58220',
		tags: ['Guidance', 'Editorial', 'Lead generation'], focus: ['content', 'reliability', 'responsive', 'performance'],
		copy: copy(
			'A guidance platform that helps nurses move into independent practice with clearer administrative and professional support.',
			'Une plateforme d’accompagnement qui aide les infirmiers à s’installer en libéral avec un parcours administratif et professionnel plus clair.',
			'Enn platform lakonpagnman ki ed bann infirmie koumans travay liberal avek enn parkour administratif ek profesionel pli kler.',
		),
	},
	{
		name: 'Egallys Telecom', slug: 'egallys', siteUrl: 'https://egallys.com/', image: egallys,
		category: 'business', location: 'Mauritius', accent: '#b32031',
		tags: ['Telecom', 'B2B', 'Multilingual'], focus: ['content', 'reliability', 'responsive', 'performance'],
		copy: copy(
			'A multilingual B2B telecom presence focused on trust, clarity and international connectivity.',
			'Une présence B2B multilingue centrée sur la confiance, la clarté et la connectivité internationale.',
			'Enn prezans B2B pliriling ki konsantre lor konfians, klarte ek konektivite internasional.',
		),
	},
	{
		name: 'Wine More Time', slug: 'wine-more-time', siteUrl: 'https://winemoretime.mu/', image: wineMoreTime,
		imageFit: 'contain', category: 'lifestyle', location: 'Mauritius', accent: '#d6a300',
		tags: ['Wine', 'E-commerce', 'Lifestyle'], focus: ['content', 'reliability', 'responsive', 'ux'],
		copy: copy(
			'A refined wine experience created to introduce a curated selection with warmth and personality.',
			'Une expérience œnologique raffinée qui présente une sélection soignée avec chaleur et personnalité.',
			'Enn lexperyans divin rafine ki prezant enn seleksion swagne avek saler ek personalite.',
		),
	},
	{
		name: 'Great Place To Work Mauritius', slug: 'great-place-to-work-mauritius', siteUrl: 'https://greatplacetowork.mu/', image: greatPlaceToWork,
		category: 'business', location: 'Mauritius', accent: '#e60000',
		tags: ['Workplace culture', 'Certification', 'Content'], focus: ['content', 'reliability', 'responsive', 'ux'],
		copy: copy(
			'A locally relevant platform for a global workplace-culture authority, balancing certification information with inspiring employer stories.',
			'Une plateforme locale pour une référence mondiale de la culture d’entreprise, entre informations de certification et histoires inspirantes.',
			'Enn platform lokal pou enn lotorite mondial lor kiltir travay, avek linformasion sertifikasion ek bann zistwar inspirant.',
		),
	},
	{
		name: 'VASCO', slug: 'vasco', siteUrl: 'https://vasco.re/', image: vasco,
		imageFit: 'contain', category: 'events', location: 'La Réunion', accent: '#0d3c5d',
		tags: ['Medical congress', 'Programme', 'Registration'], focus: ['content', 'reliability', 'responsive', 'ux'],
		copy: copy(
			'A focused event website for a major Indian Ocean medical congress, making practical information and registration easy to reach.',
			'Un site événementiel dédié à un congrès médical majeur de l’océan Indien, avec des informations pratiques et une inscription faciles d’accès.',
			'Enn sit levennman pou enn gran kongre medikal Losean Indien, avek linformasion pratik ek inskripsion fasil pou trouve.',
		),
	},
];

export default portfolio;
