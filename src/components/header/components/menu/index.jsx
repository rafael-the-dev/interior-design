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
                <div className="flex items-center justify-between py-3 px-2 sm:px-3">
                    { logoMemo }
                    <IconButton 
                        className="bg-black rounded-none text-white hover:bg-neutral-700"
                        onClick={toggleState}>
                        { open ? <CloseIcon /> : <Bars /> }
                    </IconButton>
                </div>
                <Collapse className="absolute bg-white w-full" component="nav" in={open} unmountOnExit>
                    { navigationList }
                </Collapse>
            </div>
        </div>
    );
};

export default Menu;