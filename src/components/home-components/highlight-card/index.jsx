import { Button, Paper, Typography } from "@mui/material"
import classNames from "classnames";

import Link from "src/components/link";

const HightlightCard  = ({ description, title }) => (
    <Paper 
        className="flex flex-col items-stretch mb-6 rounded-lg text-center last:mb-0">
        <Typography
            component="h2"
            className={classNames("capitalize font-bold text-xl")}>
            { title }
        </Typography>
        <Typography
            component="h2"
            className={classNames("mt-3 opacity-90")}>
            { description }
        </Typography>
        <Link 
            className="mt-8"
            href="/">
            <Button className="bg-gray-300 capitalize py-3 rounded-t-none rounded-b-lg text-black w-full hover:bg-gray-300 hover:text-red-600">
                Read more
            </Button>
        </Link>
    </Paper>
);

export default HightlightCard;