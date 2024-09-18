import t from '@/config/text.json';

export function calculatePrice(selectedPackageType, formData) {
    let packagePrices = {
        season: 0,
        game_one: 0,
        game_two: 0,
        game_three: 0,
        game_four: 0,
        game_five: 0,
        game_six: 0,
        game_seven: 0,
        add_ons: {
            cooler: t.packages.add_ons.cooler.price,
            chair: t.packages.add_ons.chair.price,
            table: t.packages.add_ons.table.price,
            tent: t.packages.add_ons.tent.price,
            cocktail_table: t.packages.add_ons.cocktail_table.price,
            side_tent: t.packages.add_ons.side_tent.price,
            cornhole_boards: t.packages.add_ons.cornhole_boards.price,
            premium_chair: t.packages.add_ons.premium_chair.price,
        },
    };

    switch (selectedPackageType) {
        case 'intruder':
        case 'cub':
            packagePrices.season = t.packages.season.price_cub;
            packagePrices.game_one = t.packages.game_one.price_cub;
            packagePrices.game_two = t.packages.game_two.price_cub;
            packagePrices.game_three = t.packages.game_three.price_cub;
            packagePrices.game_four = t.packages.game_four.price_cub;
            packagePrices.game_five = t.packages.game_five.price_cub;
            packagePrices.game_six = t.packages.game_six.price_cub;
            packagePrices.game_seven = t.packages.game_seven.price_cub;
            break;
        case 'ultimate':
        case 'vip':
            packagePrices.season = t.packages.season.price_vip;
            packagePrices.game_one = t.packages.game_one.price_vip;
            packagePrices.game_two = t.packages.game_two.price_vip;
            packagePrices.game_three = t.packages.game_three.price_vip;
            packagePrices.game_four = t.packages.game_four.price_vip;
            packagePrices.game_five = t.packages.game_five.price_vip;
            packagePrices.game_six = t.packages.game_six.price_vip;
            packagePrices.game_seven = t.packages.game_seven.price_vip;
            break;
        default:
            console.error("ERROR: Could not calculate package costs.")
            break;
    }

    let totalAmount = 0;

    if (formData.include_season) totalAmount += packagePrices.season;
    if (formData.include_game_one) totalAmount += packagePrices.game_one;
    if (formData.include_game_two) totalAmount += packagePrices.game_two;
    if (formData.include_game_three) totalAmount += packagePrices.game_three;
    if (formData.include_game_four) totalAmount += packagePrices.game_four;
    if (formData.include_game_five) totalAmount += packagePrices.game_five;
    if (formData.include_game_six) totalAmount += packagePrices.game_six;
    if (formData.include_game_seven) totalAmount += packagePrices.game_seven;

    if (formData.include_cooler)
        totalAmount += packagePrices.add_ons.cooler * formData.cooler_amount;
    if (formData.include_chair)
        totalAmount += packagePrices.add_ons.chair * formData.chair_amount;
    if (formData.include_table)
        totalAmount += packagePrices.add_ons.table * formData.table_amount;
    if (formData.include_tent)
        totalAmount += packagePrices.add_ons.tent * formData.tent_amount;
    if (formData.include_cocktail_table)
        totalAmount += packagePrices.add_ons.cocktail_table * formData.cocktail_table_amount;
    if (formData.include_side_tent)
        totalAmount += packagePrices.add_ons.side_tent * formData.side_tent_amount;
    if (formData.include_cornhole_boards)
        totalAmount += packagePrices.add_ons.cornhole_boards * formData.cornhole_boards_amount;
    if (formData.include_premium_chair)
        totalAmount += packagePrices.add_ons.premium_chair * formData.premium_chair_amount;

    return totalAmount;
}


export const initialFormData = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    include_season: '',
    include_game_one: '',
    include_game_two: '',
    include_game_three: '',
    include_game_four: '',
    include_game_five: '',
    include_game_six: '',
    include_game_seven: '',
    include_cooler: '',
    include_chair: '',
    include_table: '',
    include_tent: '',
    include_cocktail_table: '',
    include_side_tent: '',
    include_cornhole_boards: '',
    include_premium_chair: '',
    cooler_amount: 1,
    chair_amount: 1,
    table_amount: 1,
    tent_amount: 1,
    cocktail_table_amount: 1,
    side_tent_amount: 1,
    cornhole_boards_amount: 1,
    premium_chair_amount: 1,
    lot_number: '',
    spot_number: '',
    additional_comment: '',
    hear_about_us_question: '',
    loading: false,
    show: false,
    alertmessage: '',
    variant: '',
};

export function isGameSelected(formData) {
    return (
        formData.include_season ||
        formData.include_game_one ||
        formData.include_game_two ||
        formData.include_game_three ||
        formData.include_game_four ||
        formData.include_game_five ||
        formData.include_game_six ||
        formData.include_game_seven
    );
}

export function validCountValues(formData) {
    const amounts = [
        formData.include_cooler ? formData.cooler_amount : null,
        formData.include_chair ? formData.chair_amount : null,
        formData.include_table ? formData.table_amount : null,
        formData.include_tent ? formData.tent_amount : null,
        formData.include_cocktail_table ? formData.cocktail_table_amount : null,
        formData.include_side_tent ? formData.side_tent_amount : null,
        formData.include_cornhole_boards ? formData.cornhole_boards_amount : null,
        formData.include_premium_chair ? formData.premium_chair_amount : null,
    ];

    // Check that all amounts are greater than 0
    return amounts.every((amount) => amount === null || amount > 0);
}
