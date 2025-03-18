import { Link } from 'react-router-dom';
import {
	StyledBoxMainMenu,
	StyledBoxMenu,
	StyledButtonToggle,
	StyledGameImg,
	StyledMotionMenuMobile,
	StyledOptionMenu,
	StyledOptionsBox
} from './menu.styles';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { menuTransition, menuVariants } from '../../constants/motionVariants';

const Menu = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<StyledBoxMainMenu>
			<StyledBoxMenu>
				<img src='/assets/images/icons/Logo-wise.svg' alt='' />
				<StyledOptionsBox>
					<Link>About Me</Link>
					<Link>Work</Link>
					<Link>Contact</Link>
				</StyledOptionsBox>
				<StyledGameImg src='/assets/images/icons/game.svg' alt='' />

				<StyledButtonToggle onClick={() => setToggleMenu(!toggleMenu)}>
					{toggleMenu ? 'Close' : 'Menu'}
				</StyledButtonToggle>
			</StyledBoxMenu>
			<AnimatePresence>
				{toggleMenu && (
					<StyledMotionMenuMobile
						initial='hidden'
						animate='visible'
						exit='exit'
						variants={menuVariants}
						transition={menuTransition}
					>
						<ul>
							<StyledOptionMenu>About Me</StyledOptionMenu>
							<StyledOptionMenu>Work</StyledOptionMenu>
							<StyledOptionMenu>Contact</StyledOptionMenu>
						</ul>
					</StyledMotionMenuMobile>
				)}
			</AnimatePresence>
		</StyledBoxMainMenu>
	);
};

export default Menu;
