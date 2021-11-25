import React from 'react';
import * as S from './styles.js';
import { motion } from 'framer-motion';
import { fadeInVariants, loaderVariants } from '../../helpers/motionUtils.js';

export const Loader = () => {
	return (
		<S.LoaderWrapp
			as={motion.div}
			initial={fadeInVariants.hidden}
			animate={fadeInVariants.visible}
			transition={fadeInVariants.transition}
		>
			<S.Loader
				as={motion.div}
				initial={loaderVariants.initial}
				animate={loaderVariants.animate}
				transition={loaderVariants.transition}
			/>
		</S.LoaderWrapp>
	);
};
