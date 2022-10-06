import { Avatar, Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

const Card = ({ image, location, name, text }) => {

    return (
        <li className={classNames(classes.cardContainer, "absolute bg-white px-4")}>
        <div className={classNames(classes.cardBorder, "absolute h-full left-0 w-full")}></div>
            <div className={classNames(classes.card, "py-6 px-4")}>
                <div className="flex items-center">
                    <Avatar 
                        alt={name}
                        className={classNames(classes.avatar, "mr-3")}
                        src={image}
                    />
                    <div>
                        <Typography
                            component="h3"
                            className="font-bold text-lg">
                            { name }
                        </Typography>
                        <Typography
                            className="text-sm text-red-500">
                            { location }
                        </Typography>
                    </div>
                </div>
                <div className="mt-3">
                    <Typography
                        component="blockquote"
                        className="leading-6 text-sm text-gray-600">
                        { text }
                    </Typography>
                </div>
            </div>
        </li>
    );
};

export default Card;