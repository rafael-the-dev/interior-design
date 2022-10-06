import classNames from "classnames";

import classes from "./styles.module.css";

import Carousel from "src/components/carousel";
import Controllers from "./components/controllers"
import H2 from "src/components/h2";

const Container = () => {

    return (
        <section className="px-5 py-16 sm:px-[10%] sm:pt-24 lg:px-5">
            <div className="flex flex-col justify-between title-container">
                <H2 className={classNames(classes.title, ` before:text-red-600 
                    before:block before:font-bold before:text-sm before:mb-2`)}>
                    <span className="font-bold">Our costumer</span> words
                </H2>
                <Controllers />
            </div>
        </section>
    );
};

export default Container;