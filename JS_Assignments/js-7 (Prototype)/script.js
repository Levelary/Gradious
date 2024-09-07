// Card
// Base Class: Card
// Properties: cardNumber, cardHolderName
// Methods: makePayment, displayDetails
// Subclasses: Creditcard and DebitCard


// Card Class
function Card(cardNumber, cardHolderName) {
    this.cardNumber = cardNumber;
    this.cardHolderName = cardHolderName;
}

// Method to make payment
Card.prototype.makePayment = function(amount) {
    console.log(this.cardHolderName + " is making a payment of " + this.amount + " using card number " + this.cardNumber);
};

// Method to display card details
Card.prototype.displayDetails = function() {
    console.log("Card Holder: " + this.cardHolderName + ", Card Number " + this.cardNumber);
};

// Subclasses: CreditCard
function CreditCard(cardNumber, cardHolderName, amount) {
    Card.call(this, cardNumber, cardHolderName);
    this.amount = amount;
}

// Inheriting from Card
CreditCard.prototype = Object.create(Card.prototype);
CreditCard.prototype.constructor = CreditCard;


// Override displayDetails method
CreditCard.prototype.displayDetails = function() {
    Card.prototype.displayDetails.call(this);
    console.log("Amount: " + this.amount);
};



// Subclasses: DebitCard
function DebitCard(cardNumber, cardHolderName, amount) {
    Card.call(this, cardNumber, cardHolderName);
    this.amount = amount;
}

// Inheriting from Card
DebitCard.prototype = Object.create(Card.prototype);
DebitCard.prototype.constructor = DebitCard;


// Override displayDetails method
DebitCard.prototype.displayDetails = function() {
    Card.prototype.displayDetails.call(this);
    console.log("Amount: " + this.amount);
};


// Create an instance of CreditCard class
let CreditCard1 = new CreditCard("1234 5678 9012", "Bharath", 10000);
CreditCard1.makePayment(3000);
CreditCard1.displayDetails();

// Create an instance of DebitCard class
let DebitCard1 = new DebitCard("1234 5678 9012", "Bharath", 5000);
DebitCard1.makePayment(2000);
DebitCard1.displayDetails();