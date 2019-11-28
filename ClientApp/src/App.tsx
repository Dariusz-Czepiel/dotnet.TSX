import * as React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

function App() {
  return(
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/1' component={() => <Home strona={1}/>} />
      <Route exact path='/2' component={() => <Home strona={2}/>} />
      <Route exact path='/3' component={() => <Home strona={3}/>} />
    </Layout>
  )
}

export default App;