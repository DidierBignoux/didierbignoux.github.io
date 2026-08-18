import React from 'react';

//PreLoader
import { LoaderThreeDemo } from '@/components/ui/loader';

//components
import Header from '../components/headers/Header';
import Footer from '../components/footer/Footer';
import HorizontalBar from '../components/horizontalBar/HorizontalBar';
import BackToTop from '../components/backToTop/BackToTop';

//Section
import Brand from '../components/homeSection/Brand/brand';
import About from '../components/homeSection/about/About';
import Work from '../components/homeSection/work/workiso';
import JobHistory from '../components/homeSection/job/jobHistory';
import Service from '../components/homeSection/service/Service';

class AboutPage extends React.Component {
	state = {
		isLoading: true,
	};

	handleLoadingComplete = () => {
		this.setState({ isLoading: false });
	};

	render() {
		return (
			<React.Fragment>
				<LoaderThreeDemo />

				<div>
					<Header name={'About'} />
					<Brand />
					<About />
					<JobHistory />
					<Work />
					<Service />

					<Footer />
					<HorizontalBar />
					<BackToTop />
				</div>
			</React.Fragment>
		);
	}
}

export default AboutPage;
