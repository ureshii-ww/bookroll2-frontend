import React from 'react';

export interface Route {
  path: string;
  element?: React.FC;
  exact?: boolean;
  children?: Route[];
}