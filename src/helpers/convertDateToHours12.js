export const convertHours12To24 = (hours12, modifier) => {
	let convertedHours = hours12;
	if (modifier === 'PM' && convertedHours < 12) convertedHours = +convertedHours + 12;
	if (modifier === 'AM' && convertedHours === 12) convertedHours = +convertedHours - 12;

	let hours24 = String(convertedHours);

	return hours24;
};

export const formatDateToLocale = (currentTime) => {
	const dateLocaleOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	};
	const localeDate = new Date(currentTime).toLocaleString('en-US', dateLocaleOptions);

	const [weekday, monthAndDay, year, fullTime] = localeDate.split(', ');
	const [month, day] = monthAndDay.split(' ');
	const [time, modifier] = fullTime.split(' ');
	const [hours12, minutes] = time.split(':');
	const hours24 = convertHours12To24(hours12, modifier);

	return {
		weekday,
		day,
		month,
		year,
		hours12,
		hours24,
		minutes,
		modifier,
		date: `${day} ${month} ${year}`,
		time12h: `${hours12}:${minutes} ${modifier}`,
		time24h: `${hours24}:${minutes}`,
		timestamp: Date.parse(currentTime),
	};
};
