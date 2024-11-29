import { NonIndexRouteObject } from 'react-router-dom';

export interface CustomRouteObject extends NonIndexRouteObject {
  meta?: {
    displayName?: string;
    icon?: React.ReactNode;
  };
}
