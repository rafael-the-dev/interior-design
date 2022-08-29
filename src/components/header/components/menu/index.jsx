import { useCallback, useMemo, useState } from "react";
import { Collapse, IconButton } from "@mui/material"
import Image from "next/image";
import classNames from "classnames"

import classes from "./styles.module.css";

import CloseIcon from '@mui/icons-material/Close';
import Bars from "@mui/icons-material/Menu"
import Logo from "public/images/resources/logo.png";

import Link from "src/components/link";
import NavigationList from "./components/navigation";

const Menu = () => {
    const [ open, setOpen ] = useState(false);

    const logoMemo = useMemo(() => (
        <Link className={classNames(classes.logoContainer, `relative`)} href="/">
            <Image
                alt="logo"
                layout="fill"
                src={Logo} 
            />
        </Link>
    ), [])
    const navigationList = useMemo(() => <NavigationList />, [])

    const toggleState = useCallback(() => setOpen(b => !b), [])

    return (
        <div className="relative">
            <div className={classNames(classes.container, 
                "absolute bg-white")}>
                <div className="flex items-center justify-between py-3 px-2 sm:px-3 lg:px-4 lg:py-4">
                    { logoMemo }
                    <div className="flex items-center">
                        <nav className={classNames(classes.navigation, "hidden")}>
                            { navigationList }
                        </nav>
                        <div className="flex h-full mx-1">
                            <IconButton 
                                className={classNames(classes.icon, classes.searchButton, "rounded-none icon-search",
                                "border-r border-solid border-slate-200 sm:pr-3")} 
                                aria-label="search"
                            />
                            <IconButton 
                                className={classNames(classes.icon, classes.bagButton, "rounded-none icon-bag",
                                "sm:pl-3")} 
                                aria-label="cart"
                            />
                        </div>
                        <IconButton 
                            className={classNames(classes.menuButton, "bg-black rounded-none text-white hover:bg-neutral-700")}
                            onClick={toggleState}>
                            { open ? <CloseIcon /> : <Bars /> }
                        </IconButton>
                    </div>
                </div>
                <Collapse className={classNames(classes.collapse, "absolute bg-white w-full")} component="nav" in={open} unmountOnExit>
                    { navigationList }
                </Collapse>
            </div>
        </div>
    );
};

export default Menu;