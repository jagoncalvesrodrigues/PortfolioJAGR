import { TECH } from '../../constants/technologies';
import {
	StyledBoxTechnologies,
	StyledBoxTitleTech,
	StyledImgTech,
	StyledSingBoxTech,
	StyledTechnologiesBoxes,
	StyledTitleTech
} from './technologies.styles';

const Techonologies = () => {
	return (
		<StyledBoxTechnologies>
			<StyledBoxTitleTech>
				<StyledTitleTech>TECHNOLOGIES</StyledTitleTech>
			</StyledBoxTitleTech>
			<StyledTechnologiesBoxes>
				{TECH.map((tech, techIndex) => (
					<StyledSingBoxTech key={techIndex}>
						{tech.map((icon, iconIndex) => (
							<StyledImgTech
								key={iconIndex}
								src={icon}
								alt=''
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
							/>
						))}
					</StyledSingBoxTech>
				))}
			</StyledTechnologiesBoxes>
		</StyledBoxTechnologies>
	);
};

export default Techonologies;
