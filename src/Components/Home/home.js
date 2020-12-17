import React from "react"
import "./Home.css"
import Homeimage from "../Images/homeimg.svg"
import Search from "../Search/search"



const Home = () => {
    return (
        <div>
            <div style={{ position: "relative", marginTop: "0px", boxSizing: "inherit" }} className="Home_animation">
                <div className=" Homeabackground">
                    <img className="responsive-img" src={Homeimage} alt="martimg" />
                </div>
                <div className="properties">
                    properties
                 </div>
                <div className="search_animation">
                    <Search />
                </div>
            </div>
        </div>)
}
export default Home;





