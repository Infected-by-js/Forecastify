const delayTime = 1.1;
const durationTime = 0.5;

export const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	transition: { duration: durationTime },
};

export const scaleInVariants = {
	hidden: { scale: 0 },
	visible: { scale: 1 },
	transition: { duration: durationTime, delay: delayTime },
};

export const swipeTopVariants = {
	hidden: { opacity: 0, y: '-100%' },
	visible: { opacity: 1, y: 0 },
	transition: { duration: durationTime, delay: delayTime },
};

export const swipeLeftVariants = {
	hidden: { opacity: 0, x: '-100%' },
	visible: { opacity: 1, x: 0 },
	transition: { duration: durationTime, delay: delayTime },
};
export const swipeRightVariants = {
	hidden: { opacity: 0, x: '100%' },
	visible: { opacity: 1, x: 0 },
	transition: { duration: durationTime, delay: delayTime },
};

export const loaderVariants = {
	initial: {
		x: '-50%',
		y: '-50%',
	},

	animate: {
		x: '-50%',
		y: '-50%',
		rotate: [0, 360],
	},
	transition: {
		duration: 1.5,
		repeat: Infinity,
		ease: 'linear',
	},
};
