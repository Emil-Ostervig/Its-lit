import React, {type ComponentProps, type HTMLAttributes} from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // These can be changed to more specific types for the element
      ['lit-word-count']: HTMLAttributes & IntrinsicAttributes;
      ['my-element']: HTMLAttributes & IntrinsicAttributes;
      ['callback-display']: HTMLAttributes & IntrinsicAttributes;
      ['newsletter-widget']: HTMLAttributes & IntrinsicAttributes;
      ['slot-example']: HTMLAttributes & IntrinsicAttributes;
    }
  }
}
declare global {
  declare module '*.module.css';
}
