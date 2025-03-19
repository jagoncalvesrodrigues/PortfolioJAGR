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
					<Link to='/'>About Me</Link>
					<Link to='/work'>Work</Link>
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
							<Link to='/'>
								<StyledOptionMenu onClick={() => setToggleMenu(!toggleMenu)}>
									About Me
								</StyledOptionMenu>
							</Link>
							<Link to='/work'>
								<StyledOptionMenu onClick={() => setToggleMenu(!toggleMenu)}>
									Work
								</StyledOptionMenu>
							</Link>
							<StyledOptionMenu onClick={() => setToggleMenu(!toggleMenu)}>
								Contact
							</StyledOptionMenu>
						</ul>
					</StyledMotionMenuMobile>
				)}
			</AnimatePresence>
		</StyledBoxMainMenu>
	);
};

export default Menu;
