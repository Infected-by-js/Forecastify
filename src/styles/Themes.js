import backgroundMoonSmall from '../assets/Background-moon-s.svg';
import backgroundMoonBig from '../assets/Background-moon-b.svg';
import backgroundSunSmall from '../assets/Background-sun-s.svg';
import backgroundSunBig from '../assets/Background-sun-b.svg';

const themeDay = {
	color: '#000',
	backgroundColor: '#fff',
	inversedBackground: 'rgba(0, 0, 0, 0.05)',
	backgroundImageSmall: backgroundSunSmall,
	backgroundImageBig: backgroundSunBig,
	spinnerColor: '#ff6f44',
};

const themeNight = {
	color: '#fff',
	backgroundColor: '#383838',
	inversedBackground: 'rgba(255, 255, 255, 0.05)',
	backgroundImageSmall: backgroundMoonSmall,
	backgroundImageBig: backgroundMoonBig,
	spinnerColor: '#8035fa',
};

export const themes = {
	day: themeDay,
	night: themeNight,
};
