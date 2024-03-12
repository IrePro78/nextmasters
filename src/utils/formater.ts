export function formatMoney(amount: number) {
	return `$${new Intl.NumberFormat('us-US').format(amount).replace(',', '.').replace(/\.\d$/, '$&0')}`;
}
