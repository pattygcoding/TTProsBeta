import t from '@/config/text.json';
import data from '@/config/datapack.json';
import { gameIds } from '@/utils/utils.js';

export function calculatePrice(selectedPackageType, formData) {
	let packagePrices = {
		add_ons: {},
	};

	let priceField;
	switch (selectedPackageType) {
		case 'intruder':
		case 'cub':
		case 'standard':
			priceField = 'price_standard';
			break;
		case 'ultimate':
		case 'vip':
		case 'premium':
			priceField = 'price_premium';
			break;
		default:
			console.error('ERROR: Could not determine package type.');
			return 0;
	}

	// Initialize game prices
	data.game_fields.forEach((game) => {
		packagePrices[game.id] = game[priceField];
	});

	// Initialize add-on prices
	data.add_on_fields.forEach((addOnField) => {
		packagePrices.add_ons[addOnField] = t.packages.add_ons[addOnField].price;
	});

	let totalAmount = 0;
	let numberOfGames = 0;

	// Check if season is selected
	if (formData.include_season) {
		totalAmount += packagePrices['season'];
		numberOfGames = 7; // Season includes all 7 games
	} else {
		// Calculate total for selected games and count them
		data.game_fields.forEach((game) => {
			if (formData[`include_${game.id}`]) {
				totalAmount += packagePrices[game.id];
				numberOfGames += 1;
			}
		});
	}

	// Calculate total for selected add-ons per game
	data.add_on_fields.forEach((addOnField) => {
		if (formData[`include_${addOnField}`]) {
			const amount = formData[`${addOnField}_amount`] || 0;
			const addOnPricePerGame = packagePrices.add_ons[addOnField] * amount;
			totalAmount += addOnPricePerGame * numberOfGames;
		}
	});

	return totalAmount;
}

export function isGameSelected(formData) {
	return gameIds.some((game) => formData[`include_${game}`]);
}

export function validCountValues(formData) {
	const amounts = data.add_on_fields.map((addOn) =>
		formData[`include_${addOn}`] ? formData[`${addOn}_amount`] : null
	);

	return amounts.every((amount) => amount === null || amount > 0);
}