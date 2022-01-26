function airCompany(input) {
    let airCarrier = input[0];
    let adultTickets = Number(input[1]);
    let childTickets = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let taxPrice = Number(input[4]);

    let adultPrice = adultTicketPrice + taxPrice;
    let childPrice = (adultTicketPrice * 0.3) + taxPrice;

    let profit = ((adultTickets * adultPrice) + (childTickets * childPrice)) * 0.2;

    console.log(`The profit of your agency from ${airCarrier} tickets is ${profit.toFixed(2)} lv.`)
}