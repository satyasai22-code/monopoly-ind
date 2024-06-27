class Player {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.position = 0;
      this.money = 1500;
      this.properties = [];
      this.canBuy = false;
    }
  }
  
  module.exports = { Player };
  