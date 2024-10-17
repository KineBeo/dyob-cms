import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface DyobReview extends Struct.ComponentSchema {
  collectionName: 'components_dyob_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    view_url: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface CardWhyChoosingCard extends Struct.ComponentSchema {
  collectionName: 'components_card_why_choosing_cards';
  info: {
    displayName: 'Why choosing card';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface CardSolution extends Struct.ComponentSchema {
  collectionName: 'components_card_solutions';
  info: {
    displayName: 'solution';
    description: '';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface CardLocation extends Struct.ComponentSchema {
  collectionName: 'components_card_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Location: Schema.Attribute.String;
    googlemap_url: Schema.Attribute.String;
  };
}

export interface CardBusinessCard extends Struct.ComponentSchema {
  collectionName: 'components_card_business_cards';
  info: {
    displayName: 'Business card';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Name: Schema.Attribute.String;
    Position: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'dyob.review': DyobReview;
      'card.why-choosing-card': CardWhyChoosingCard;
      'card.solution': CardSolution;
      'card.location': CardLocation;
      'card.business-card': CardBusinessCard;
    }
  }
}
