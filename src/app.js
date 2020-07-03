import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

//Navigation
import Navigation from './components/navigation/Navigation'

//routes
import Home from './routes/Home'
import About from './routes/About'
import Sample from './routes/Sample'
import Error from './routes/Error'



export const App = () => (
  <Fragment>
    <Router history={createBrowserHistory()}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/sample" component={Sample}/>
        <Route component={Error} />
      </Switch>
    </Router>
  </Fragment>
)
