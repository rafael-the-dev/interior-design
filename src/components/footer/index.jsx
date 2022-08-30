
import { Typography } from "@mui/material"
import Image from "next/image"
import classNames from "classnames";

import classes from "./styles.module.css"
import logo from 'public/images/resources/logo-2.png';

import Link from "../link"

const Footer = () => {

    return (
        <footer className={classNames(classes.footer, `px-5 pt-12 sm:px-[10%]`)}>
            <div>
                <Link href="/">
                    <Image
                        alt="logo"
                        src={logo} 
                    />
                </Link>
                <Typography
                    className="mt-6 opacity-70 text-white">
                    On the other hand, we denounce with righteous indignation and dislike men 
                    who are so beguiled and demoralized by the charms of pleasure of the blinded 
                    by desiremoment.
                </Typography>
                <div className="flex flex-col mt-6 sm:flex-row">
                    <Typography
                        className="text-white">
                        Follow us on:
                    </Typography>
                    <ul className="flex">
                        <li className="mr-3">
                            <Link className="text-white opacity-70 hover:opacity-100" href="/">Facebook</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="text-white opacity-70 hover:opacity-100" href="/">Twitter</Link>
                        </li>
                        <li>
                            <Link className="text-white opacity-70 hover:opacity-100" href="/">Instagram</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};


export default Footer;