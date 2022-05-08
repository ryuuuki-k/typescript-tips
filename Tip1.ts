const fruitCounts = {
  apple: 1,
  pear: 3,
  banana: 42,
};

type SingleFruitCount =
  | { apple: number }
  | { banana: number }
  | { pear: number };

const singleFruitCount: SingleFruitCount = {
  banana: 42,
};

/*   ↓ Tips Start!!   */
// fruitCountsからSingleFruitCountと同じ型を作るTips
type FruitCount = typeof fruitCounts;

type NewSingleFruitCount<T> = {
  [K in keyof T]: {
    [P in K]: T[P];
  };
}[keyof T];

type test1 = NewSingleFruitCount<FruitCount>;
