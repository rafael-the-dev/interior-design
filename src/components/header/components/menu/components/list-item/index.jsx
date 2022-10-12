import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Button, Collapse } from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useRouter } from "next/router"
import classNames from "classnames";

import classes from "../styles.module.css"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

import Link from "src/components/link";

const ListItem = ({ id, list, label }) => {
    const [ open, setOpen ] = useState(false);

    const pathnameRef = useRef("");

    const { pathname } = useRouter();

    const listMemo = useMemo(() => (
        <>
            {
                list.map((item, index) => (
                    <li  
                        className={classNames(classes.menuListItem, "mb-4 last:border-0")}
                        data-navigation="item"
                        key={index}>
                        <Link 
                            className={classNames(classes.listItemLink, "block capitalize items-center text-white hover:text-red-600 lg:flex")} 
                            href={item.href}>
                            <span className={classNames(classes.iconWrapper)} >
                                <TrendingFlatIcon />
                            </span>
                            { item.label }
                        </Link>
                    </li>
                ))
            }
        </>
    ), [ list ])

    const toggleState = useCallback((event) => setOpen(b => !b), []);
    const closeHandler = useCallback(() => setOpen(false), []);

    useEffect(() => {
        if(Boolean(pathnameRef.current) && (pathname !== pathnameRef.current)) {
            setOpen(false);
        }

        pathnameRef.current = pathname;
    }, [ pathname ])

    return (
        <ClickAwayListener
            onClickAway={closeHandler}>
            <li className={classNames(classes.listItem, "border-b border-solid border-neutral-800")}>
                <Button 
                    className={classNames("items-center justify-between py-3 px-5 w-full hover:text-red-600",
                    classes.listItemButton, pathname === id ? classes.currentPage : "text-white")}
                    data-navigation="button"
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
        </ClickAwayListener>
    );
};

export default ListItem;