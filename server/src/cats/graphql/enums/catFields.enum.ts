import { registerEnumType } from 'type-graphql';

export enum CatFields {
  id = 'id',
  name = 'name',
  age = 'age',
  breed = 'breed',
}

registerEnumType(CatFields, {
  name: 'CatFields',
  description: 'The list of Cat Fields',
});
