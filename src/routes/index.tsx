import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { BottomRoutes } from './BottomRoutes';

export function Routes() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <BottomRoutes />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default Routes;
