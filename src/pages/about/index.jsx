import classNames from "classnames";
import { Typography } from "@mui/material";

import classes from "./styles.module.css"

import DefaultHero from "src/components/default-hero";


const Container = () => {

    return (
        <main>
            <DefaultHero>
                <Typography 
                    component="h1"
                    className={classNames(classes.title, "leading-tight",
                    "capitalize font-bold text-5xl text-white before:bg-white lg:leading-snug lg:text-6xl")}>
                    Talented interior<br/>designer.
                </Typography>
            </DefaultHero>
        </main>
    );
};

export default Container;