import React, {Component} from "react"
import {AuthProvider} from "../Authentication/AuthContext"

class dashBoardLayout extends Component {
   render(){
       return(
        <AuthProvider>
           <div>
              {this.props.children}
           </div>
        </AuthProvider>
       )
   }

}

export default dashBoardLayout