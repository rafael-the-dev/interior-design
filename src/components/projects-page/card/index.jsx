import Image from "next/image";
import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";

const ListItem = ({ category, image, selectedTab, title }) => {
    console.log(category, selectedTab, !category.includes(selectedTab),  selectedTab !== "all")
    return (
        <li className={classNames(classes.card, `mb-6`,
        { [classes.cardHidden]: !category.includes(selectedTab) && selectedTab !== "all" })}>
            <div className="h-full relative">
                <Image 
                    alt={title}
                    layout="fill"
                    src={image}
                />
            </div>
        </li>
    );
};

export default ListItem;