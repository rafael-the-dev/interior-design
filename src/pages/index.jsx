import { Button, Typography } from "@mui/material"
import classNames from "classnames"

import classes from "src/styles/home.module.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Link from "src/components/link";
import Hero from "src/components/home-components/hero";
import HightlightCard from "src/components/home-components/highlight-card";
import About from "src/components/home-components/about";
import WorkingAreas from "src/components/home-components/working-areas";
import OurWorkingProcess from "src/components/home-components/working-process";

const Home = () => {

    return (
        <>
            <Hero />
            <div>
                <div className="hightlight-cards-container justify-between px-5 py-12 relative sm:px-[10%] sm:pt-28 lg:py-0 lg:px-5">
                    <HightlightCard
                        description="Indignation dislike who are beguile works &amp; demoralized the charms."
                        image="icon-concept"
                        title="Concept designs" 
                    />
                    <HightlightCard
                        description="Our power of choice is untrammelled and all nothing prevents best."
                        image="icon-scheme"
                        title="Project designs" 
                    />
                    <HightlightCard
                        description="Every pleasure is to be welcomed &amp; every circumstances &amp; owing power."
                        image="icon-cupboard"
                        title="Make overs" 
                    />
                </div>
            </div>
            <About />
            <WorkingAreas />
            <OurWorkingProcess />
            <section className="bg-red-600 flex flex-col items-center jusitfy-between px-5 py-12
                sm:px-[10%] md:flex-row remove-px-10">
                <Typography
                    className={classNames(classes.makeAppointmentTitle, "text-xl lg:text-2xl",
                    "capitalize font-bold grow text-center text-white md:text-left")}>
                    Wanna work with our professional team?
                    make an appointment.
                </Typography>
                <Link 
                    className="mt-8 md:mt-0"
                    href="/">
                    <Button 
                        className="bg-white border border-solid border-white capitalize font-bold py-3 px-8 text-black hover:text-white"
                        endIcon={<ArrowRightAltIcon />}>
                        Make an appointment
                    </Button>
                </Link>
            </section>
            <style jsx>
                {
                    `
                        @media screen and (min-width: 990px) {
                            .hightlight-cards-container {
                                display: flex;
                            }
                        }

                        @media screen and (min-width: 1060px) {
                            .hightlight-cards-container {
                                transform: translateY(-86px);
                                z-index: 20;
                            }
                        }
                    `
                }
            </style>
        </>
    );
};

export default Home;