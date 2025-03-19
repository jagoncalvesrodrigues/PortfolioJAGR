import { motion } from 'framer-motion';
import { StyledSlider, StyledWord } from './slider.styles';
import { words } from '../../constants/constants';

const Slider = () => {
	return (
		<StyledSlider>
			<StyledWord
				as={motion.div}
				initial={{ x: 0 }}
				animate={{ x: -1000 }}
				transition={{
					repeat: Infinity,
					duration: 15,
					ease: 'linear'
				}}
			>
				{words.concat(words).map((word, index) => (
					<span key={index}>{word}</span>
				))}
			</StyledWord>
		</StyledSlider>
	);
};

export default Slider;
