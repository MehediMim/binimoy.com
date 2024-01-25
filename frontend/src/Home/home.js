import React, { Fragment } from "react";
import './home.css'
import Hero from "./hero"
import Hero2 from "./hero2";
import Hero3 from "./hero3";
const Home=()=>{
    return(
        <div className="home">
            <Hero/>
            <Hero2/>
            <Hero3/>
        </div>
    )
}
export default Home;