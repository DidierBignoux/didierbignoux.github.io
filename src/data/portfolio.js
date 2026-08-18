import work1 from '../assets/img/work/w1.jpg';
import work2 from '../assets/img/work/w2.jpg';
import work3 from '../assets/img/work/w3.jpg';
import work4 from '../assets/img/work/w4.jpg';
import work5 from '../assets/img/work/w5.jpg';

const portfolio = [
	{
		name: 'My best client',
		slug: 'my-best-client',
		project: 'Client Project',
		url: '/project/my-best-client',
		img: [work1],
		category: ['all', 'frontend', 'ux-ui'],
		short: 'A top client project focused on conversion and usability.',
	},
	{
		name: 'My favorite case',
		slug: 'my-favorite-case',
		project: 'Client Project',
		url: '/project/my-favorite-case',
		img: [work2],
		category: ['all', 'mobile', 'ux-ui'],
		short: 'Mobile-first product with a clean user flow.',
	},
	{
		name: 'A old job',
		slug: 'a-old-job',
		project: 'Client Project',
		url: '/project/a-old-job',
		img: [work3],
		category: ['all', 'frontend', 'mobile'],
		short: 'Legacy website rebuild and performance improvements.',
	},
	{
		name: 'It is a really cool website',
		slug: 'cool-website',
		project: 'Client Project',
		url: '/project/cool-website',
		img: [work4],
		category: ['all', 'frontend', 'ux-ui', 'others'],
		short: 'Design-driven site with rich interactions.',
	},
	{
		name: 'Something more',
		slug: 'something-more',
		project: 'Client Project',
		url: '/project/something-more',
		img: [work5],
		category: ['all', 'others'],
		short: 'Experimental project focusing on animation and branding.',
	},
];

export default portfolio;
