import { PERSONAL } from '../../constants/technologies';
import {
	StyledBoxPersonalInfo,
	StyledInfoP,
	StyledTitlePersonal
} from './personalInfo.styles';

const PersonalInfo = () => {
	return (
		<StyledBoxPersonalInfo>
			{PERSONAL.map((personal, personalIndex) => (
				<StyledInfoP key={personalIndex} onClick={personal.link}>
					<StyledTitlePersonal>{personal.name}</StyledTitlePersonal>
					<img src={personal.img} alt='' />
				</StyledInfoP>
			))}
		</StyledBoxPersonalInfo>
	);
};

export default PersonalInfo;
