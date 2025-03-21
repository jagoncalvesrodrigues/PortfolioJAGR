import { transitionText } from '../../constants/motionVariants';
import {
	StyledName,
	StyledPositionText,
	StyledSubTitle,
	StyledTitle,
	StyledTitleHeader
} from './header.styles';

const Header = ({ info, title }) => {
	return (
		<StyledTitleHeader>
			<StyledTitle animate={{ x: [-800, 100, 0] }} transition={transitionText}>
				{title}
			</StyledTitle>
			<StyledPositionText>
				<StyledName animate={{ x: [-500, 200, 0] }} transition={transitionText}>
					JUAN ANTONIO GONCALVES RODRIGUES
				</StyledName>
				<StyledSubTitle>{info}</StyledSubTitle>
			</StyledPositionText>
		</StyledTitleHeader>
	);
};
export default Header;
