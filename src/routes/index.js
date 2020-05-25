import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import PackagesDashboard from '~/pages/PackagesDashboard';
import DeliverymenDashboard from '~/pages/DeliverymenDashboard';
import RecipientsDashboard from '~/pages/RecipientsDashboard';
import ProblemsDashboard from '~/pages/ProblemsDashboard';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/packages" component={PackagesDashboard} isPrivate />
      <Route path="/deliverymen" component={DeliverymenDashboard} isPrivate />
      <Route path="/recipients" component={RecipientsDashboard} isPrivate />
      <Route path="/problems" component={ProblemsDashboard} isPrivate />
    </Switch>
  );
}
