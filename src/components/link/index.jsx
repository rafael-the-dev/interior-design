import Link from "next/link";
import { Typography } from "@mui/material";

const LinkContainer = ({ className, children, href, onClick }) => (
    <Typography 
        className={className} 
        component={Link}
        onClick={onClick}>
        { children }
    </Typography>
);

export default LinkContainer;