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
					{<personal.img size={40} />}
				</StyledInfoP>
			))}
		</StyledBoxPersonalInfo>
	);
};

export default PersonalInfo;
