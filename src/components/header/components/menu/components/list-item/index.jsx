import { useCallback, useEffect, useMemo, useState } from "react"
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
        <>
            {
                list.map((item, index) => (
                    <li  
                        className="mb-4"
                        data-navigation="item"
                        key={index}>
                        <Link className={classNames(classes.listItemLink, "block text-white hover:text-red-600")} href={item.href}>{ item.label }</Link>
                    </li>
                ))
            }
        </>
    ), [ list ])

    const toggleState = useCallback(() => setOpen(b => !b), []);

    const clickHandler = useCallback((event) => {
        if(!event.target.getAttribute("data-navigation")) {
            setOpen(false);
        }
    }, [])

    useEffect(() => {
        const currentWindow = window;

        if(open) {
            currentWindow.addEventListener("click", clickHandler);
        } else {
            currentWindow.removeEventListener("click", clickHandler);
        }

        return () => {
            currentWindow.removeEventListener("click", clickHandler);
        };
    }, [ clickHandler, open ])

    return (
        <li className={classNames(classes.listItem, "border-b border-solid border-neutral-800")}>
            <Button 
                className={classNames("items-center justify-between py-3 px-5 w-full hover:text-red-600",
                classes.listItemButton, pathname === id ? classes.currentPage : "text-white")}
                data-navigation="item"
                endIcon={ open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                onClick={toggleState}>
                { label }
            </Button>
            <Collapse className={classes.listItemCollapse} in={open} unmountOnExit>
                <ul className="flex flex-col px-5">{ listMemo }</ul>
            </Collapse>
            <ul 
                className={classNames(classes.listItemList, "absolute bg-white flex flex-col h-0 overflow-hidden px-5",
                { [classes.listItemListVisible]: open })}>
                { listMemo }
            </ul>
        </li>
    );
};

export default ListItem;