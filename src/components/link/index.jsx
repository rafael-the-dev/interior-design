import Link from "next/link";
import { Typography } from "@mui/material";

const LinkContainer = ({ className, children, href, onClick }) => (
    <Link href={href}
        className={className} 
        onClick={onClick}>
        { children }
    </Link>
);

export default LinkContainer;