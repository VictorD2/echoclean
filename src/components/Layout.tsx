  
import React from 'react';
import Footer from '../partials/Footer';
// import Navbar from '../partials/NavBar';
import Navbar from '../partials/Navbar';

interface Props {
    children: JSX.Element;
}

const Layout: React.FC<Props> = (props) => {
    return (
        <>
            <Navbar />
            <div className="container" style={{ padding: "5rem 3rem" }}>
                {props.children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;