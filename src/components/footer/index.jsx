
import { Typography } from "@mui/material"
import Image from "next/image"
import classNames from "classnames";

import classes from "./styles.module.css"
import logo from 'public/images/resources/logo-2.png';

import Link from "../link";
import ListItem from "./components/link";
import Form from "./components/form"

const Footer = () => {

    return (
        <footer className={classNames(classes.footer, `px-5 pt-12 sm:px-[10%] md:px-5 md:pt-20`)}>
            <div className="flex-wrap justify-between md:flex">
                <div className={classNames(classes.column)}>
                    <Link href="/">
                        <Image
                            alt="logo"
                            src={logo} 
                        />
                    </Link>
                    <Typography
                        className="leading-7 mt-6 opacity-70 text-sm text-white">
                        On the other hand, we denounce with righteous indignation and dislike men 
                        who are so beguiled and demoralized by the charms of pleasure of the blinded 
                        by desiremoment.
                    </Typography>
                    <div className="flex flex-col mt-6 sm:items-center sm:flex-row">
                        <Typography
                            className="text-white">
                            Follow us on:
                        </Typography>
                        <ul className="flex mt-2 sm:mt-0 sm:ml-2">
                            <li className="mr-3">
                                <Link className="text-sm text-white opacity-70 hover:opacity-100" href="/">Facebook</Link>
                            </li>
                            <li className="mr-3">
                                <Link className="text-sm text-white opacity-70 hover:opacity-100" href="/">Twitter</Link>
                            </li>
                            <li>
                                <Link className="text-sm text-white opacity-70 hover:opacity-100" href="/">Instagram</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classNames(classes.column, "mt-8 md:mt-0 md:w-1/2")}>
                    <Typography 
                        component="h2"
                        className="font-bold text-xl text-white">
                        Useful links
                    </Typography>
                    <div className="justify-between mt-4 md:flex">
                        <ul className="md:border-r border-solid border-gray-700 md:w-1/2">
                            <ListItem href="/" label="Company" />
                            <ListItem href="/" label="Services" />
                            <ListItem href="/" label="Team" />
                            <ListItem href="/" label="Projects" />
                            <ListItem href="/" label="Get a quote" />
                        </ul>
                        <ul className="mt-3 md:mt-0 lg:ml-8 lg:w-1/2">
                            <ListItem href="/" label="News" />
                            <ListItem href="/" label="Testimonials" />
                            <ListItem href="/" label="Partners" />
                            <ListItem href="/" label="Privacy policy" />
                            <ListItem href="/" label="Contact us" />
                        </ul>
                    </div>
                </div>
                <Form />
            </div>
        </footer>
    );
};


export default Footer;