import React from "react";
import ReactDOM from "react-dom/client";

// normal variable
// const heading = (
//     <h1> Namaste </h1>
// )

// component
const Title = () => (
    <h1> Namaste </h1>
);

var xtr = 10;
// name starts with capital letter- It is not mandatory.for good practice so, we use it
const HeadingComponent = () => {
    return (<div>
        {/* {heading} - normal variable example */}
        <Title/> {/* this is called component composion*/}
        {/* {Title()}- we can write either component wise or nrmal func */}
        {console.log("xtr")}
        {1+2}
        <h1>Func component</h1>
        <h2>This is a h2 tag </h2>
        </div>);    
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
