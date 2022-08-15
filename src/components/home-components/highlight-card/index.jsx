import { Avatar, Button, Paper, Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Link from "src/components/link";

const HightlightCard  = ({ description, image, title }) => (
    <Paper 
        className={classNames(classes.container, "flex flex-col items-stretch mb-6 rounded-lg text-center last:mb-0")}
        elevation={2}>
        <div className="px-5 pt-8 grow relative sm:px-[10%] lg:px-5">
            <Avatar
                className={classNames(classes.avatar, image, "border-2 border-solid bg-white border-red-600 mx-auto",
                "sm:absolute top-0 before:absolute before:bg-red-600 before:block before:h-full")}
            />
            <Typography
                component="h2"
                className={classNames("capitalize font-bold mt-6 text-xl sm:mt-10 lg:text-2xl")}>
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
                className={classNames(classes.button, `bg-slate-50 capitalize font-normal py-3 rounded-t-none rounded-b-lg text-black w-full 
                hover:bg-slate-50 hover:text-red-600 sm:py-4`)}
                endIcon={<ArrowForwardIcon />}>
                Read more
            </Button>
        </Link>
    </Paper>
);

export default HightlightCard;