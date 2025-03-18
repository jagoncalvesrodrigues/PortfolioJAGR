import { useEffect, useRef } from 'react';
import { words } from '../../constants/constants';
import {
	StyledBoxBio,
	StyledBoxHome,
	StyledBoxImgProfile,
	StyledBoxInfoBio,
	StyledBoxPersonalInfo,
	StyledBoxTechnologies,
	StyledBoxTitleTech,
	StyledImgTech,
	StyledInfoP,
	StyledName,
	StyledParagraph,
	StyledParagraphBold,
	StyledParagraphBoldW,
	StyledSingBoxTech,
	StyledSlider,
	StyledSubTitle,
	StyledTechnologiesBoxes,
	StyledTitle,
	StyledTitleHeader,
	StyledTitlePersonal,
	StyledWord
} from './home.styles';
import { motion } from 'framer-motion';
import { PERSONAL, TECH } from '../../constants/technologies';

const Home = () => {
	return (
		<StyledBoxHome>
			<StyledTitleHeader>
				<StyledTitle>FRONT END DEVELOPPER</StyledTitle>
				<StyledName>JUAN ANTONIO GONCALVES RODRIGUES</StyledName>
				<StyledSubTitle>
					25 year old creative developer in love with pixels and visual
					experiences.
				</StyledSubTitle>
			</StyledTitleHeader>

			<StyledSlider>
				<StyledWord
					as={motion.div}
					initial={{ x: 0 }}
					animate={{ x: -1000 }}
					transition={{
						repeat: Infinity,
						duration: 15,
						ease: 'linear'
					}}
				>
					{words.concat(words).map((word, index) => (
						<span key={index}>{word}</span>
					))}
				</StyledWord>
			</StyledSlider>
			<StyledBoxBio>
				<StyledBoxImgProfile>
					<img src='/assets/images/designs/myself.jpeg' alt='' />
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
			<StyledBoxTechnologies>
				<StyledBoxTitleTech>
					<p>TECHNOLOGIES</p>
				</StyledBoxTitleTech>
				<StyledTechnologiesBoxes>
					{TECH.map((tech, techIndex) => (
						<StyledSingBoxTech key={techIndex}>
							{tech.map((icon, iconIndex) => (
								<StyledImgTech key={iconIndex} src={icon} alt='' />
							))}
						</StyledSingBoxTech>
					))}
				</StyledTechnologiesBoxes>
			</StyledBoxTechnologies>
			<StyledBoxPersonalInfo>
				{PERSONAL.map((personal, personalIndex) => (
					<StyledInfoP>
						<StyledTitlePersonal>{personal.name}</StyledTitlePersonal>
						<img src={personal.img} alt='' />
					</StyledInfoP>
				))}
			</StyledBoxPersonalInfo>
		</StyledBoxHome>
	);
};

export default Home;
