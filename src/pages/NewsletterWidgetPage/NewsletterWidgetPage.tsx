import React, {useState} from 'react';
import styles from './NewsletterWidgetPage.module.css';
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
      <h1>
        Hello this is a page. Here are some examples of newsletter widgets
      </h1>

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

      <newsletter-widget {...params} />
    </div>
  );
};
