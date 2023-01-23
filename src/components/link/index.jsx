import Link from "next/link";
import { Typography } from "@mui/material";

const LinkContainer = ({ className, children, href, onClick }) => (
    <Link href={href}
        className={className} 
        onClick={onClick}>
        { children.length > 1 ? (
            <div className={className}>
                { children }
            </div>
        ) : children }
    </Link>
);

export default LinkContainer;