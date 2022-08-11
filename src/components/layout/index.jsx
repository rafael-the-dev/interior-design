import classes from "./styles.module.css";

const LayoutContainer = ({ children }) => {
    
    return (
        <div className={classes.root}>
            { children }
        </div>
    );
};


export default LayoutContainer;