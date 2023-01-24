import Link from "next/link";
import { Typography } from "@mui/material";

const LinkContainer = ({ className, children, href, onClick }) => (
    <Link href={href}
        className={className} 
        onClick={onClick}>
        <a className={className}>{ children }</a>
    </Link>
);

export default LinkContainer;