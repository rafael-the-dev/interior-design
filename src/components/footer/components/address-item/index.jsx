import classNames from "classnames";
import Typography from "@mui/material/Typography";

import classes from "./styles.module.css"

const Container = ({ children, icon }) => (
    <div className={classNames(classes.container, icon, "before:text-4xl before:mr-3 sm:before:text-5xl",
        "flex items-center mb-6 last:mb-0 hover:before:text-red-600 md:mb-0")}>
        <Typography className="overflow-hidden text-ellipsis w-full">
            { children }
        </Typography>
    </div>
);

export default Container;