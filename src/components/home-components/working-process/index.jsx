
import classNames from "classnames"

import classes from "./styles.module.css";

import H2 from "src/components/h2";
import Card from "./components/card"

const WorkingProcessContainer = () => {

    return (
        <section className={classNames(classes.container, ` px-5 py-16 sm:px-[10%]
            mt-8 sm:mt-12 lg:mt-28 lg:pb-28 lg:pt-20 bg-gray-50`)}>
            <H2 className={classNames(classes.title, `text-center before:text-red-600 
            before:block before:font-bold before:text-sm before:mb-2`)}>
                <span className="font-bold">Our working</span> Process
            </H2>
            <div className="cards-container justify-between items-stretch mt-24">
                <Card 
                    aosDuration="2500"
                    description="With righteous indignation and works off beguiled demoralized charm."
                    icon="icon-productive"
                    title="Idea &amp; Design"
                />
                <Card 
                    description="Our power of choice is untrammelled and when nothing prevents."
                    icon="icon-document"
                    title="Specification"
                />
                <Card 
                    aosDuration="1500"
                    description="Wing to the claims of duty the obligations will frequently occur."
                    icon="icon-kitchen"
                    title="Execution"
                />
            </div>
            <style jsx>
                {
                    `
                        @media screen and (min-width: 990px) {
                            .cards-container {
                                display: flex;
                            }
                        }
                    `
                }
            </style>
        </section>
    );
};

export default WorkingProcessContainer;