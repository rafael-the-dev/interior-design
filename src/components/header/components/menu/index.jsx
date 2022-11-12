import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button, Collapse, IconButton } from "@mui/material"
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router"

import classes from "./styles.module.css";

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CloseIcon from '@mui/icons-material/Close';
import Bars from "@mui/icons-material/Menu"
import Logo from "public/images/resources/logo.png";

import Link from "src/components/link";
import NavigationList from "./components/navigation";

const Menu = () => {
    const [ open, setOpen ] = useState(false);
    const [ openSearchForm, setOpenSearchForm ] = useState(false);
    const { pathname } = useRouter();

    const containerRef = useRef(null);

    const logoMemo = useMemo(() => (
        <Link className={classNames(classes.logoContainer, `relative`)} href="/">
            <Image
                alt="logo"
                layout="fill"
                src={Logo} 
            />
        </Link>
    ), []);

    const formElementsMemo = useMemo(() => (
        <>
            <input 
                className={classNames(classes.searchInput, "border-0 grow mr-4 outline-none text-base")}
                placeholder="Search here"
            />
            <IconButton 
                className={classNames(classes.icon, classes.searchButton, " text-white rounded-none icon-search")} 
                aria-label="search"
            />
        </>
    ), [])

    const navigationList = useMemo(() => <NavigationList />, [])

    const toggleState = useCallback(() => setOpen(b => !b), []);
    const toggleFormState = useCallback(() => setOpenSearchForm(b => !b), []);

    const scrollHandler = useCallback(() => {
        const { scrollY } = window;

        if(scrollY > 200) {
            containerRef.current.classList.add(classes.fixedContainerBase)
        } 
        else if((scrollY > 80)) {
            containerRef.current.classList.add(classes.fixedContainer)
        } 
        else {
            containerRef.current.classList.remove(classes.fixedContainer);
            containerRef.current.classList.remove(classes.fixedContainerBase);
        }
    }, [])

    useEffect(() => {
        const currentWindow = window;

        scrollHandler();

        currentWindow.addEventListener("scroll", scrollHandler);

        return () => {
            currentWindow.removeEventListener("scroll", scrollHandler);
        };
    }, [ scrollHandler ])

    return (
        <div 
            className={classNames(classes.base, "relative")}
            ref={containerRef}>
            <div className={classNames(classes.container,
                "bg-white")}>
                <div className="flex items-center justify-between py-3 px-2 sm:px-3 lg:px-8 lg:py-4">
                    { logoMemo }
                    <div className="flex items-center">
                        <nav className={classNames(classes.navigation, "hidden")}>
                            { navigationList }
                        </nav>
                        <IconButton 
                            className={classNames(classes.menuButton, "bg-black rounded-none text-white hover:bg-neutral-700")}
                            onClick={toggleState}>
                            { open ? <CloseIcon /> : <Bars /> }
                        </IconButton>
                        <Button
                            className={classNames(classes.quoteButton, 
                            "border border-solid border-red-600 bg-red-600 capitalize ml-4 px-4 rounded-none text-white hover:bg-transparent hover:text-red-600")}
                            endIcon={<ArrowRightAltIcon />}>
                            Get a quote
                        </Button>
                    </div>
                </div>
                <Collapse className={classNames(classes.collapse, "absolute bg-white w-full")} component="nav" in={open} unmountOnExit>
                    { navigationList }
                </Collapse>
                <form className={classNames("absolute bg-neutral-900 flex items-stretch py-4 px-2 w-full lg:pl-4",
                    classes.searchForm, { [classes.searchFormVisible]: openSearchForm } )}>
                    { formElementsMemo }
                </form>
            </div>
        </div>
    );
};

export default Menu;