import React from 'react'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'

const HatsPage = () => {

  return (
    <div>
      <h1> Hats Page </h1>
    </div>
  )
}
const JacketsPage = () => {

  return (
    <div>
      <h1> Jackets Page </h1>
    </div>
  )
}
const SneakersPage = () => {

  return (
    <div>
      <h1> SneakersPage </h1>
    </div>
  )
}

const WomensPage = () => {

  return (
    <div>
      <h1> Womens Page </h1>
    </div>
  )
}
const MensPage = () => {

  return (
    <div>
      <h1> Mens Page </h1>
    </div>
  )
}

function App() {

  return (
    <div>
      <Switch>
        <Route exact path= '/' component={ HomePage } />
        <Route exact path= '/shop/hats' component={ HatsPage } />
        <Route exact path= '/shop/jackets' component={ JacketsPage } />
        <Route exact path= '/shop/sneakers' component={ SneakersPage} />
        <Route exact path= '/shop/womens' component={ WomensPage } />
        <Route exact path= '/shop/mens' component={ MensPage } />
      </Switch>
    </div>
  )
}
export default App
