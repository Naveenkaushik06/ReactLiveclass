import React from "react";
import ReactDOM, { createRoot }  from "react-dom/client";


/*
    Header 
           -logo(Title)
           -Nav Items (Right side)
           -Cart
        Body
           -Search bar
           -Restrauntcard
           -Image
           -Name
           -Rating 
           -Cusines
        Footer
           -link
           -copy right       
*/

const Title = () => (
    <a href="/">
        <img className="logo" alt="logo" 
        src="https://i.pinimg.com/736x/01/d3/7b/01d37bf3c47f6cee07e19a48623ac83b.jpg">
        </img> 
    </a>
);

// composing components
const Header = () => {
    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    );
};
const Body = () => {
    return(
        <h4>Body</h4>
    )
} 
const Footer = () => {
    return(
        <h4>Footer</h4>
    )
}
const AppLayout = () => {
    return (
        <React.Fragment>
           <Header />
           <Body />
           <Footer />
        </React.Fragment>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root

// async defer

root.render(<AppLayout />);















