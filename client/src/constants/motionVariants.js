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
