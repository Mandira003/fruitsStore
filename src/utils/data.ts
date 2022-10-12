export interface FruitsChart {
  [product: string]: {
    pricePerUnit: number;
    discount?: {
      minimumQuantity?: number;
      buyOneGetOne?: boolean;
      percentage?: number;
    };
    // stock: number;
  };
}

export const fruitsChart: FruitsChart = {
  apples: {
    pricePerUnit: 3,
    discount: {
      minimumQuantity: 2,
      percentage: 20,
    },
    // stock: 10,
  },
  grapes: {
    pricePerUnit: 5,
    discount: {
      buyOneGetOne: true,
    },
    // stock: 5,
  },
  peaches: {
    pricePerUnit: 7,
    // stock: 5,
  },
};
