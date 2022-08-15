import { Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

import classes from "./styles.module.css";



const AboutSection = () => {
    return (
        <section>
            <div className={classNames("bg-slate-50 px-5 py-8")}>
                <figure className={classNames(classes.imageContainer, `relative after:bg-center after:bg-contain
                 after:bg-no-repeat after:absolute before:absolute before:h-full before:w-full`)}>
                    <Image
                        alt=""
                        layout="fill"
                        src="/images/services/3.jpg" 
                    />
                    <Typography
                        className="mt-6 text-gray-500 text-xl">
                        Experienced &amp; Well knowledgeable interior designs.
                    </Typography>
                </figure>
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