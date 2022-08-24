import { Typography } from "@mui/material";
import classNames from "classnames";

const DescriptionListItem = ({ description, icon, title }) => {

    return (
        <div className={classNames(icon, "description-list__item flex flex-col items-center mb-6 relative",
        "before:absolute last:mb-0 hover:before:text-red-600")}>
            <Typography
                component="dt"
                className="font-bold text-lg">
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
                            left: 1rem;
                            top: 50%;
                            transform: translateY(-50%);
                        }

                        .description-list__item {
                            padding-left: 2rem;
                        }
                    `
                }
            </style>
        </div>
    );
};

export default DescriptionListItem;