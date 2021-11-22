
const getDateIntl = (timeZone) => {
	return new Intl.DateTimeFormat('en', {
		timeZone,
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	});
};

export const DateIntl = getDateIntl;
