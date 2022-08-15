import { Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

import classes from "./styles.module.css";



const AboutSection = () => {
    return (
        <section className="items-start justify-between lg:flex lg:px-5 lg:pt-8">
            <div className={classNames(classes.box, "bg-slate-50 px-5 py-8 sm:py-12 sm:px-[10%] lg:px-5")}>
                <div className={classNames(classes.imageContainer, `relative after:bg-center after:bg-contain
                 after:bg-no-repeat after:absolute before:absolute before:h-full before:w-full`)}>
                    <Image
                        alt=""
                        layout="fill"
                        src="/images/services/3.jpg" 
                    />
                </div>
                <Typography
                    className="mt-6 text-gray-500 text-xl">
                    Experienced &amp; Well knowledgeable interior designs.
                </Typography>
                <Typography
                    className="font-bold mt-6 text-gray-500">
                    Shelly Johnson, <span className="font-normal text-red-600">CEO &amp; Founder</span>
                </Typography>
            </div>
            <div className={classNames(classes.content, " px-5 py-12 sm:px-[10%] lg:p-0")}>
                <Typography
                    className={classNames(classes.title, "text-4xl uppercase before:text-red-600 before:block",
                    "before:text-sm before:mb-4 before:font-bold")}
                    component="h2">
                    <span className="font-bold">A small efficient<br />interior</span> designing team
                </Typography>
                <Typography
                    className="mt-6 text-gray-500">
                    We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.
                </Typography>
                <Typography
                    className="mt-6 text-gray-500">
                    Indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee.
                </Typography>
            </div>
            <style jsx>
                {
                    `
                        .image-container > span {
                            height: 280px;
                            width: 100%;
                        }
                    `
                }
            </style>
        </section>
    );
};

export default AboutSection;