import { StyledBoxHome } from './home.styles';

import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import InfoBio from '../../components/InfoBio/InfoBio';
import Technologies from '../../components/Technologies/Technologies';
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo';

const Home = () => {
	return (
		<StyledBoxHome>
			<Header
				title='FRONT END DEVELOPPER'
				info='25 year old creative developer in love with pixels and visual experiences.'
			/>
			<Slider />
			<InfoBio />
			<Technologies />
			<PersonalInfo />
		</StyledBoxHome>
	);
};
export default Home;
