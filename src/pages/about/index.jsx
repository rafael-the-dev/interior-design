import classNames from "classnames";
import { Button, Typography } from "@mui/material";

import classes from "./styles.module.css";

import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';

import DefaultHero from "src/components/default-hero";
import Link from "src/components/link"
import SingleFactCounter from "src/components/about-page/single-fact-counter";
import TeamMemberCard from "src/components/about-page/team-menber-card";
import ModernDesignCarolusel from "src/components/about-page/modern-design"

const Container = () => {
    const teamMembers = [
        {
            image: "/images/team/1.jpg",
            name: "Alison Fletcher",
            position: "CEO & Founder"
        },
        {
            image: "/images/team/v2-2.jpg",
            name: "Joe Wilson",
            position: "Designer"
        },
        {
            image: "/images/team/v2-3.jpg",
            name: "White Grey",
            position: "Architect"
        },
        {
            image: "/images/team/v2-4.jpg",
            name: "Kevin Smith",
            position: "Manager"
        }
    ];

    return (
        <main>
            <DefaultHero>
                <Typography 
                    component="h1"
                    className={classNames(classes.heroTitle, "leading-tight",
                    "capitalize font-bold text-5xl text-white before:bg-white lg:leading-snug lg:text-6xl")}>
                    Talented interior<br/>designer.
                </Typography>
            </DefaultHero>
            <section className="py-12">
                <div className="px-5 sm:px-[10%] lg:px-5">
                    <div className="items-center justify-between lg:flex ">
                        <Typography 
                            component="h2"
                            className={classNames(classes.modernDesignTitle, `
                            font-medium text-2xl uppercase md:text-3xl lg:text-4xl before:block before:font-bold before:mb-2 before:text-red-500`)}>
                            <span className="font-bold">Modern &amp; Luxury</span><br/>
                            Interior designers in USA
                        </Typography>
                        <Typography
                            className={classNames(classes.moderDesignDescription, "leading-6 mt-4 text-gray-600 text-sm md:text-base")}>
                            We feel that interior design is one of the most important investments you will 
                            ever make. Whether your needs are Residential or Commercial Interior Design or 
                            Model Home Merchandising, our commitment to your project.
                        </Typography>
                    </div>
                    <ModernDesignCarolusel />
                </div>
                <div className={classNames(classes.SingleFactCounterContainer, `bg-gray-100 flex flex-col 
                    flex-wrap justify-center items-stretch px-[20%] sm:flex-row sm:justify-between sm:px-[10%] 
                    lg:px-[7%]`)}>
                    <SingleFactCounter description={<>Years of<br/>Experience</>} title="36" />
                    <SingleFactCounter description={<>Projects<br/>Completed</>} title="5k" />
                    <SingleFactCounter description={<>Branches<br/>Worldwide</>} title="24" />
                    <SingleFactCounter description={<>Awards<br/>Holds in Hand</>} title="47" />
                </div>
            </section>
            <section className="px-5 pt-4 pb-12 sm:px-[10%] lg:px-5">
                <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                    <Typography 
                        component="h2"
                        className={classNames(classes.expertsTitle, `
                        font-medium text-2xl uppercase md:text-3xl lg:text-4xl before:block before:font-bold before:mb-2 before:text-red-500`)}>
                        <span className="font-bold">Expert &amp; experienced</span><br/>
                        Team
                    </Typography>
                    <Link 
                        className="mt-4" 
                        href="/">
                        <Button
                            className={classNames(`bg-red-500 border-red-500 py-2 rounded-none text-white 
                            hover:bg-transparent hover:border-red-500 hover:text-red-500 md:py-3 md:px-6`)}
                            endIcon={<TrendingFlatOutlinedIcon />}
                            variant="outlined">
                            All members
                        </Button>
                    </Link>
                </div>
                <ul className="flex flex-wrap items-stretch justify-between mt-8 sm:mt-12">
                    {
                        teamMembers.map((item, index) => (
                            <TeamMemberCard { ...item } key={index} />
                        ))
                    }
                </ul>
            </section>
        </main>
    );
};

export default Container;