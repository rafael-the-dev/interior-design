import { Button } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import H2 from "src/components/h2";
import Link from "src/components/link";
import Card from "./components/card"

const Testimonials = () => {

    return (
        <section className="px-5 py-16 sm:px-[10%] remove-px-10">
            <div className="flex flex-col justify-between title-container">
                <H2 className={classNames(classes.title, ` before:text-red-600 
                before:block before:font-bold before:text-sm before:mb-2`)}>
                    <span className="font-bold">Our customer</span> Words
                </H2>
                <Link className="mt-6 lg:mt-0 lg:mr-1" href="/">
                    <Button 
                        className="capitalize hover:bg-transparent p-0 text-black hover:text-red-600"
                        endIcon={<ArrowRightAltIcon />}>
                        More reviews
                    </Button>
                </Link>
            </div>
            <div className={classNames(classes.cardsContainer, "items-stretch justify-between mt-12")}>
                <Card
                    city="California"
                    image="/images/testimonial/testi-1.png"
                    name="Shelly Johnson"
                    testimonial="Your guys were great knowledgeable, well experienced, efficient and neat. A true to work with Crystalo." 
                />
                <Card
                    city="Los Angeles"
                    image="/images/testimonial/testi-2.png"
                    name="Cathrine Wagner"
                    testimonial="Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment." 
                />
                <Card
                    city="Newyork City"
                    image="/images/testimonial/testi-3.png"
                    name="Cuthbert Brain"
                    testimonial="Same as saying through shrinking from all pain these cases are perfectly simple and easy to distinguish." 
                />
            </div>
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

export default Testimonials;