import Link from "next/link";
import { Typography } from "@mui/material";

const LinkContainer = ({ className, children, href, onClick }) => (
    <Typography 
        component={Link} 
        href={href}
        className={className} 
        onClick={onClick}
        passHref>
        { children }
    </Typography>
);

export default LinkContainer;