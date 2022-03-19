import Welcome from './Component/Welcome';
import Product from './Component/Product';
import  {Route, Switch} from 'react-router-dom';
import MainHeader from './Component/MainHeader'
import ProductDetails from './Component/ProductDetails'


function App() {
  return (
    <div>
     
      <MainHeader/>
      <main>
        <Switch>
      <Route path = '/Welcome'>
        <Welcome/>
      </Route>
      <Route path = '/Product' exact>
        <Product/>
      </Route>
      <Route path = '/Product/:productId'>
        <ProductDetails/>
      </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
