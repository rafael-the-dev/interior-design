import classNames from "classnames";

import classes from "./styles.module.css";

import H2 from "src/components/h2";
import BlogCard from "src/components/blog-card";

const LatestBlogs = () => {

    return (
        <section className="px-5 py-16 sm:px-[10%] remove-px-10">
            <H2 className={classNames(classes.title, `text-center before:text-red-600 
            before:block before:font-bold before:text-sm before:mb-2`)}>
                <span className="font-bold">Latest from</span> blog
            </H2>
            <div className={classNames(classes.cardsContainer, `mt-6`)}>
                <BlogCard 
                    author="Rubin Santro"
                    date="02 mar 2019"
                    description="Same as saying through shrinkings from toil &amp; our pain these cases perfectly simple."
                    image="/images/blog/latest-b-v1-1.jpg"
                    location="Contemporary"
                    title="Low cost interior designing ideas"
                />
                <BlogCard 
                    author="Mark Richrdson"
                    date="24 feb 2019"
                    description="Which is the same as saying through shrinking from toil and pain. These cases are perfectly."
                    image="/images/blog/latest-b-v1-2.jpg"
                    location="Modern Paint"
                    title="Commercial design for project"
                />
                <BlogCard 
                    author="Rubin Santro"
                    date="18 jan 2019"
                    description="Every pleasure is to be welcomed every pain avoided. in certain circumstances obligations."
                    image="/images/blog/latest-b-v1-3.jpg"
                    location="Contemporary"
                    title="Our interior design prediction 2019"
                />
            </div>
        </section>
    );
};

export default LatestBlogs;