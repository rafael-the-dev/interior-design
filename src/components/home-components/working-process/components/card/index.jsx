import { Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

const Card = ({ description, icon, title }) => {

    return (
        <div className={classNames(classes.card, `before:bg-red-600 before:block card mb-24 pb-8 relative 
            text-center bg-white`)}>
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
            <div className="mt-8">
                <span className={classNames(icon, "card__icon before:text-gray-400 before:block")}></span>
            </div>
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

                        .card__icon::before {
                            font-size: 4rem;
                            margin: 0 auto;
                            transition: color .5s ease;
                        }

                        .card:hover .card__icon::before {
                            color: #dc2626;
                        }

                        @media screen and (min-width: 990px) {
                            .card {
                                margin-bottom: 2rem;
                                width: 32%;
                            }
                        }
                    `
                }
            </style>
        </div>
    )
};

export default Card;