import { Switch } from 'react-router-dom';

import RouteWrapper from './Route';

import UploadImage from '../pages/UploadImage';
import ViewImage from '../pages/ViewImage';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => {
  return (
    <Switch>
      <RouteWrapper exact path="/" component={UploadImage} />
      <RouteWrapper path="/view/:image_id" component={ViewImage} />

      <RouteWrapper path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
