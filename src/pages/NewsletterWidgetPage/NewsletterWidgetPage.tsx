import React, {useState} from 'react';
import styles from './NewsletterWidgetPage.module.css';
import {CodeSnippet} from '@components/CodeSnippet/CodeSnippet';
type NewsletterWidgetPageProps = {};

type Settings = {
  position: string;
  mode: string;
  headline: string;
  description: string;
  side: string;
  endpoint: string;
  ['brand-color']: string;
};

export const NewsletterWidgetPage = (props: NewsletterWidgetPageProps) => {
  const [params, setParams] = useState<Settings>({
    position: 'bottom',
    mode: 'light',
    headline: 'Subscribe to our newsletter',
    description: 'Get the latest updates and news',
    side: 'right',
    endpoint: 'https://dummyjson.com/http/200?email={{email}}',
    'brand-color': '#edbd76',
  });

  const toggleSettings = [
    {
      name: 'position',
      values: ['top', 'bottom'],
    },
    {
      name: 'side',
      values: ['left', 'right'],
    },
    {
      name: 'mode',
      values: ['light', 'dark'],
    },
    {
      name: 'brand-color',
      values: ['#edbd76', '#37dfc8'],
    },
  ] as const;

  const textSettings = ['headline', 'description', 'endpoint'] as const;

  return (
    <div>
      <h1>Here are some examples of newsletter widgets</h1>

      <div className={styles.inputGrid}>
        {textSettings.map((setting) => (
          <div key={setting} className={styles.inputContainer}>
            <label htmlFor={setting}>{setting}</label>
            <input
              id={setting}
              value={params?.[setting]}
              onChange={(e) =>
                setParams({...params, [setting]: e.target.value})
              }
            />
          </div>
        ))}
        {toggleSettings.map((setting) => (
          <div key={setting.name} className={styles.inputContainer}>
            <label htmlFor={setting.name}>{setting.name}</label>
            {setting.values.map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name={setting.name}
                  value={value}
                  checked={params?.[setting.name] === value}
                  onChange={() => setParams({...params, [setting.name]: value})}
                />
                {value}
              </label>
            ))}
          </div>
        ))}
      </div>
      <br />
      <br />
      <h3>Here is how the state and properties are defined:</h3>
      <CodeSnippet language="typescript">
        {`
@state()
inputValue = '';

@state()
isLoading = false;

@state()
isSuccessful = false;

@state()
isError = false;

@property({type: String, attribute: 'brand-color', reflect: false})
color: string | null = '#edbd76';

@property({type: String, attribute: 'mode', reflect: false})
mode: string | null = 'light';

@property({type: String, attribute: 'headline', reflect: false})
headline: string | null = 'Sign up';

@property({type: String, attribute: 'description', reflect: false})
description: string | null = 'And enjoy the benefits';

@property({type: String, attribute: 'position', reflect: false})
position: string | null = 'bottom';

@property({type: String, attribute: 'side', reflect: false})
side: string | null = 'right';

@property({type: String, attribute: 'endpoint', reflect: false})
endpoint: string | null = 'https://dummyjson.com';
        `}
      </CodeSnippet>

      <newsletter-widget {...params} />
    </div>
  );
};
