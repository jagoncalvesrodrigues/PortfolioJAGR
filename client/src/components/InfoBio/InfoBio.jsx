import {
	StyledBoxBio,
	StyledBoxImgProfile,
	StyledBoxInfoBio,
	StyledImgProfile,
	StyledParagraph,
	StyledParagraphBold,
	StyledParagraphBoldW
} from './infoBio.styles';

const InfoBio = () => {
	return (
		<StyledBoxBio>
			<StyledBoxImgProfile>
				<StyledImgProfile src='/assets/images/designs/self.jpg' alt='' />
			</StyledBoxImgProfile>
			<StyledBoxInfoBio>
				<StyledParagraph>
					<StyledParagraphBoldW>W</StyledParagraphBoldW>eb developer and
					designer focused on finding solutions with a neat and simple look,
					using frameworks such as{' '}
					<StyledParagraphBold>React</StyledParagraphBold>,{' '}
					<StyledParagraphBold>Angular</StyledParagraphBold>, my goal is to
					offer the user a comfortable, attractive and enjoyable experience.
				</StyledParagraph>
				<StyledParagraph>
					I am characterized by good communication and teamwork, which I see
					necessary when working in a team.
				</StyledParagraph>
			</StyledBoxInfoBio>
		</StyledBoxBio>
	);
};

export default InfoBio;
