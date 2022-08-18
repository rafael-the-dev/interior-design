import { Avatar, Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css"

const Card = ({ city, image, name, testimonial }) => {

    return (
        <div className={classNames(classes.card, `flex flex-col items-center mb-6 px-5 pt-16 pb-12 relative text-center
            icon-quote1 before:absolute before:bg-red-600 before:left-0 before:top-0 before:text-white`)}>
            <Typography
                component="h3"
                className="font-bold text-xl">
                { name }
            </Typography>
            <Typography
                component="p"
                className="opacity-80">
                { city }
            </Typography>
            <Avatar
                alt={name}
                className={classNames(classes.avatar, `mt-6`)}
                src={image} 
            />
            <Typography
                component="blockquote"
                className="mt-6 opacity-80">
                { testimonial }
            </Typography>
        </div>
    );
};

export default Card;