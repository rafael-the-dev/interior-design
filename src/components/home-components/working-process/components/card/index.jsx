import { Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

const Card = ({ title }) => {

    return (
        <div className={classNames(classes.card, "before:bg-red-600 before:block card mb-24 pb-8 relative text-center")}>
            <Typography 
                component="h3"
                className={classNames(classes.title, `font-bold text-xl before:absolute before:border-2 before:border-solid mt-20
                before:border-red-600 before:text-2xl before:rounded-full `)}>
                { title }
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