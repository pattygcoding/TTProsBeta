export function calculatePrice(selectedPackageType, formData) {
    const packagePrices = {
        season: selectedPackageType === "intruder" || selectedPackageType === "cub" ? 1600 : 3800,
        game_one: selectedPackageType === "intruder" || selectedPackageType === "cub" ? 295 : 575,
        game_two: selectedPackageType === "intruder" || selectedPackageType === "cub" ? 350 : 650,
        game_three: selectedPackageType === "intruder" || selectedPackageType === "cub" ? 350 : 650,
        game_four: selectedPackageType === "intruder" || selectedPackageType === "cub" ? 295 : 575,
        game_five: selectedPackageType === "intruder" || selectedPackageType === "cub" ? 295 : 575,
        game_six: selectedPackageType === "intruder" || selectedPackageType === "cub" ? 295 : 575,
        game_seven: selectedPackageType === "intruder" || selectedPackageType === "cub" ? 350 : 650,
        add_ons: {
            cooler: 60,
            chair: 10,
            table: 60,
            tent: 200,
            cocktail_table: 80,
            side_tent: 45,
            cornhole_boards: 100,
            premium_chair: 25
        },
    };

    let totalAmount = 0;

    if (formData.include_season) totalAmount += packagePrices.season;
    if (formData.include_game_one) totalAmount += packagePrices.game_one;
    if (formData.include_game_two) totalAmount += packagePrices.game_two;
    if (formData.include_game_three) totalAmount += packagePrices.game_three;
    if (formData.include_game_four) totalAmount += packagePrices.game_four;
    if (formData.include_game_five) totalAmount += packagePrices.game_five;
    if (formData.include_game_six) totalAmount += packagePrices.game_six;
    if (formData.include_game_seven) totalAmount += packagePrices.game_seven;

    if (formData.include_cooler) totalAmount += packagePrices.add_ons.cooler * formData.cooler_amount;
    if (formData.include_chair) totalAmount += packagePrices.add_ons.chair * formData.chair_amount;
    if (formData.include_table) totalAmount += packagePrices.add_ons.table * formData.table_amount;
    if (formData.include_tent) totalAmount += packagePrices.add_ons.tent * formData.tent_amount;
    if (formData.include_cocktail_table) totalAmount += packagePrices.add_ons.cocktail_table * formData.cocktail_table_amount;
    if (formData.include_side_tent) totalAmount += packagePrices.add_ons.side_tent * formData.side_tent_amount;
    if (formData.include_cornhole_boards) totalAmount += packagePrices.add_ons.cornhole_boards * formData.cornhole_boards_amount;
    if (formData.include_premium_chair) totalAmount += packagePrices.add_ons.premium_chair * formData.premium_chair_amount;

    return totalAmount;
}

export const initialFormData = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    include_season: "",
    include_game_one: "",
    include_game_two: "",
    include_game_three: "",
    include_game_four: "",
    include_game_five: "",
    include_game_six: "",
    include_game_seven: "",
    include_cooler: "",
    include_chair: "",
    include_table: "",
    include_tent: "",
    include_cocktail_table: "",
    include_side_tent: "",
    include_cornhole_boards: "",
    include_premium_chair: "",
    cooler_amount: 1,
    chair_amount: 1,
    table_amount: 1,
    tent_amount: 1,
    cocktail_table_amount: 1,
    side_tent_amount: 1,
    cornhole_boards_amount: 1,
    premium_chair_amount: 1,
    lot_number: "",
    spot_number: "",
    additional_comment: "",
    hear_about_us_question: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
};