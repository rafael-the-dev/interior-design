import { Button, Typography } from "@mui/material"
import Image from "next/image"
import classNames from "classnames";

import classes from "./styles.module.css";

import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';

import Link from "src/components/link"


const Card = ({ image, name, position }) => {

    return (
        <li className={classNames(classes.card, "mb-8")}>
            <div className={classNames(classes.imageContainer, `relative`)}>
                <Image 
                    alt={name}
                    layout="fill"
                    src={image}
                />
                <div className={classNames(classes.linkContainer, `absolute flex items-center justify-center w-full`)}>
                    <Link href="/">
                        <Button
                            className="capitalize text-white"
                            endIcon={<TrendingFlatOutlinedIcon />}>
                            View profile
                        </Button>
                    </Link>
                </div>
            </div> 
            <div className="px-4 py-6 text-center">
                <Typography
                    component="h3"
                    className={classNames(classes.position, "flex items-center font-medium justify-center text-gray-600")}>
                    { position }
                </Typography>
                <Typography
                    component="h4"
                    className="font-bold mt-3 text-2xl">
                    { name }
                </Typography>
            </div>
        </li>
    );
};

export default Card;