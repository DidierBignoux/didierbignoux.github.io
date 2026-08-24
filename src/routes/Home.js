import React from 'react';

//PreLoader
import { LoaderThreeDemo } from '@/components/ui/loader';

//components
import HomeHeader from '../components/headers/HomeHeader';
import Footer from '../components/footer/Footer';
import HorizontalBar from '../components/horizontalBar/HorizontalBar';
import BackToTop from '../components/backToTop/BackToTop';

//Section
import Brand from '../components/homeSection/Brand/brand';
import About from '../components/homeSection/about/About';
import Work from '../components/homeSection/work/workiso';
// import WorkExample from '../Section/Work/workExample';
import JobHistory from '../components/homeSection/job/jobHistory';
import Service from '../components/homeSection/service/Service';

class Home extends React.Component {
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
					<Brand />
					<About />
					<JobHistory />
					<Work />
					{/* <WorkExample /> */}
					<Service />

					<Footer />
					<HorizontalBar />
					<BackToTop />
				</div>
			</React.Fragment>
		);
	}
}
export default Home;
