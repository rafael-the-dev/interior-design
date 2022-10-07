import { Avatar, Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

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
                <div className="mt-3 relative">
                    <Typography
                        component="blockquote"
                        className={classNames(classes.description, "leading-6 text-sm text-gray-600 sm:text-base")}>
                        &ldquo;{ text }&rdquo;
                    </Typography>
                    <FormatQuoteIcon className={classNames("absolute text-gray-100", classes.quoteIcon)} />
                </div>
            </div>
        </li>
    );
};

export default Card;