import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import PackagesDashboard from '~/pages/PackagesDashboard';
import DeliverymenDashboard from '~/pages/DeliverymenDashboard';
import DeliverymenRegister from '~/pages/DeliverymenRegister';
import RecipientsDashboard from '~/pages/RecipientsDashboard';
import RecipientsRegister from '~/pages/RecipientsRegister';
import ProblemsDashboard from '~/pages/ProblemsDashboard';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route path="/packages" component={PackagesDashboard} isPrivate />

      <Route
        exact
        path="/deliverymen"
        component={DeliverymenDashboard}
        isPrivate
      />

      <Route
        path="/deliverymen/register"
        component={DeliverymenRegister}
        isPrivate
      />

      <Route
        exact
        path="/recipients"
        component={RecipientsDashboard}
        isPrivate
      />

      <Route
        path="/recipients/register"
        component={RecipientsRegister}
        isPrivate
      />

      <Route path="/problems" component={ProblemsDashboard} isPrivate />
    </Switch>
  );
}
