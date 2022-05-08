type ImpType = typeof import('./export');

const obj: ImpType = {
  hoge: 'hoge',
  fuga: 'fuga',
  foo: 42,
};

const val: ImpType[keyof ImpType] = 42; // val: "hoge" | "fuga" | 42
