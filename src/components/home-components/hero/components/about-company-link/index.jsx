import Button from "@mui/material/Button";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Link from "src/components/link";

const LinkButton = () => (
    <Link href="/">
        <Button
            className="bg-red-600 capitalize mt-6 px-4 py-2 rounded-none text-white sm:mt-12 sm:py-3"
            endIcon={<ArrowForwardIcon />}>
            About company
        </Button>
    </Link>
);

export default LinkButton;