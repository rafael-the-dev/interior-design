import { Button, Typography } from "@mui/material";
import Image from "next/image";
import classNames from "classnames";

import classes from "./styles.module.css"

import Link from "src/components/link"

const Card = ({ description, icon, image, title }) => {

    return (
        <li className={classNames(classes.card, "flex flex-col items-stretch mb-4")}>
            <div
                className={classNames(classes.cardImageContainer)}>
                <Image 
                    alt={title}
                    layout="fill"
                    src={image}
                />
            </div>
            <div className="flex flex-col grow items-center justify-between text-center">
                <div>
                    <Typography
                        component="h3"
                        className="capitalize font-bold text-lg sm:text-xl">
                        { title }
                    </Typography>
                    <Typography
                        className="mt-3 text-gray-600">
                        { description }
                    </Typography>
                </div>
                <Link className="mt-8 w-full" href="/">
                    <Button
                        className="bg-gray-300 border-gray-300 py-3 rounded-none text-black w-full"
                        variant="outlined">
                        Read more
                    </Button>
                </Link>
            </div>
        </li>
    );
};

export default Card;