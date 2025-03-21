import { a } from 'framer-motion/client';
import { COLORS } from '../../constants/colors';
import { ICONS } from '../../constants/icons';
import { StyledTechWork, StyledTitleWork, StyledWork } from './workBox.styles';

const WorkBox = () => {
	return (
		<>
			{ICONS.map((icon, iconIndex) => (
				<a key={iconIndex} href={icon.link} target='_blank'>
					<StyledWork>
						<StyledTitleWork>{icon.name}</StyledTitleWork>
						<StyledTechWork>
							{icon.iconsColor.map((IconComponent, index) => (
								<>
									{
										<IconComponent
											key={index}
											size={25}
											color={COLORS.green600}
										/>
									}
								</>
							))}
						</StyledTechWork>
					</StyledWork>
				</a>
			))}
		</>
	);
};

export default WorkBox;
