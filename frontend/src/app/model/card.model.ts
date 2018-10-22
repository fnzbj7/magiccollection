export class Card {
    public cardAmount 
    constructor(public cardExpansion, public cardNumber: string, cardAmount: number, public doubleside: boolean) {
        if( cardAmount < 10 ){
           this.cardAmount =  '00' + cardAmount;
        } else if( cardAmount < 10 ){
            this.cardAmount =  '0' + cardAmount;
        } else {
            this.cardAmount = cardAmount;
        }
    };
}