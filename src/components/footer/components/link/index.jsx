import classNames from "classnames";

import classes from "./styles.module.css";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';

import Link from "src/components/link"

const LinkContainer = ({ href, label }) => (
    <li className={classNames(classes.container, `mb-3 last:mb-0`)}>
        <Link 
            className={classNames(classes.link, `capitalize flex items-center opacity-70 text-sm text-white hover:opacity-100`)}
            href={href}>
            <AddIcon className={classNames(classes.icon, classes.linkAddIcon)} />
            <HorizontalRuleIcon className={classNames(classes.icon, classes.linkMinusIcon)} />
            { label }
        </Link>
    </li>
);

export default LinkContainer;