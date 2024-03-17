export function formatMoney(amount: number) {
	return `$${new Intl.NumberFormat('us-US')
		.format(parseFloat(amount.toFixed(2)))
		.replace(',', '.')
		.replace(/\.\d$/, '$&0')}`;
}
