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
					designer specialized in creating efficient digital solutions with a
					careful and functional design, using technologies such as{' '}
					<StyledParagraphBold>React</StyledParagraphBold> and{' '}
					<StyledParagraphBold>Angular</StyledParagraphBold>. My background has
					allowed me to develop projects that optimize the user experience and
					bring value to every interaction.
				</StyledParagraph>
				<StyledParagraph>
					I am characterized by good communication, teamwork and a focus on
					agile methodologies. I have collaborated with clients such as BBVA and
					Carolina Herrera directly with the client. Also designing attractive
					and functional interfaces that meet usability and performance
					standards.
				</StyledParagraph>
			</StyledBoxInfoBio>
		</StyledBoxBio>
	);
};

export default InfoBio;
