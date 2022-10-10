import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

const H1 = (props) => {
    const { children, className, ...rest } = props;

    return (
        <Typography 
            component="h1"
            className={classNames(classes.heroTitle, className, "leading-tight",
            `capitalize font-bold text-5xl text-center text-white before:text-red-500 lg:leading-snug 
            lg:text-6xl before:block before:mx-auto before:my-0 before:uppercase`)}
            { ...rest }>
            { children }
        </Typography>
    );
};

export default H1;