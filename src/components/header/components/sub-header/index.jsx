import { Typography } from "@mui/material";


import classNames from "classnames";

import classes from "./styles.module.css";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Link from "src/components/link";
import SocialMediaListItem from "./components/social-media-list-item"

const Container = () => {

    return (
        <div className={classNames("justify-between py-4 px-5 text-white md:flex lg:px-8", classes.container)}>
            <div className={classNames("flex flex-col items-center md:items-start", classes.row)}>
                <Typography
                    className="flex font-bold items-center">
                    <span className="icon-music mr-2 text-amber-600"></span>
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
                <ul className={classNames("flex mt-3", classes.socialMediaContainer)}>
                    <SocialMediaListItem>
                        <FacebookIcon />
                    </SocialMediaListItem>
                    <SocialMediaListItem>
                        <TwitterIcon />
                    </SocialMediaListItem>
                    <SocialMediaListItem>
                        <InstagramIcon />
                    </SocialMediaListItem>
                    <SocialMediaListItem>
                        <LinkedInIcon />
                    </SocialMediaListItem>
                </ul>
            </div>
        </div>
    );
};

export default Container;