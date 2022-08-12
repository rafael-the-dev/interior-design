import { Typography } from "@mui/material";
import classNames from "classnames";

const Description = ({ children, className }) => (
    <Typography
        component="p"
        className={classNames(className, `mt-3 opacity-90 text-white`)}>
        Our power of choice is untrammelled and when nothing prevents<br/>
        our being able to do what we like best.
    </Typography>
    
);

export default Description;