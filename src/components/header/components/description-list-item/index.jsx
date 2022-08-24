import { Typography } from "@mui/material";
import classNames from "classnames";

const DescriptionListItem = ({ description, icon, title }) => {

    return (
        <div className={classNames(icon, "description-list__item flex flex-col items-center mb-6 relative",
        "before:absolute last:mb-0 before:text-gray-400 hover:before:text-red-600")}>
            <Typography
                component="dt"
                className="font-bold text-lg sm:text-xl">
                { title }
            </Typography>
            <Typography
                component="dd"
                className="mt-1 opacity-80 text-sm">
                { description }
            </Typography>
            <style jsx>
                {
                    `
                        .description-list__item::before {
                            font-size: 1.8rem;
                            left: 10%;
                            top: 50%;
                            transform: translateY(-50%);
                        }

                        .description-list__item {
                            padding-left: 2rem;
                        }

                        @media screen and (min-width: 420px) {
                            .description-list__item::before {
                                font-size: 2.5rem;
                                left: 20%;
                            }
                        }

                        @media screen and (min-width: 550px) {
                            .description-list__item::before {
                                font-size: 2.8rem;
                                left: 22%;
                            }
                        }

                        @media screen and (min-width: 768px) {
                            .description-list__item::before {
                                left: 28%;
                            }
                        }

                        @media screen and (min-width: 990px) {
                            .description-list__item::before {
                                font-size: 2.8rem;
                                left: 0;
                            }

                            .description-list__item {
                                align-items: flex-start;
                                margin-bottom: 0;
                                padding-left: 4rem;
                                width: calc(100% / 3);
                            }
                        }

                        @media screen and (min-width: 1100px) {
                            .description-list__item {
                                width: calc((100% / 3) - 1%);
                            }
                        }

                        @media screen and (min-width: 1200px) {
                            .description-list__item {
                                padding: 0 5%;                             
                            }
                        }
                    `
                }
            </style>
        </div>
    );
};

export default DescriptionListItem;