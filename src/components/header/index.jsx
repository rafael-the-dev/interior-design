import classNames from "classnames";

import classes from "./styles.module.css"

const Header = () => {

    return (
        <header className={classNames(classes.header, `px-5 sm:px-[10%]`)}>
        </header>
    );
};

export default Header;