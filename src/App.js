import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Explore from './components/Explore/Explore';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/Registration/Registration';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/placeOrder/:productId'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <Route path='/login'>
            <NavBar></NavBar>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <NavBar></NavBar>
            <Registration></Registration>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
