export function formatMoney(amount: number, currency = 'PLN') {
	return new Intl.NumberFormat('pl-PL', {
		style: 'currency',
		currency,
	}).format(amount);
}
