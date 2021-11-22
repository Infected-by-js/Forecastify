import { useState, useMemo } from 'react';
import { themes } from '../styles/Themes';

export const useTheme = () => {
	const [isNight, setIsNight] = useState(false);

	const currentTheme = useMemo(() => {
		return isNight ? themes.night : themes.day;
	}, [isNight]);

	return {
		currentTheme,
		isNight,
		setIsNight,
	};
};
