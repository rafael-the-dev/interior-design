import { Button, Typography } from "@mui/material";
import Image from "next/image";
import classNames from "classnames";

import classes from "./styles.module.css";

import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

import Link from "src/components/link"

const Card = ({ author, category, description, image, title }) => {

    return (
        <div className={classNames(classes.card, `mb-8 relative`)}>
            <div className={classNames(classes.imageContainer, "relative")}>
                <Image 
                    alt={title}
                    layout="fill"
                    src={image}
                />
            </div>
            <div className="pt-4">
                <Typography
                    component="h2"
                    className={classNames(classes.title, `font-bold relative text-lg before:absolute before:bg-red-500 
                    before:top-0`)}>
                    { title }
                </Typography>
                <ul className="flex mt-3">
                    <li className="font-semibold text-base pr-2 text-neutral-600">
                        By <Link className="text-sm text-red-500" href="/">{ author }</Link>
                    </li>
                    <li className="font-semibold text-base pl-2 text-neutral-600">
                        In <Link className="text-sm text-red-500" href="/">{ category }</Link>
                    </li>
                </ul>
                <Typography
                    component="p"
                    className="leading-6 mt-4 text-gray-600 text-sm">
                    { description }
                </Typography>
                <Link className="inline-block mt-4" href="/">
                    <Button
                        className="capitalize p-0 text-black hover:bg-transparent hover:text-red-500"
                        endIcon={<TrendingFlatIcon />}>
                        Read more
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Card;