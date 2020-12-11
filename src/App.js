import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Components/Home/home"
import About from "./Components/About/About"
import Dashboard from "./Components/Dashboard/Dashboard"
import './App.css';
import React from "react"
import homeLayout from "./Components/Layouts/homeLayout"
import dashBoardLayout from "./Components/Layouts/dashBoardLayout"



function RouteWithLayout({Layout, Component, ...rest}){
  return (
    // you can use this one
     // <Route {...rest} 
    // render={(props) =>
    //   React.createElement( layout, props, React.createElement(component, props))
    // }/>
    <Route {...rest} >
      <Layout {...rest} >
        <Component {...rest} />
      </Layout>
    </Route>
   
  )
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <RouteWithLayout Layout={homeLayout} exact path="/" Component={Home}/>
          <RouteWithLayout Layout={homeLayout}  path="/about" Component={About}/>
          <RouteWithLayout Layout={dashBoardLayout}  path="/Dashboard" Component={Dashboard}/>
        </Switch>
      </div>
       
    </BrowserRouter>
   
     
  )
}

export default App;
