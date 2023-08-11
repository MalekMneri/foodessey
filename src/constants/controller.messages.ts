import { Type } from '@nestjs/common';

export const controllerMessages = {
  notFound: (
    model: Type,
    attributeValue: string | number,
    attributeKey = 'id',
  ) => `${model.name} with ${attributeKey} '${attributeValue}' was not found`,
};
