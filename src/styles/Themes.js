import backgroundMoonSmall from '../assets/Background-moon-s.svg';
import backgroundMoonBig from '../assets/Background-moon-b.svg';
import backgroundSunSmall from '../assets/Background-sun-s.svg';
import backgroundSunBig from '../assets/Background-sun-b.svg';

const themeDay = {
	color: '#000',
	backgroundColor: '#fff',
	backgroundImageSmall: backgroundSunSmall,
	backgroundImageBig: backgroundSunBig,
};

const themeNight = {
	color: '#fff',
	backgroundColor: '#383838',
	backgroundImageSmall: backgroundMoonSmall,
	backgroundImageBig: backgroundMoonBig,
};

export const themes = {
	day: themeDay,
	night: themeNight,
};
