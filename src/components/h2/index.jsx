import { Typography } from "@mui/material";
import classNames from "classnames";


const H2 = ({ children, className }) => (
    <Typography
        className={classNames(className, "text-4xl uppercase ")}
        component="h2">
        { children }
    </Typography>
);

export default H2;