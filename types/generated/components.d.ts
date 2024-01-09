import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonCategory extends Schema.Component {
  collectionName: 'components_common_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    category: Attribute.Enumeration<
      ['Hot Chocolate', 'Coffee', 'Cold Drinks', 'Sweet Items', 'Savoury Items']
    > &
      Attribute.Required;
  };
}

export interface CommonChocolateType extends Schema.Component {
  collectionName: 'components_common_chocolate_types';
  info: {
    displayName: 'Chocolate Type';
  };
  attributes: {
    type: Attribute.Enumeration<['Dark', 'Milk', 'White']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.category': CommonCategory;
      'common.chocolate-type': CommonChocolateType;
    }
  }
}
