export function formatMoney(amount: number) {
	return `$${new Intl.NumberFormat('us-US')
		.format(parseFloat(amount.toFixed(2)))
		.replace(',', '.')
		.replace(/\.\d$/, '$&0')}`;
}

export function formatDate(date: string) {
	return new Intl.DateTimeFormat('us-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	}).format(new Date(date));
}
