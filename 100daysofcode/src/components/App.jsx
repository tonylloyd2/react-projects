import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import Body from "./body/body";

function App() {
    return(
        <div>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}
export default  App;
