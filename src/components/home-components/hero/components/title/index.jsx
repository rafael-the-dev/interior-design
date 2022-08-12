import { Typography } from "@mui/material";
import classNames from "classnames";

const Title = ({ children, className }) => (
    <Typography
        component="h2"
        className={classNames(className, `font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl`)}>
        { children }
    </Typography>
);

export default Title;