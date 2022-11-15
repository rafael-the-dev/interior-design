import Typography from "@mui/material/Typography";
import classNames from "classnames";

import classes from "./styles.module.css"

const ListItem = ({ children }) => (
    <Typography
        component="li"
        className={classNames("mr-3 mb-2 opacity-50 text-sm", classes.listItem)}>
        { children }
    </Typography>
);

export default ListItem;