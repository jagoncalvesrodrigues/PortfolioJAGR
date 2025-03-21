import { COLORS } from '../../constants/colors';
import { ICONS } from '../../constants/icons';
import { StyledTechWork, StyledTitleWork, StyledWork } from './workBox.styles';

const WorkBox = () => {
	return (
		<>
			{ICONS.map((icon, iconIndex) => (
				<StyledWork key={iconIndex}>
					<StyledTitleWork>{icon.name}</StyledTitleWork>
					<StyledTechWork>
						{icon.iconsColor.map((IconComponent, index) => (
							<>{<IconComponent size={25} color={COLORS.green600} />}</>
						))}
					</StyledTechWork>
				</StyledWork>
			))}
		</>
	);
};

export default WorkBox;
