import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import PackagesDashboard from '~/pages/PackagesDashboard';
import PackagesRegister from '~/pages/PackagesRegister';
import DeliverymenDashboard from '~/pages/DeliverymenDashboard';
import DeliverymenRegister from '~/pages/DeliverymenRegister';
import RecipientsDashboard from '~/pages/RecipientsDashboard';
import RecipientsRegister from '~/pages/RecipientsRegister';
import ProblemsDashboard from '~/pages/ProblemsDashboard';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route exact path="/packages" component={PackagesDashboard} isPrivate />

      <Route path="/packages/register" component={PackagesRegister} isPrivate />

      <Route path="/packages/edit/:id" component={PackagesRegister} isPrivate />

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
        path="/deliverymen/edit/:id"
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

      <Route
        path="/recipients/edit/:id"
        component={RecipientsRegister}
        isPrivate
      />

      <Route path="/problems" component={ProblemsDashboard} isPrivate />
    </Switch>
  );
}
