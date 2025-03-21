import { Link, useLocation } from 'react-router-dom';
import {
	StyledBoxMainMenu,
	StyledBoxMenu,
	StyledButtonToggle,
	StyledGameImg,
	StyledLink,
	StyledMotionMenuMobile,
	StyledOptionMenu,
	StyledOptionsBox
} from './menu.styles';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { menuTransition, menuVariants } from '../../constants/motionVariants';

const Menu = () => {
	const location = useLocation();
	const [activePath, setActivePath] = useState('');
	const [toggleMenu, setToggleMenu] = useState(false);

	useEffect(() => {
		setActivePath(location.pathname);
	}, [location]);

	return (
		<StyledBoxMainMenu>
			<StyledBoxMenu>
				<img src='/assets/images/icons/Logo-wise.svg' alt='' />
				<StyledOptionsBox>
					<StyledLink isActive={activePath === '/'} to='/'>
						About Me
					</StyledLink>
					<StyledLink isActive={activePath === '/work'} to='/work'>
						Work
					</StyledLink>
					<StyledLink>Contact</StyledLink>
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
