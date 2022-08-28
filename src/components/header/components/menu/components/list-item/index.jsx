import { useCallback, useMemo, useState } from "react"
import { Button, Collapse, Typography } from "@mui/material";
import { useRouter } from "next/router"
import classNames from "classnames";

import classes from "../styles.module.css"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Link from "src/components/link";

const ListItem = ({ id, list, label }) => {
    const [ open, setOpen ] = useState(false);

    const { pathname } = useRouter();

    const listMemo = useMemo(() => (
        <ul className="flex flex-col px-5">
            {
                list.map((item, index) => (
                    <li  
                        className="mb-4"
                        key={index}>
                        <Link className="block text-white hover:text-red-600" href={item.href}>{ item.label }</Link>
                    </li>
                ))
            }
        </ul>
    ), [ list ])

    const toggleState = useCallback(() => setOpen(b => !b), [])

    return (
        <li className={classNames(classes.listItem, "border-b border-solid border-neutral-800")}>
                <Button 
                    className={classNames("items-center justify-between py-3 px-5 w-full hover:text-red-600",
                    classes.listItemButton, pathname === id ? classes.currentPage : "text-white")}
                    endIcon={ open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    onClick={toggleState}>
                    { label }
                </Button>
                <Collapse in={open} unmountOnExit>
                    { listMemo }
                </Collapse>
        </li>
    );
};

export default ListItem;