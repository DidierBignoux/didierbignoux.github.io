import React from 'react';
import { LoaderThreeDemo } from '@/components/ui/Loader';
import HomeHeader from '../components/headers/HomeHeader';
import Footer from '../components/footer/Footer';
import HorizontalBar from '../components/horizontalBar/HorizontalBar';
import BackToTop from '../components/backToTop/BackToTop';
import Brand from '../components/homeSection/brand/Brand';
import About from '../components/homeSection/about/About';
import JobHistory from '../components/homeSection/job/JobHistory';
import Service from '../components/homeSection/service/Service';

function HomePage() {
	return (
		<>
			<LoaderThreeDemo />
			<main>
				<HomeHeader />
				<Brand />
				<About />
				<JobHistory />
				<Service />
			</main>
			<Footer />
			<HorizontalBar />
			<BackToTop />
		</>
	);
}

export default HomePage;
