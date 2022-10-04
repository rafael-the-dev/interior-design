import { Button, Typography } from "@mui/material";
import Image from "next/image";
import classNames from "classnames";

import classes from "./styles.module.css";

import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';

import Link from "src/components/link"

const Card = ({ description, icon, image, title }) => {

    return (
        <li className={classNames(classes.card, "flex flex-col items-stretch mb-8")}>
            <div
                className={classNames(classes.cardImageContainer, `relative`)}>
                <Image 
                    alt={title}
                    layout="fill"
                    src={image}
                />
            </div>
            <div className="flex flex-col grow items-center justify-between text-center">
                <div className="relative">
                    <div 
                        aria-label="icon"
                        className={classNames(icon, classes.icon, `absolute bg-white border-2 border-dashed border-gray-400
                        rounded-full before:flex before:h-full before:items-center before:justify-center before:w-full`)}>
                    </div>
                    <Typography
                        component="h3"
                        className="capitalize font-bold mt-16 text-lg sm:text-xl sm:mt-20">
                        { title }
                    </Typography>
                    <Typography
                        className="mt-3 text-gray-600">
                        { description }
                    </Typography>
                </div>
                <Link className="mt-8 w-full" href="/">
                    <Button
                        className={classNames(classes.cardButton, `bg-gray-300 border-gray-300 py-3 rounded-none
                        text-black w-full`)}
                        endIcon={<TrendingFlatOutlinedIcon />}
                        variant="outlined">
                        Read more
                    </Button>
                </Link>
            </div>
        </li>
    );
};

export default Card;