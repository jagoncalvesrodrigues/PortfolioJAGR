import { TECH } from '../../constants/technologies';
import {
	StyledBoxTechnologies,
	StyledBoxTitleTech,
	StyledImageText,
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
						{tech.map((IconComponent, iconIndex) => (
							<StyledImageText
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
							>
								{<IconComponent key={iconIndex} size={35} />}
							</StyledImageText>
						))}
					</StyledSingBoxTech>
				))}
			</StyledTechnologiesBoxes>
		</StyledBoxTechnologies>
	);
};

export default Techonologies;
