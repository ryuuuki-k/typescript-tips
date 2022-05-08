const obj = {
  a: 1,
  b: 2,
  c: 3,
};

Object.keys(obj).forEach((key) => key); //  key: string

type ObjKeys = <T>(obj: T) => (keyof T)[];
const objKeys: ObjKeys = (obj: {}) => Object.keys(obj) as (keyof typeof obj)[];

objKeys(obj).forEach((key) => key); // key: "a" | "b" | "c"
