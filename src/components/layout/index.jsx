import * as React from "react";
import AOS from "aos";

import classes from "./styles.module.css";

import Header from "../header";
import Footer from "../footer";

const LayoutContainer = ({ children }) => {
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={classes.root}>
            <Header />
            { children }
            <Footer />
        </div>
    );
};


export default LayoutContainer;