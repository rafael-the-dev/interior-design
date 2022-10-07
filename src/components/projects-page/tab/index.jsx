import Button from "@mui/material/Button";
import classNames from "classnames";

import classes from "./styles.module.css"

const ButtonContainer = ({ id, label, length, onClick, selectedTab }) => {
    console.log(id, selectedTab)
    return (
        <Button
            className={classNames(classes.button, "relative hover:bg-transparent hover:text-red-500",
                id === selectedTab ? "text-red-500" : "text-black"
            )}
            onClick={onClick}>
            { label }
            <sup className={classNames(classes.length, "absolute right-0 top-0",
            { [classes.lengthHidden]: id !== selectedTab })}>{ length }</sup>
        </Button>
    );
};

export default ButtonContainer;