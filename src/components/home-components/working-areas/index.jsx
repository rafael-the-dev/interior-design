import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

import H2 from "src/components/h2";
import Card from "./components/card";


const Container = () => {
    return (
        <section className={classNames(classes.container, `bg-cover bg-center bg-no-repeat px-5 py-16`)}>
            <H2 className={classNames(classes.title, `text-center text-white before:text-red-600 
            before:block before:font-bold before:text-sm before:mb-2`)}>
                <span className="font-bold">Covered</span> industries
            </H2>
            <Typography
                className="mt-6 opacity-70 text-white text-center">
                We are an Interior Designer, Who believe in excellence, quality and honesty, 
                yes we design beautiful home interiors.
            </Typography>
            <div className="mt-10">
                <Card
                    image="/images/resources/working-1.jpg"
                    title="Residential" 
                />
                <Card
                    image="/images/resources/working-2.jpg"
                    title="Commercial" 
                />
                <Card
                    image="/images/resources/working-3.jpg"
                    title="Industries" 
                />
            </div>
        </section>
    );
};

export default Container;