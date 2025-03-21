export const menuVariants = {
	hidden: { y: '-100%', opacity: 0 },
	visible: { y: '0%', opacity: 1 },
	exit: { y: '-100%', opacity: 0 },
};

export const menuTransition = {
	type: 'spring',
	stiffness: 80,
	damping: 15,
	duration: 0.5,
};

export const transitionText = {
duration: 2,
delay: 0.5,
ease: [0, 0.71, 0.2, 1.01],
}