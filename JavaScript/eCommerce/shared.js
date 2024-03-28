function formatCurrency(currency){
    const currencyNumber = +currency;

    const formatter = new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
        minimumFractionDigits: 2
    });

    return formatter.format(currencyNumber);
}