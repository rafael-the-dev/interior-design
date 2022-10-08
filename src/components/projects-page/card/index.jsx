import Image from "next/image";
import { IconButton, Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";

import LaunchIcon from '@mui/icons-material/Launch';

const ListItem = ({ category, image, selectedTab, title }) => {

    return (
        <li className={classNames(classes.card, `mb-6 relative`,
        { [classes.cardHidden]: !category.includes(selectedTab) && selectedTab !== "all" })}>
            <div className={classNames(classes.content, "absolute h-full w-full")}>
                <Image 
                    alt=""
                    layout="fill"
                    src={image}
                />
                <div className={classNames(classes.linkContainer, "absolute flex items-center justify-center w-full")}>
                    <IconButton className="text-white hover:text-red-500">
                        <LaunchIcon className="" />
                    </IconButton>
                </div>
                <div className={classNames(classes.footer, `absolute bg-white bottom-0 flex flex-col items-center 
                    justify-center w-full`)}>
                    <Typography 
                        component="h3"
                        className="font-bold text-base text-gray-600">
                        Modern design
                    </Typography>
                    <Typography 
                        component="h4"
                        className="capitalize font-bold text-xl">
                        Art family residence
                    </Typography>
                </div>
            </div>
        </li>
    );
};

export default ListItem;