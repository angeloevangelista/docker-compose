import React from 'react';
import { RouteProps } from 'react-router';
import { Route, RouteComponentProps } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';

interface IRouteWrapperProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const RouteWrapper: React.FC<IRouteWrapperProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
};

export default RouteWrapper;
