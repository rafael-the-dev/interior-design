import classNames from "classnames";

import classes from "./styles.module.css";

const ListItem = ({ children }) => (
    <li className={classNames(classes.listItem, "mr-3 last:mr-0")}>
        { children }
    </li>
);

export default ListItem;