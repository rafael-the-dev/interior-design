import { IconButton, Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Link from "../link";
import DescriptionListItem from "./components/description-list-item";
import Menu from "./components/menu"

const Header = () => {

    return (
        <header className={classNames(classes.header, ``)}>
            <div className="bg-neutral-900 pt-4 pb-16 px-5 sm:px-[10%]">
                <Typography className="text-center text-sm text-white">
                    <span className="opacity-75">Crystalo Inspiring Interiors, Basesd On United States... </span>
                    <Link className="text-white" href="/">Get Approximate Estimation.</Link>
                </Typography>
            </div>
            <Menu />
            <div className={classNames(classes.descriptionListContainer, "bg-gray-100 pt-16 pb-10 px-5 sm:px-[10%] remove-px-10",
                "flex flex-col items-stretch")}>
                <dl className={classNames(classes.descriptionList, "")}>
                    <DescriptionListItem  
                        description="Flat 201, Reynolds Neck Str"
                        icon="icon-maps-and-location"
                        title="Newyork, USA"
                    />
                    <DescriptionListItem  
                        description="Mon - Friday: 9.00 to 18.00"
                        icon="icon-phone"
                        title="+324 123 45 978"
                    />
                    <DescriptionListItem  
                        description="Get a Free Quote"
                        icon="icon-mail"
                        title="Support@Mailus.Com"
                    />
                </dl>
                <ul className={classNames(classes.linksList, "flex justify-center mt-6")}>
                    <li className="mr-3">
                        <IconButton className="bg-white p-3">
                            <FacebookIcon />
                        </IconButton>
                    </li>
                    <li className="mr-3">
                        <IconButton className="bg-white p-3">
                            <LinkedInIcon />
                        </IconButton>
                    </li>
                    <li className="">
                        <IconButton className="bg-white p-3">
                            <InstagramIcon />
                        </IconButton>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;