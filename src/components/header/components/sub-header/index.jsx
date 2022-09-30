import { Typography } from "@mui/material";


import classNames from "classnames";

import classes from "./styles.module.css";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Link from "src/components/link"

const Container = () => {

    return (
        <div className={classNames("justify-between py-4 px-5 text-white md:flex", classes.container)}>
            <div className={classNames("flex flex-col items-center md:items-start", classes.row)}>
                <Typography
                    className="flex font-bold items-center">
                    <span className="icon-music mr-2 text-red-600"></span>
                    We have answers
                </Typography>
                <ul className={classNames("flex flex-wrap justify-center mt-3 mb-1", classes.list)}>
                    <Typography
                        component="li"
                        className={classNames("mr-3 mb-2 opacity-50 text-sm", classes.listItem)}>
                        +324 123 45 978
                    </Typography>
                    <Typography
                        component="li"
                        className={classNames("mr-3 mb-2 opacity-50 text-sm", classes.listItem)}>
                        abc@yourdomain.com
                    </Typography>
                    <Typography
                        component="li"
                        className={classNames("mb-2 opacity-50 text-sm", classes.listItem)}>
                        Mon - Sat: 9am to 6pm
                    </Typography>
                </ul>
            </div>
            <div className={classNames(classes.row, "flex flex-col items-center mt-4 md:mt-0 md:items-end")}>
                <ul className="flex">
                    <li className="mr-2 lg:mr-3">
                        <Link className="opacity-50 text-sm text-white" href="/">Partners</Link>
                    </li>
                    <li className="mr-2 lg:mr-3">
                        <Link className="opacity-50 text-sm text-white" href="/">Media</Link>
                    </li>
                    <li className="mr-2 lg:mr-3">
                        <Link className="opacity-50 text-sm text-white" href="/">3600 View</Link>
                    </li>
                    <li className="">
                        <Link className="opacity-50 text-sm text-white" href="/">FAQ</Link>
                    </li>
                </ul>
                <ul className={classNames("flex mt-3", classes.socialMediaContainer)}>
                    <li className="mr-3">
                        <FacebookIcon className="opacity-50  text-white hover:text-red-600" />
                    </li>
                    <li className="mr-3">
                        <TwitterIcon className="opacity-50  text-white hover:text-red-600" />
                    </li>
                    <li className="mr-3">
                        <InstagramIcon className="opacity-50  text-white hover:text-red-600" />
                    </li>
                    <li className="">
                        <LinkedInIcon className="opacity-50  text-white hover:text-red-600" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Container;