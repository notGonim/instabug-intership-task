import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'
import './App.scss';
import { lazy, Suspense } from "react";
import ProtectedRoute from "./helpers/protected-routes";
import IsUserLoggedIn from "./helpers/is-user-logged-in";
import useAuthListener from "./hooks/user-auth-listener";



const Login = lazy(() => import('./pages/login'))
const NotFound = lazy(() => import('./pages/not-found'))
const Welcome = lazy(() => import('./pages/welcome'))


function App() {

  const { activeUser } = useAuthListener()
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <IsUserLoggedIn user={activeUser} loggedInPath={ROUTES.WELCOME} path={ROUTES.LOGIN}>
            <Login />
          </IsUserLoggedIn>
          <ProtectedRoute user={activeUser} path={ROUTES.WELCOME} exact>
            <Welcome />
          </ProtectedRoute  >
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;



