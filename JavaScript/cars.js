class Cars {
  constructor(mark, model, year) {
    this.mark = mark;
    this.model = model;
    this.year = year;
  }
  showInfo() {
    console.log(`Это ${this.mark} ${this.model} - ${this.year} года выпуска`);
  }
};

class ElectricCar extends Cars {
  constructor(mark, model, year, battery) {
    super(mark, model, year);
    this.battery = battery;
  }
  showCharge() {
    console.log(`Это ${this.mark} ${this.model} - ${this.year} года выпуска, текущий заряд - ${this.battery}`);
  }
};

const ford = new Cars('ford', 'focus', 2010);
ford.showInfo();

const xiaomi = new ElectricCar('xiaomi', 's7', 2024, 89);
xiaomi.showCharge();
