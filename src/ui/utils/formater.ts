export const formatMoney = (value: number) => {
	return value.toLocaleString('pl-PL', {
		style: 'currency',
		currency: 'PLN',
	});
}

