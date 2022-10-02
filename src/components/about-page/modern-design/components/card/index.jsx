import Image from "next/image";
import { Button, Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';

import Link from "src/components/link";

const Card = ({ description, image, title, year }) => {

    return (
        <li className={classNames(classes.card, `absolute items-center lg:bg-white lg:flex`)}>
            <div className={classNames(classes.cardImageContaienr, "relative")}>
                <Image 
                    alt={title}
                    layout='fill'
                    src={image}
                />
            </div>
            <div className={classNames(classes.cardContent, "py-8 lg:pt-0 lg:px-8 lg:pb-0 xl:px-16")}>
                <Typography
                    component='h4'
                    className={classNames(classes.cardYear, "bg-red-500 font-semibold py-1 px-2 relative text-center text-lg text-white")}>
                    { year }
                </Typography>
                <Typography
                    component='h3'
                    className="font-semibold mt-8 text-lg sm:text-xl md:text-2xl">
                    { title }
                </Typography>
                <Typography
                    className="leading-6 mt-3 mb-8 text-gray-500 text-sm md:text-base">
                    { description }
                </Typography>
                <Link href="/">
                    <Button
                        className="p-0 text-black hover:bg-transparent hover:text-red-500"
                        endIcon={<TrendingFlatOutlinedIcon />}>
                        Read more
                    </Button>
                </Link>
            </div>
        </li>
    );
};

export default Card;