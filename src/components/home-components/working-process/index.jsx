
import classNames from "classnames"

import classes from "./styles.module.css";

import H2 from "src/components/h2";

const WorkingProcessContainer = () => {

    return (
        <section className={classNames(classes.container, ` px-5 py-16 sm:px-[10%]
            mt-8 sm:mt-12 lg:mt-28`)}>
            <H2 className={classNames(classes.title, `text-center before:text-red-600 
            before:block before:font-bold before:text-sm before:mb-2`)}>
                <span className="font-bold">Our working</span> Process
            </H2>
        </section>
    );
};

export default WorkingProcessContainer;