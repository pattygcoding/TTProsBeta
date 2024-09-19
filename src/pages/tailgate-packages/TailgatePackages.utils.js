import t from '@/config/text.json';
import data from '@/config/datapack.json';

export function calculatePrice(selectedPackageType, formData) {
    let packagePrices = {
      add_ons: {},
    };
  
    let priceField;
    switch (selectedPackageType) {
      case 'intruder':
      case 'cub':
        priceField = 'price_cub';
        break;
      case 'ultimate':
      case 'vip':
        priceField = 'price_vip';
        break;
      default:
        console.error('ERROR: Could not determine package type.');
        return 0;
    }
  
    data.game_fields.forEach((gameField) => {
      packagePrices[gameField] = t.packages[gameField][priceField];
    });
  
    data.add_on_fields.forEach((addOnField) => {
      packagePrices.add_ons[addOnField] = t.packages.add_ons[addOnField].price;
    });
  
    let totalAmount = 0;
  
    data.game_fields.forEach((gameField) => {
      if (formData[`include_${gameField}`]) {
        totalAmount += packagePrices[gameField];
      }
    });
  
    data.add_on_fields.forEach((addOnField) => {
      if (formData[`include_${addOnField}`]) {
        const amount = formData[`${addOnField}_amount`];
        totalAmount += packagePrices.add_ons[addOnField] * amount;
      }
    });
  
    return totalAmount;
  }

export function isGameSelected(formData) {
    return data.game_fields.some((game) => formData[`include_${game}`]);
}

export function validCountValues(formData) {
    const amounts = data.add_on_fields.map((addOn) => 
        formData[`include_${addOn}`] ? formData[`${addOn}_amount`] : null
    );

    return amounts.every((amount) => amount === null || amount > 0);
}
