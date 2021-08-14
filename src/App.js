import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import LoginPage from './components/LoginPage'
import StudentHome from './components/StudentHome'
import AlumniHome from './components/AlumniHome'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/student" component={StudentHome} />
      <Route exact path="/alumni" component={AlumniHome} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
