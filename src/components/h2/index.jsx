import { Typography } from "@mui/material";
import classNames from "classnames";


const H2 = ({ aos, aosDuration, children, className }) => (
    <Typography
        data-aos={aos}
        data-aos-duration={aosDuration}
        className={classNames(className, "text-4xl uppercase ")}
        component="h2">
        { children }
    </Typography>
);

export default H2;