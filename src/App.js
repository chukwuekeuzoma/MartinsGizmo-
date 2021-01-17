import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Components/Home/home"
import About from "./Components/About/About"
import Dashboard from "./Components/Dashboard/Dashboard"
import './App.css';
import React from "react"
import homeLayout from "./Components/Layouts/homeLayout"
import dashBoardLayout from "./Components/Layouts/dashBoardLayout"
import SideBarDashBoardTwo from "./Components/SideBarDashBoardTwo/SideBarDashBoardTwo"
import SideBarPropertiesTwo from "./Components/SideBarPropertiesTwo/SideBarPropertiesTwo"
import AddPropertiesTwo from "./Components/AddPropertiesTwo/AddProperties"
import SideBarLayout from "./Components/Layouts/SideBarLayout"
// import Register from "./Components/Form/Register/Register"
import {AuthProvider} from "./Components/Authentication/AuthContext"



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
    <AuthProvider>
      <div>
        <Switch>
          <RouteWithLayout Layout={homeLayout} exact path="/" Component={Home}/>
          <RouteWithLayout Layout={homeLayout}  path="/about" Component={About}/>
          <RouteWithLayout Layout={dashBoardLayout}  path="/Dashboard" Component={Dashboard}/>
          <RouteWithLayout  Layout={SideBarLayout} exact path="/SideBarDash" Component={SideBarDashBoardTwo}/>
          <RouteWithLayout  Layout={SideBarLayout} path="/SideBarProps" Component={SideBarPropertiesTwo}/>
          <RouteWithLayout  Layout={SideBarLayout} path="/AddProps" Component={AddPropertiesTwo}/>
          {/* <RouteWithLayout Layout={dashBoardLayout}  path="/register" Component={ Register}/> */}
        </Switch>
      </div>
      </AuthProvider>
    </BrowserRouter>
    
  )
}
export default App;

