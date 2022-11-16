import { Button, Paper, Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Link from "src/components/link";

const HightlightCard  = ({ aosDuration, description, image, title }) => (
    <Paper 
        className={classNames(classes.container, "flex flex-col items-stretch mb-6 rounded-lg text-center last:mb-0")}
        data-aos="fade-up"
        data-aos-duration={ aosDuration ?? "2000" }
        elevation={2}>
        <div className="px-5 pt-8 grow relative sm:px-[10%] lg:px-5">
            <div
                className={classNames(classes.avatar, "border-2 border-solid bg-white border-amber-600 mx-auto",
                "rounded-full relative top-0 before:absolute before:bg-amber-600 before:block before:h-full before:rounded-full")}
            >
                <span className={classNames(classes.icon, image, `relative flex h-full items-center justify-center rounded-full text-5xl text-slate-500 w-full`)}></span>
            </div>
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
                hover:bg-slate-50 hover:text-amber-600 sm:py-4`)}
                endIcon={<ArrowForwardIcon />}>
                Read more
            </Button>
        </Link>
    </Paper>
);

export default HightlightCard;