import classNames from "classnames";
import { Button, Typography } from "@mui/material";

import classes from "./styles.module.css";

import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';

import DefaultHero from "src/components/default-hero";
import ProjectsList from "src/components/projects-page/projects"

const Container = () => {

    return (
        <main>
            <DefaultHero className="">
                <div className="flex flex-col h-full items-center justify-center w-full">
                    <Typography 
                        component="h1"
                        className={classNames(classes.heroTitle, "leading-tight",
                        "capitalize font-bold text-5xl text-center text-white before:text-red-500 lg:leading-snug lg:text-6xl")}>
                        More than 2300 projects.
                    </Typography>
                </div>
            </DefaultHero>
            <ProjectsList />
        </main>
    );
};

export default Container;