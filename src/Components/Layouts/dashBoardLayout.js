import React, {Component} from "react"

class dashBoardLayout extends Component {
   render(){
       return(
           <div>
              {this.props.children}
           </div>
       )
   }

}

export default dashBoardLayout