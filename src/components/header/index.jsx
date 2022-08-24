import { Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

import Link from "../link";
import DescriptionListItem from "./components/description-list-item";

const Header = () => {

    return (
        <header className={classNames(classes.header, ``)}>
            <div className="bg-neutral-900 py-4 px-5 sm:px-[10%]">
                <Typography className="text-center text-sm text-white">
                    <span className="opacity-75">Crystalo Inspiring Interiors, Basesd On United States... </span>
                    <Link className="text-white" href="/">Get Approximate Estimation.</Link>
                </Typography>
            </div>
            <dl className="bg-gray-100 py-8 px-5 sm:px-[10%]">
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
        </header>
    );
};

export default Header;