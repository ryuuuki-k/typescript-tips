const returnKeyRemover = <T extends string>(keys: T[]) => {
  return <U>(obj: U): Omit<U, T> => {
    return {} as Omit<U, T>;
  };
};

const keyRemover = returnKeyRemover(['a', 'b']);

const newObj = keyRemover({ a: 1, b: 2, c: 3 });
// newObj.a // error
// newObj.b // error
newObj.c; // OK!
