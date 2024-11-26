import React from 'react';
import type {RouteObject} from 'react-router';
import {Layout} from '@layouts/Layout';
import {HomePage} from '@pages/HomePage/HomePage';
import {AttributesPage} from '@pages/AttributesPage/AttributesPage';
import {LitInReactPage} from '@pages/LitInReactPage/LitInReactPage';
import {LifecyclePage} from '@pages/LifecyclePage/LifecyclePage';
import {NewsletterWidgetPage} from '@pages/NewsletterWidgetPage/NewsletterWidgetPage';
import {SlotExamplePage} from '@pages/SlotExamplePage/SlotExamplePage';

export const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/in-react',
    element: (
      <Layout>
        <LitInReactPage />
      </Layout>
    ),
  },
  {
    path: '/attributes',
    element: (
      <Layout>
        <AttributesPage />
      </Layout>
    ),
  },
  {
    path: '/lifecycle',
    element: (
      <Layout>
        <LifecyclePage />
      </Layout>
    ),
  },
  {
    path: '/newsletter-widget',
    element: (
      <Layout>
        <NewsletterWidgetPage />
      </Layout>
    ),
  },
  {
    path: '/slots',
    element: (
      <Layout>
        <SlotExamplePage />
      </Layout>
    ),
  },
];
