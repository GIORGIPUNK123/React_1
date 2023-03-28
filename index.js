// 1
const numbersArr = [8, 5, -1, 3, 9, 47, 4, -7, 8];
const sumPositive = (numbers) => numbers.filter((number) => number > 0);

// console.log(sumPositive(numbersArr));

// 2
const stringsArr = [
  'giorgi',
  'nika',
  'sandro',
  'luka',
  'lazare',
  'giorgi',
  'sandro',
];

const myObj = stringsArr.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
  } else {
    acc[curr]++;
  }
  return acc;
}, {});

// console.log(myObj);

// 3
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.motion = 'The car is not moving';
  }

  checkMotion = () => {
    this.motion =
      this.speed !== 0 && this.speed > 0
        ? `The car is moving`
        : `The car is not moving`;
  };
  accelerate = (accelerateSpeed) => {
    this.speed += accelerateSpeed;
    this.checkMotion();
  };
  brake = (brakeSpeed) => {
    if (brakeSpeed > 0) {
      this.speed = brakeSpeed > this.speed ? 0 : this.speed - brakeSpeed;
      this.checkMotion();
    }
  };
  emergencyBrake = () => {
    this.speed = 0;
    this.checkMotion();
  };
  status = () =>
    `მანქანა ${this.brand} ${this.model} მოძრაობს ${
      this.speed
    } კმ/სთ სიჩქარით და სტატუსია: ${
      this.motion === 'The car is moving'
        ? 'მანქანა მოძრაობს'
        : 'მანქანა გაჩერებულია'
    }.`;
}
const car1 = new Car('BMW', 'M5cs');
car1.accelerate(10);
car1.brake(50);
console.log('car1: ', car1.status());

// 4
const addAsync = async (x, y) =>
  new Promise((resolve, reject) => {
    typeof x === 'number' && typeof y === 'number'
      ? resolve(x + y)
      : reject('rejected');
  });
addAsync(4, 7)
  .then((data) => console.log('data1: ', data))
  .catch((err) => console.error('err1:', err));
addAsync(16, -5)
  .then((data) => console.log('data2: ', data))
  .catch((err) => console.error('err2:', err));
addAsync(11, undefined)
  .then((data) => console.log('data3: ', data))
  .catch((err) => console.error('err3:', err));
addAsync(undefined, 11)
  .then((data) => console.log('data4: ', data))
  .catch((err) => console.error('err4:', err));
addAsync(-612, -15)
  .then((data) => console.log('data5: ', data))
  .catch((err) => console.error('err5:', err));
