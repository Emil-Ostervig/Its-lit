import React, {type ComponentProps, type HTMLAttributes} from 'react';

import {MyElement} from '@components/MyElement/MyElement';

interface MyElementProps extends MyElement {
  [key: string]: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // These can be changed to more specific types for the element
      ['lit-word-count']: HTMLAttributes<HTMLParagraphElement>;
      ['my-element']: HTMLAttributes;
      ['callback-display']: HTMLAttributes;
      ['newsletter-widget']: HTMLAttributes;
      ['slot-example']: HTMLAttributes;
    }
  }
}
declare global {
  declare module '*.module.css';
}
