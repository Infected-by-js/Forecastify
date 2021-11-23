import backgroundMoonSmall from '../assets/Background-moon-s.svg';
import backgroundMoonBig from '../assets/Background-moon-b.svg';
import backgroundSunSmall from '../assets/Background-sun-s.svg';
import backgroundSunBig from '../assets/Background-sun-b.svg';

const themeDay = {
	color: '#000',
	backgroundColor: '#fff',
	footerBackground: 'rgba(0, 0, 0, 0.15)',
	backgroundImageSmall: backgroundSunSmall,
	backgroundImageBig: backgroundSunBig,
};

const themeNight = {
	color: '#fff',
	backgroundColor: '#383838',
	footerBackground: 'rgba(255, 255, 255, 0.15)',
	backgroundImageSmall: backgroundMoonSmall,
	backgroundImageBig: backgroundMoonBig,
};

export const themes = {
	day: themeDay,
	night: themeNight,
};
