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
                    className={classNames(classes.heroTitle, "leading-tight",
                    "capitalize font-bold text-5xl text-white before:bg-white lg:leading-snug lg:text-6xl")}>
                    Talented interior<br/>designer.
                </Typography>
            </DefaultHero>
            <section className="px-5 py-12">
                <div>
                    <Typography 
                        component="h2"
                        className={classNames(classes.modernDesignTitle, `
                        font-medium text-2xl uppercase before:block before:font-bold before:mb-2 before:text-red-500`)}>
                        <span className="font-bold">Modern &amp; Luxury</span><br/>
                        Interior designers in USA
                    </Typography>
                    <Typography
                        className="leading-6 mt-4 text-gray-600 text-sm">
                        We feel that interior design is one of the most important investments you will 
                        ever make. Whether your needs are Residential or Commercial Interior Design or 
                        Model Home Merchandising, our commitment to your project.
                    </Typography>
                </div>
            </section>
        </main>
    );
};

export default Container;