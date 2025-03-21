import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import WorkBox from '../../components/WorkBox/WorkBox';
import { StyledBoxHome } from '../Home/home.styles';
import { StyledBoxWorks } from './work.styles';

const Work = () => {
	return (
		<StyledBoxHome>
			<Header title='WORK' />
			<Slider />
			<StyledBoxWorks>
				<WorkBox />
			</StyledBoxWorks>
		</StyledBoxHome>
	);
};

export default Work;
