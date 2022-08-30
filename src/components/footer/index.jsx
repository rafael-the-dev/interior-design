
import { Typography } from "@mui/material"
import Image from "next/image"
import classNames from "classnames";

import classes from "./styles.module.css"
import logo from 'public/images/resources/logo-2.png';

import Link from "../link";
import ListItem from "./components/link";
import Form from "./components/form";
import AddressItem from "./components/address-item"

const Footer = () => {

    return (
        <footer className={classNames(classes.footer, ``)}>
            <div className={classNames(classes.row, "flex-wrap justify-between px-5 pt-12 sm:px-[10%] md:px-5 md:pt-20 md:flex pb-12")}>
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
            <div className="relative">
                <Typography
                    component="address"
                    className={classNames(`bg-white flex flex-col flex-wrap items-center justify-center px-5 
                    py-8 sm:px-[10%] md:flex-row md:justify-between md:px-4 md:py-6`, classes.address)}>
                    <AddressItem icon="icon-global">
                        Flat 20, Reynolds Neck, North<br/>Helenaville, FV77 8WS
                    </AddressItem>
                    <AddressItem icon="icon-support1">
                        324 123 45 978 &amp; 01<br/><span className="font-bold">Mon - Friday:</span> 9.00am to 6.00pm
                    </AddressItem>
                    <AddressItem icon="icon-shipping-and-delivery">
                        abc@yourdomain.com<br/>crystalocareer@gmail.com
                    </AddressItem>
                </Typography>
            </div>
            <div className={classNames(classes.copyright, "py-8 text-center text-red-600 md:pt-24")}>
                <Typography>
                    { new Date(Date.now()).getFullYear() }
                </Typography>
            </div>
        </footer>
    );
};


export default Footer;