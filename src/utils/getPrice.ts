import { fruitsChart } from "./data";

// const testInfo = [
//   ["grapes", 3],
//   ["apples", 5],
//   ["peaches", 2],
// ];
export const getPrice = (cartItems: (string | number)[][]): number => {
  let checkoutPrice = 0;
  cartItems.forEach(([fruit, quantity]) => {
    if (fruitsChart?.[fruit] && quantity >= 0) {
      let fruitPrice = 0;
      if (fruitsChart[fruit]?.discount?.buyOneGetOne) {
        fruitPrice =
          (Math.floor((quantity as number) / 2) + ((quantity as number) % 2)) *
          fruitsChart[fruit].pricePerUnit;
      } else if (fruitsChart[fruit]?.discount?.minimumQuantity) {
        const discount =
          (fruitsChart[fruit].discount?.minimumQuantity as number) <= quantity
            ? (fruitsChart[fruit].discount?.percentage as number)
            : 0;
        fruitPrice =
          (quantity as number) *
          fruitsChart[fruit].pricePerUnit *
          ((100 - discount) / 100);
      } else {
        fruitPrice = (quantity as number) * fruitsChart[fruit].pricePerUnit;
      }
      checkoutPrice = checkoutPrice + fruitPrice;
    }
  });
  return checkoutPrice;
};
