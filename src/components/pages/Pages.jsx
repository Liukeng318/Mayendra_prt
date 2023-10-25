import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Footer from "../common/Footer"
import { Header } from "../common/Header"
import { Home } from "../home/Home"
import { About } from "./About"
import { Awards } from "./Awards"
import { Contact } from "./Contact"
import { Experience } from "./Experience"
import { Interest } from "./Interest"
import { Skills } from "./Skills"
export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/interest' component={Interest} />
          <Route exact path='/awards' component={Awards} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
