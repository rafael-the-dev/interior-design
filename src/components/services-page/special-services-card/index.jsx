import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import classNames from "classnames";

import classes from "./styles.module.css";

import EastIcon from '@mui/icons-material/East';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';

import Link from "src/components/link"

const Card = ({ description, icon, index, image, title }) => {

    return (
        <div className={classNames(classes.card, "bg-white mb-8")}>
            <div
                className={classNames(classes.cardImageContainer, `relative`)}>
                <Image 
                    alt={title}
                    layout="fill"
                    src={image}
                />
            </div>
            <div className={classNames(classes.content, "relative")}>
                <div className={classNames(classes.titleContent, `absolute left-0 px-4 py-6 w-full`)}>
                    <div className="flex justify-between">
                        <span className={classNames(classes.icon, icon, `before:text-gray-400 before:text-6xl`)}></span>
                        <span className={classNames(classes.index, "font-bold text-6xl")}>0{ index }</span>
                    </div>
                    <div className="flex justify-between mt-4">
                        <Typography
                            component="h3"
                            className="capitalize font-bold ml-2 text-xl sm:text-2xl">
                            { title }
                        </Typography>
                        <Link href="/">
                            <IconButton className="text-gray-500">
                                <EastIcon />
                            </IconButton>
                        </Link>
                    </div>
                </div>
                <div className={classNames(classes.descriptionContent, `absolute h-full left-0 px-4 py-6 w-full`)}>
                    <Typography
                        className={classNames("text-gray-500")}>
                        { description }
                    </Typography>
                    <Link 
                        className={classNames(classes.descriptionContentLink)}
                        href="/">
                        <IconButton className="bg-red-500 text-white hover:bg-red-700">
                            <EastIcon />
                        </IconButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;