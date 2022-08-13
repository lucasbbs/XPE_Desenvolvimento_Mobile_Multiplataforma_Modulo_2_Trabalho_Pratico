function calculatePricesExercise1(bigAnimals, smallAnimals, isWeekend) {
  const pricesPetShopA = () => ({
    petShop: 'petshopA',
    price: (isWeekend ? 1.2 : 1) * (smallAnimals * 30 + bigAnimals * 50),
    distance: 3,
  });
  const pricesPetShopB = () => ({
    petShop: 'petshopB',
    price: (isWeekend ? 1.2 : 1) * (smallAnimals * 20 + bigAnimals * 55),
    distance: 2,
  });
  const pricesPetShopC = () => ({
    petShop: 'petshopC',
    price: (isWeekend ? 1.2 : 1) * (smallAnimals * 35 + bigAnimals * 45),
    distance: 4,
  });
  const petShopA = pricesPetShopA();
  const petShopB = pricesPetShopB();
  const petShopC = pricesPetShopC();

  const minimumPrice = Math.min(petShopA.price, petShopB.price, petShopC.price);

  const filteredPetShop = [petShopA, petShopB, petShopC]
    .filter((petShop) => petShop.price === minimumPrice)
    .sort((a, b) => a.distance - b.distance);

  return filteredPetShop;
}

console.log(
  'Instância do Exercício 1 sendo executada',
  calculatePricesExercise1(5, 2, true)
);

const petShops = {
  petShopA: { priceSmall: 30, priceBig: 50, shear: 25, dist: 3 },
  petShopB: { priceSmall: 20, priceBig: 55, shear: 35, dist: 2 },
  petShopC: { priceSmall: 35, priceBig: 45, shear: 25, dist: 4 },
  petShopD: { priceSmall: 32, priceBig: 46, shear: 30, dist: 2.5 },
  petShopE: { priceSmall: 40, priceBig: 45, shear: 22, dist: 7 },
};

function calculatePricesExercise2(bigAnimals, smallAnimals, isWeekend, shear) {
  const calculatePrices = (petShop) =>
    (isWeekend ? 1.2 : 1) *
      (petShops[petShop].priceSmall * smallAnimals +
        petShops[petShop].priceBig * bigAnimals) +
    (shear ? (bigAnimals + smallAnimals) * petShops[petShop].shear : 0);

  const arrayPrices = Object.keys(petShops).map((petShop) => ({
    petShop: petShop,
    price: calculatePrices(petShop),
    dist: petShops[petShop].dist,
  }));

  const minimumPrice = Math.min(...arrayPrices.map((petShop) => petShop.price));

  return arrayPrices
    .filter((petShopPrice) => petShopPrice.price === minimumPrice)
    .sort((a, b) => a.price - b.price);
}

console.log(
  'Instância do Exercício 2 sendo executada',
  calculatePricesExercise2(8, 20, true, false)
);

//prettier-ignore
function calculatePricesExercise3(bigAnimals,smallAnimals,dayOfTheWeek,shear) {
  let isWeekend;

  switch (dayOfTheWeek) {
    case 'sab':
      isWeekend = true;
      break;
    case 'dom':
      isWeekend = true;
      break;
    default:
      isWeekend = false;
      break;
  }
  const calculatePrices = (petShop) =>
    (isWeekend ? 1.2 : 1) *
      (petShops[petShop].priceSmall * smallAnimals +
        petShops[petShop].priceBig * bigAnimals) +
    (shear ? (bigAnimals + smallAnimals) * petShops[petShop].shear : 0);

  const arrayPrices = Object.keys(petShops).map((petShop) => ({
    petShop: petShop,
    price: calculatePrices(petShop),
    dist: petShops[petShop].dist,
  }));

  const minimumPrice = Math.min(...arrayPrices.map((petShop) => petShop.price));

  return arrayPrices
    .filter((petShopPrice) => petShopPrice.price === minimumPrice)
    .sort((a, b) => a.price - b.price);
}

console.log(
  'Instância do Exercício 3 sendo executada',
  calculatePricesExercise3(7, 5, 'sab', true)
);
