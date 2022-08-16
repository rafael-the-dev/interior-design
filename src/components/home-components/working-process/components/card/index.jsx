import { Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

const Card = ({ description, title }) => {

    return (
        <div className={classNames(classes.card, `before:bg-red-600 before:block card mb-24 pb-8 relative 
            text-center`)}>
            <div className={classNames(classes.indexContainer, `absolute border-2 border-solid border-red-600
                rounded-full before:bg-red-600 before:absolute before:h-full before:rounded-full`)}>
                <span className={classNames(classes.index, `
                font-bold text-2xl relative`)}></span>
            </div>
            <Typography 
                component="h3"
                className={classNames(classes.title, `font-bold text-xl mt-20
                 `)}>
                { title }
            </Typography>
            <Typography
                component="p"
                className="mt-4  px-5">
                { description }
            </Typography>
            <style jsx>
                {
                    `
                        .card::before {
                            content: "" !important;
                            height: 2px;
                            width: 100%;
                        }

                        .card {
                            box-shadow: 0px 6px 10px 3px #e8e8e8;
                        }
                    `
                }
            </style>
        </div>
    )
};

export default Card;