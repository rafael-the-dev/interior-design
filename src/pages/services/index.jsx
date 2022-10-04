import classNames from "classnames";
import { Button, Typography } from "@mui/material";

import classes from "./styles.module.css";

import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';

import Clients from "src/components/home-components/clients"
import DefaultHero from "src/components/default-hero";
import Link from "src/components/link"
import SingleFactCounter from "src/components/about-page/single-fact-counter";
import TeamMemberCard from "src/components/about-page/team-menber-card";
import ModernDesignCarolusel from "src/components/about-page/modern-design"

const Container = () => {

    return (
        <main>
            <DefaultHero className="">
                <div className="flex flex-col h-full items-center justify-center w-full">
                    <Typography 
                        component="h1"
                        className={classNames(classes.heroTitle, "leading-tight",
                        "capitalize font-bold text-5xl text-center text-white before:text-red-500 lg:leading-snug lg:text-6xl")}>
                        Bringing great designer.
                    </Typography>
                </div>
            </DefaultHero>
            <section className="py-12 px-5 sm:px-[10%] lg:px-5">
                <div className="items-center justify-between lg:flex ">
                    <Typography 
                        component="h2"
                        className={classNames(classes.categoriesTitle, `
                        font-medium text-2xl uppercase md:text-3xl lg:text-4xl before:block before:font-bold before:mb-2 before:text-red-500`)}>
                        <span className="font-bold lg:mr-3">Working</span><br className="lg:hidden" />
                        Sectors
                    </Typography>
                    <Typography
                        className={classNames(classes.categoriesDescription, "leading-6 mt-4 text-gray-600 text-sm md:text-base")}>
                        We are an Interior Designer, Who believe in excellence, quality and honesty, yes we design beautiful home interiors.
                    </Typography>
                </div>
            </section>
        </main>
    );
};

export default Container;