import classNames from "classnames";

import classes from "./styles.module.css";

import H2 from "src/components/h2";

const LatestBlogs = () => {

    return (
        <section className="px-5 py-16 sm:px-[10%] remove-px-10">
            <H2 className={classNames(classes.title, `text-center before:text-red-600 
            before:block before:font-bold before:text-sm before:mb-2`)}>
                <span className="font-bold">Latest from</span> blog
            </H2>
        </section>
    );
};

export default LatestBlogs;