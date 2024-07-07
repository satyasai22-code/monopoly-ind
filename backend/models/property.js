class Property {
    constructor(id, name, price, type) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.type = type;
      this.ownerId = null;
    }
  }
  
  module.exports = { Property };
  