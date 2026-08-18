import React from 'react';

//PreLoader
import { LoaderThreeDemo } from '@/components/ui/Loader';

//components
import HomeHeader from '../components/headers/HomeHeader';
import Footer from '../components/footer/Footer';
import HorizontalBar from '../components/horizontalBar/HorizontalBar';
import BackToTop from '../components/backToTop/BackToTop';

//Sections
import Brand from '../components/homeSection/brand/Brand';
import About from '../components/homeSection/about/About';
import Work from '../components/homeSection/work/WorkPortfolio';
import JobHistory from '../components/homeSection/job/JobHistory';
import Service from '../components/homeSection/service/Service';

class LandingPage extends React.Component {
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
					<HomeHeader />

					{/* Brand Section */}
					<div id="brand">
						<Brand />
					</div>

					{/* About Section */}
					<div id="about">
						<About />
					</div>

					{/* Job History Section */}
					<div id="job">
						<JobHistory />
					</div>

					{/* Work/Portfolio Section */}
					<div id="work">
						<Work />
					</div>

					{/* Service Section */}
					<div id="service">
						<Service />
					</div>

					<Footer />
					<HorizontalBar />
					<BackToTop />
				</div>
			</React.Fragment>
		);
	}
}

export default LandingPage;
