import classNames from "classnames";
import { Typography } from "@mui/material";

import classes from "./styles.module.css";


import DefaultHero from "src/components/default-hero";
import H1 from "src/components/h1"
import Link from "src/components/link"


const Container = () => {

    return (
        <main>
            <DefaultHero className="">
                <div className="flex flex-col h-full items-center justify-center w-full">
                    <H1 
                        className={classNames(classes.heroTitle)}>
                        The (r)evolution of media.
                    </H1>
                </div>
            </DefaultHero>
        </main>
    );
};

export default Container;