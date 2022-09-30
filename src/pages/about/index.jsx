import classNames from "classnames";
import { Typography } from "@mui/material";

import classes from "./styles.module.css"

import DefaultHero from "src/components/default-hero";
import SingleFactCounter from "src/components/about-page/single-fact-counter"
import ModernDesignCarolusel from "src/components/about-page/modern-design"

const Container = () => {

    return (
        <main>
            <DefaultHero>
                <Typography 
                    component="h1"
                    className={classNames(classes.heroTitle, "leading-tight",
                    "capitalize font-bold text-5xl text-white before:bg-white lg:leading-snug lg:text-6xl")}>
                    Talented interior<br/>designer.
                </Typography>
            </DefaultHero>
            <section className="py-12">
                <div className="px-5 sm:px-[10%] lg:px-5">
                    <div className="items-center justify-between lg:flex ">
                        <Typography 
                            component="h2"
                            className={classNames(classes.modernDesignTitle, `
                            font-medium text-2xl uppercase md:text-3xl lg:text-4xl before:block before:font-bold before:mb-2 before:text-red-500`)}>
                            <span className="font-bold">Modern &amp; Luxury</span><br/>
                            Interior designers in USA
                        </Typography>
                        <Typography
                            className={classNames(classes.moderDesignDescription, "leading-6 mt-4 text-gray-600 text-sm md:text-base")}>
                            We feel that interior design is one of the most important investments you will 
                            ever make. Whether your needs are Residential or Commercial Interior Design or 
                            Model Home Merchandising, our commitment to your project.
                        </Typography>
                    </div>
                    <ModernDesignCarolusel />
                </div>
                <div className={classNames(classes.SingleFactCounterContainer, `bg-gray-100 flex flex-col 
                    flex-wrap justify-center items-stretch px-[20%] sm:flex-row sm:justify-between sm:px-[10%] 
                    lg:px-5`)}>
                    <SingleFactCounter description={<>Years of<br/>Experience</>} title="36" />
                    <SingleFactCounter description={<>Projects<br/>Completed</>} title="5k" />
                    <SingleFactCounter description={<>Branches<br/>Worldwide</>} title="24" />
                    <SingleFactCounter description={<>Awards<br/>Holds in Hand</>} title="47" />
                </div>
            </section>
        </main>
    );
};

export default Container;