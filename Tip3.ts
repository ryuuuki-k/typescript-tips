import { String, Union } from 'ts-toolbelt';

const query = `/home?a=hoge&b=huga`;

type Query = typeof query;

type SecondQueryPart = String.Split<Query, '?'>[1];
type QueryElements = String.Split<SecondQueryPart, '&'>;

type QueryParams = {
  [P in QueryElements[number]]: {
    [K in String.Split<P, '='>[0]]: String.Split<P, '='>[1];
  };
}[QueryElements[number]];

const obj: QueryParams = {
  a: 'hoge',
  b: 'huga',
};
