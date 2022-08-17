import { Button } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import H2 from "src/components/h2";
import Link from "src/components/link";
import ProjectsCarousel from "./components/carousel";

const RecentlyCompletedWorks = () => {

    return (
        <section className="px-5 py-16 md:pt-24 md:pb-8">
            <div className="flex flex-col justify-between title-container">
                <H2 className={classNames(classes.title, ` before:text-red-600 
                before:block before:font-bold before:text-sm before:mb-2`)}>
                    <span className="font-bold">Recently completed</span> Works
                </H2>
                <Link className="mt-6 lg:mt-0 lg:mr-1" href="/">
                    <Button 
                        className="capitalize hover:bg-transparent p-0 text-black hover:text-red-600"
                        endIcon={<ArrowRightAltIcon />}>
                        More projects
                    </Button>
                </Link>
            </div>
            <ProjectsCarousel />
            <style jsx>
                {
                    `
                        @media screen and (min-width: 940px) {
                            .title-container {
                                align-items: center;
                                flex-direction: row;
                            }
                        }
                    `
                }
            </style>
        </section>
    );
};

export default RecentlyCompletedWorks;