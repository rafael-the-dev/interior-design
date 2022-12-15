import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

const Container = ({ description, title }) => (
    <Typography className={classNames(classes.container, `flex font-semibold items-center mb-4 relative
         last:mb-0 sm:last:mb-4`)}
         component="div">
        <div className={classNames(classes.titleContainer, "mr-4 relative before:absolute before:bg-white before:h-full before:w-full")}>
            <Typography
                component="span"
                className="relative text-5xl z-10 md:text-6xl">
                { title }
            </Typography>
        </div>
        <Typography
            component="span"
            className={classNames("text-lg")}>
            { description }
        </Typography>
    </Typography>
);

export default Container;