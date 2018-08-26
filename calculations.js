function calculateRoundedPrice(actualPrice) {
    return Math.ceil(actualPrice);
}

export function calculateSaving(actualPrice) {
    var roundedPrice = calculateRoundedPrice(actualPrice);
    var saving = roundedPrice - actualPrice;
    return Math.round(saving * 100)/100;
}