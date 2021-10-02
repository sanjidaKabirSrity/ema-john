import { BrowserRouter , Switch, Route} from 'react-router-dom';
import './App.css';
import Heading from './components/Heading/Heading';
import Inventory from './components/Inventory/Inventory';
import Overview from './components/Overview/Overview';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
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
          <Route exact path="/placeOrder">
            <PlaceOrder/>
          </Route>
          <Route exact path="/inventory">
            <Inventory/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
