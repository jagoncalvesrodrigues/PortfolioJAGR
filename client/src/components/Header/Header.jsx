import {
	StyledName,
	StyledSubTitle,
	StyledTitle,
	StyledTitleHeader
} from './header.styles';

const Header = ({ info, title }) => {
	return (
		<StyledTitleHeader>
			<StyledTitle>{title}</StyledTitle>
			<StyledName>JUAN ANTONIO GONCALVES RODRIGUES</StyledName>
			<StyledSubTitle>{info}</StyledSubTitle>
		</StyledTitleHeader>
	);
};

export default Header;
