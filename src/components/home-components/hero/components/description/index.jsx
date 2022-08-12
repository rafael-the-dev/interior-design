import { Typography } from "@mui/material";
import classNames from "classnames";

const Description = ({ children, className }) => (
    <Typography
        component="p"
        className={classNames(className, `hero__description mt-3 opacity-90 text-white sm:mt-4 sm:text-lg`)}>
        Our power of choice is untrammelled and when nothing prevents<br/>
        our being able to do what we like best.
    </Typography>
    
);

export default Description;