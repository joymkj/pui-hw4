const Inventory = {
  original: {
    name: 'Original Cinnamon Roll',
    price: '2.49',
    url: '/assets/original-cinnamon-roll.jpg',
  },
  apple: {
    name: 'Apple Cinnamon Roll',
    price: '3.49',
    url: '/assets/apple-cinnamon-roll.jpg',
  },
  raisin: {
    name: 'Raisin Cinnamon Roll',
    price: '2.99',
    url: '/assets/raisin-cinnamon-roll.jpg',
  },
  walnut: {
    name: 'Walnut Cinnamon Roll',
    price: '3.49',
    url: '/assets/walnut-cinnamon-roll.jpg',
  },
  double_chocolate: {
    name: 'Double-chocolate Cinnamon Roll',
    price: '3.99',
    url: '/assets/double-chocolate-cinnamon-roll.jpg',
  },
  strawberry: {
    name: 'Strawberry Cinnamon Roll',
    price: '3.99',
    url: '/assets/strawberry-cinnamon-roll.jpg',
  },
};

const glazingPrice = {
  'Keep Original': 0,
  'Sugar Milk': 0,
  'Vanilla Milk': 0.5,
  'Double chocolate': 1.5,
};

const packPrice = {
  1: 1,
  3: 3,
  6: 5,
  12: 10,
};

export default Inventory;
export { glazingPrice, packPrice };
