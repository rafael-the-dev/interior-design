import * as React from "react";
import classNames from "classnames";

import classes from "./styles.module.css";

import Card from "./components/card";
import Carousel from "src/components/carousel";
import Controllers from "./components/controllers"
import H2 from "src/components/h2";

const Container = () => {
    const hasNextItem = React.useRef(true);
    const hasPreviousItem = React.useRef(true);
    const nextClickHandler = React.useRef(null);
    const previousClickHandler = React.useRef(null);
    const setIndex = React.useRef(null);

    const list = [
        {
            image: "/images/testimonial/testi-1.png",
            location: "New York city",
            name: "Z. Gartrell Wright",
            rating: 2.8,
            text: "crystalo have done an excellent job presenting the analysis & insights. I am confident in saying have helped encounter is to be welcomed and every pain avoided."
        },
        {
            image: "/images/testimonial/testi-2.png",
            location: "Los Angels",
            name: "H.Sam Danisley",
            rating: 5,
            text: "Owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted always holds"
        },
        {
            image: "/images/testimonial/testi-3.png",
            location: "Los Angels",
            name: "Brian White",
            rating: 3.5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            image: "/images/testimonial/testi-style3-2.png",
            location: "Mozambique",
            name: "Rafael Tivane",
            rating: 4,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        }
    ];



    return (
        <section className="px-5 py-16 sm:px-[10%] sm:pt-24 lg:px-5">
            <div className="flex flex-col justify-between mb-8 title-container">
                <H2 className={classNames(classes.title, ` before:text-red-600 
                    before:block before:font-bold before:text-sm before:mb-2`)}>
                    <span className="font-bold">Our costumer</span> words
                </H2>
                <Controllers 
                    hasNextItem={hasNextItem}
                    hasPreviousItem={hasPreviousItem}
                    nextOnClick={nextClickHandler}
                    previousOnClick={previousClickHandler}
                    setIndex={setIndex}
                />
            </div>
            <Carousel
                hasNextItem={hasNextItem}
                hasPreviousItem={hasPreviousItem}
                nextOnClick={nextClickHandler}
                noControllers
                previousOnClick={previousClickHandler}
                setIndex={setIndex}
                spacing={{ xs: { gap: 0, width: 1 } }}>
                {
                    list.map((item, index) => (
                        <Card { ...item } key={index} />
                    ))
                }
            </Carousel>
        </section>
    );
};

export default Container;