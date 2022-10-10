import classNames from "classnames";
import { Typography } from "@mui/material";

import classes from "./styles.module.css";


import DefaultHero from "src/components/default-hero";
import Link from "src/components/link"


const Container = () => {

    return (
        <main>
            <DefaultHero className="">
                <div className="flex flex-col h-full items-center justify-center w-full">
                    <Typography 
                        component="h1"
                        className={classNames(classes.heroTitle, "leading-tight",
                        "capitalize font-bold text-5xl text-center text-white before:text-red-500 lg:leading-snug lg:text-6xl")}>
                        The (r)evolution of media.
                    </Typography>
                </div>
            </DefaultHero>
        </main>
    );
};

export default Container;