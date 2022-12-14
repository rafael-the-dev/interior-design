import classNames from "classnames";
import { Button, Typography } from "@mui/material";

import classes from "./styles.module.css";

import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';

import Clients from "src/components/home-components/clients";
import CategoryCard from "src/components/services-page/category-card"
import DefaultHero from "src/components/default-hero";
import H1 from "src/components/h1";
import SpecialServicesCard from "src/components/services-page/special-services-card";
import Testimonials from "src/components/services-page/testimonials"
import Link from "src/components/link"

const Container = () => {
    const categories = [
        {
            description: "Indignation dislike are beguile works & demoralized the charms except to obtain some advantage from it.",
            image: "/images/services/v2-1.jpg",
            icon: "icon-concept",
            title: "Concept designs"
        },
        {
            description: "Our power of choice untrammelled all nothing prevents best choice untrammeled when nothing prevents .",
            image: "/images/services/v2-2.jpg",
            icon: "icon-scheme",
            title: "Project designs"
        },
        {
            description: "Every pleasure to be welcomed every circumstances and owing power occur that repudiated & annoyances .",
            image: "/images/services/v2-3.jpg",
            icon: "icon-cupboard",
            title: "Make overs"
        },
        {
            description: "Every pleasure to be welcomed every circumstances and owing power occur that repudiated & annoyances .",
            image: "/images/services/v2-4.jpg",
            icon: "icon-teacher",
            title: "Consulting"
        },
        {
            description: "Indignation dislike are beguile works & demoralized the charms except to obtain some advantage from it.",
            image: "/images/services/v2-5.jpg",
            icon: "icon-furniture-and-household",
            title: "Glass & Wrought"
        },
        {
            description: "Our power of choice untrammelled all nothing prevents best choice untrammeled when nothing prevents.",
            image: "/images/services/v2-6.jpg",
            icon: "icon-sketch",
            title: "Space planning"
        }
    ];

    const specialServices = [
        {
            description: "On that others hand, we will denounce with all righteous of demoralized charms.",
            icon: "icon-lamp", 
            image: "/images/services/1.jpg",
            title: "Lighting"
        },
        {
            description: "On that others hand, we will denounce with all righteous of demoralized charms.",
            icon: "icon-paint", 
            image: "/images/services/2.jpg",
            title: "Coloring"
        },
        {
            description: "On that others hand, we will denounce with all righteous of demoralized charms.",
            icon: "icon-floor", 
            image: "/images/services/3.jpg",
            title: "Patterns"
        },
        {
            description: "On that others hand, we will denounce with all righteous of demoralized charms.",
            icon: "icon-window", 
            image: "/images/services/4.jpg",
            title: "Textures"
        }
    ];

    return (
        <main>
            <DefaultHero className="">
                <div className="flex flex-col h-full items-center justify-center w-full">
                    <H1 
                        className={classNames(classes.heroTitle)}>
                        Bringing great designer.
                    </H1>
                </div>
            </DefaultHero>
            <section className="py-12 px-5 sm:px-[10%] lg:px-5">
                <div className="items-center justify-between lg:flex ">
                    <Typography 
                        component="h2"
                        className={classNames(classes.categoriesTitle, `
                        font-medium text-2xl uppercase md:text-3xl lg:text-4xl before:block before:font-bold before:mb-2 before:text-red-500`)}>
                        <span className="font-bold sm:mr-3">Working</span><br className="sm:hidden" />
                        Sectors
                    </Typography>
                    <Typography
                        className={classNames(classes.categoriesDescription, "leading-6 mt-4 text-gray-600 text-sm md:text-base")}>
                        We are an Interior Designer, Who believe in excellence, quality and honesty, yes we design beautiful home interiors.
                    </Typography>
                </div>
                <ul className="flex flex-wrap items-stretch justify-between mt-8 sm:mt-12">
                    {
                        categories.map((item, index) => (
                            <CategoryCard { ...item } index={index} key={index} />
                        ))
                    }
                </ul>
            </section>
            <section className="bg-gray-100 py-12 px-5 sm:px-[10%] lg:px-5">
                <Typography 
                    component="h2"
                    className={classNames(classes.servicesTitle, `
                    font-medium text-center text-2xl uppercase md:text-3xl lg:text-4xl before:block before:font-bold before:mb-2 before:text-red-500`)}>
                    <span className="font-bold sm:mr-3">Some special</span><br className="sm:hidden" />
                    services
                </Typography>
                <div className="flex flex-wrap items-stretch justify-between mt-8 sm:mt-12">
                    {
                        specialServices.map((item, index) => (
                            <SpecialServicesCard { ...item } index={index + 1} key={index} />
                        ))
                    }
                </div>
            </section>
            <Testimonials />
        </main>
    );
};

export default Container;