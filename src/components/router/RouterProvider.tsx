import React from 'react';
import {
  createHashRouter,
  RouterProvider as BaseRouterProvider,
} from 'react-router-dom';
import {routeConfig} from './routeConfig';

const router = createHashRouter(routeConfig);

type RouterProviderProps = {};

export const RouterProvider = (props: RouterProviderProps) => {
  return <BaseRouterProvider router={router} />;
};
