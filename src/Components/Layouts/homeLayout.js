import React, {Fragment,Component} from "react"
import Navigation from "../NavigationBar/Navigation"

class HomeLayout extends Component {
    
   render(){
       return(
        <Fragment>
            <Navigation />
            {this.props.children}
        </Fragment>
       )
        }

}

export default HomeLayout