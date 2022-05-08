type CheckTypeArray<T> = T extends any[] ? 'Bad Type. Type is Array' : T;

const checkArray = <T>(a: CheckTypeArray<T>, b: CheckTypeArray<T>) => {
  if (Array.isArray(a) || Array.isArray(b)) {
    throw new Error('Error');
  }
  console.log(a, b);
};

checkArray(1, 2);
checkArray([1], ['foo']); // error
// Array.isArrayは実行して初めてエラーになるが,上記の記述で実行前にエラーを発生させることが可能
