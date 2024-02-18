export const getProducts = async () => {
	return [
		{
			id: '1',
			product: {
				category: 'Computers & Tablets',
				name: 'Acer Aspire 5',
				price: 2599.99,
				coverImage: {
					src: '/images/Laptop_1.png',
					alt: 'Acer Aspire 5',
				},
			},
		},

		{
			id: '2',
			product: {
				category: 'Computers & Tablets',
				name: 'Lenovo IdeaPad 3',
				price: 1999.99,
				coverImage: {
					src: '/images/Laptop_2.png',
					alt: 'Lenovo IdeaPad 3',
				},
			},
		},
		{
			id: '3',
			product: {
				category: 'Computers & Tablets',
				name: 'Asus VivoBook 15',
				price: 2299.99,
				coverImage: {
					src: '/images/Laptop_3.png',
					alt: 'Asus VivoBook 15',
				},
			},
		},
		{
			id: '4',
			product: {
				category: 'Computers & Tablets',
				name: 'Dell Inspiron 15',
				price: 2499.99,
				coverImage: {
					src: '/images/Laptop_4.png',
					alt: 'Dell Inspiron 15',
				},
			},
		},
		{
			id: '5',
			product: {
				category: 'Computers & Tablets',
				name: 'Tablet Samsung Galaxy Tab A7 3GB 32GB 10.4"',
				price: 999.99,
				coverImage: {
					src: '/images/Tablet_1.png',
					alt: 'Dell Inspiron 15',
				},
			},
		},
		{
			id: '6',
			product: {
				category: 'Computers & Tablets',
				name: 'Tablet Sony Xperia Z4 3GB 32GB 10.1"',
				price: 1499.99,
				coverImage: {
					src: '/images/Tablet_2.png',
					alt: 'Dell Inspiron 15',
				},
			},
		},
	];
};