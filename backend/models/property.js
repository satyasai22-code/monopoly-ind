class Property {
    constructor(id, name, price, rent) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rent = rent;
        this.owner = null;  
    }
}

module.exports = Property;
