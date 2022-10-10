import classNames from "classnames";
import { Typography } from "@mui/material";

import classes from "./styles.module.css";

import Card from "src/components/blogs-page/blog-card"
import DefaultHero from "src/components/default-hero";
import H1 from "src/components/h1"
import Link from "src/components/link"


const Container = () => {
    const blogsList = [
        {
            author: "Rubin Santro",
            category: "Traditional",
            description: "Same as saying through shrinking from toil and pain these cases perfectly simple...",
            image: "/images/blog/v1-1.jpg",
            title: "Best low-cost interior designing ideas for your room"
        },
        {
            author: "Mark Wood",
            category: "Contemporary",
            description: "When our power of choice is untrammelled and nothing prevents our being able...",
            image: "/images/blog/v1-2.jpg",
            title: "Wondering if interior design is a dying filed? Read this"
        },
        {
            author: "Rubin Santro",
            category: "Traditional",
            description: "Certain circumstances and owing to the claims of duty or the obligations of business...",
            image: "/images/blog/v1-3.jpg",
            title: "Creating drama and feeling with a tiled bed wall"
        },
        {
            author: "Rubin Santro",
            category: "Traditional",
            description: "Certain circumstances and owing to the claims of duty or the obligations of business...",
            image: "/images/blog/v1-4.jpg",
            title: "Creating drama and feeling with a tiled bed wall"
        },
        {
            author: "Rubin Santro",
            category: "Traditional",
            description: "Same as saying through shrinking from toil and pain these cases perfectly simple...",
            image: "/images/blog/v1-5.jpg",
            title: "Best low-cost interior designing ideas for your room"
        },
        {
            author: "Mark Wood",
            category: "Contemporary",
            description: "When our power of choice is untrammelled and nothing prevents our being able...",
            image: "/images/blog/v1-6.jpg",
            title: "Wondering if interior design is a dying filed? Read this"
        },
        {
            author: "Mark Wood",
            category: "Contemporary",
            description: "When our power of choice is untrammelled and nothing prevents our being able...",
            image: "/images/blog/v1-7.jpg",
            title: "Wondering if interior design is a dying filed? Read this"
        },
        {
            author: "Rubin Santro",
            category: "Traditional",
            description: "Certain circumstances and owing to the claims of duty or the obligations of business...",
            image: "/images/blog/v1-8.jpg",
            title: "Creating drama and feeling with a tiled bed wall"
        },
        {
            author: "Rubin Santro",
            category: "Traditional",
            description: "Same as saying through shrinking from toil and pain these cases perfectly simple...",
            image: "/images/blog/v1-9.jpg",
            title: "Best low-cost interior designing ideas for your room"
        },
    ];

    return (
        <main>
            <DefaultHero className="">
                <div className="flex flex-col h-full items-center justify-center w-full">
                    <H1 
                        className={classNames(classes.heroTitle)}>
                        The (r)evolution of media.
                    </H1>
                </div>
            </DefaultHero>
            <div className="px-5 sm:px-[10%] lg:px-5">
                <div className={classNames(classes.grid, `border-l border-gray-200 border-solid flex flex-wrap items-stretch 
                    justify-between pl-5 py-12 relative after:h-full after:absolute after:bg-gray-200 after:top-0 
                    before:absolute before:bg-gray-200 before:h-full before:top-0 lg:pl-0`)}>
                    {
                        blogsList.map((blog, index) => (
                            <Card { ...blog } key={index} />
                        ))  
                    }
                </div>
            </div>
        </main>
    );
};

export default Container;