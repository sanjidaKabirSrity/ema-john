import { BrowserRouter , Switch, Route} from 'react-router-dom';
import './App.css';
import Heading from './components/Heading/Heading';
import Inventory from './components/Inventory/Inventory';
import Overview from './components/Overview/Overview';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Heading/>
        <Switch>
          <Route exact path="/shop">
            <Shop/>
          </Route>
          <Route exact path="/">
            <Shop/>
          </Route>
          <Route exact path="/order">
            <Overview/>
          </Route>
          <PrivateRoute exact path="/placeOrder">
            <PlaceOrder/>
          </PrivateRoute>
          <PrivateRoute exact path="/shipping">
            <Shipping/>
          </PrivateRoute>
          <PrivateRoute exact path="/inventory">
            <Inventory/>
          </PrivateRoute>
          <Route exact path="/signIn">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
