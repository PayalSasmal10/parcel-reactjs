import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import swiggyLogo from "./assets/swiggy.svg";

const Title = () => (
    <img src={swiggyLogo}/>
);

const Header = () => {
    return (<div className="header">
        <Title/>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
        </div>
        </div>);    
}

const RestaurantCard = () => {
    return(
        <div className="card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cvo1djhbwrgfqd64k0tl"/>
            <h2>Meghna Food</h2>
            <h2>Biriyani,Andhra</h2>
        </div>
    );
};

const Body = ()=> {
    return(<div className="restaurant-list">
        <RestaurantCard/>      
    </div>)
};

const Footer = ()=> {
    <h2>Footer</h2>
};

const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
