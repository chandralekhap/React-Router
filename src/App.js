import {Route, Switch, Redirect} from 'react-router-dom'
import AllQuotes from './Pages/AllQuotes'
import NewQuotes from './Pages/NewQuotes'
import QuotesDetails from './Pages/QuotesDetails'
import Layout from './components/layout/Layout'
import NotFound from './Pages/NotFound'
function App() {
  return (
   
      <Layout>
      <Switch>
        <Route path= '/' exact>
        <Redirect to ='/quotes'/>
        </Route>
<Route path='/quotes' exact>
<AllQuotes/>
</Route>
<Route path='/quotes/:quoteId'>
<QuotesDetails/>
</Route>
<Route path='/new-quotes'>
<NewQuotes/>
</Route>

<Route path = '*'>
  <NotFound/>
</Route>
</Switch>
   
    </Layout>
  );
}

export default App;
