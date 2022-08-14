import { Avatar, Button, Paper, Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Link from "src/components/link";

const HightlightCard  = ({ description, image, title }) => (
    <Paper 
        className={classNames(classes.container, "flex flex-col items-stretch mb-6 rounded-lg text-center last:mb-0")}>
        <div className="px-5 pt-8">
            <Avatar
                className={classNames(classes.avatar, "border-2 border-solid bg-transparent border-red-600 mx-auto")}
                src={image} 
            />
            <Typography
                component="h2"
                className={classNames("capitalize font-bold mt-6 text-xl")}>
                { title }
            </Typography>
            <Typography
                component="h2"
                className={classNames("mt-3 opacity-90")}>
                { description }
            </Typography>
        </div>
        <Link 
            className="mt-8"
            href="/">
            <Button 
                className="bg-gray-300 capitalize py-3 rounded-t-none rounded-b-lg text-black w-full hover:bg-gray-300 hover:text-red-600"
                endIcon={<ArrowForwardIcon />}>
                Read more
            </Button>
        </Link>
    </Paper>
);

export default HightlightCard;