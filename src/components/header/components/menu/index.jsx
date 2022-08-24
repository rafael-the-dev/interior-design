import { IconButton } from "@mui/material"
import Image from "next/image";
import classNames from "classnames"

import classes from "./styles.module.css";

import Bars from "@mui/icons-material/Menu"
import Logo from "public/images/resources/logo.png";

import Link from "src/components/link"

const Menu = () => {

    return (
        <div className="relative">
            <div className={classNames(classes.container, 
                "absolute bg-white flex items-center justify-between py-3 px-2")}>
                <Link className={classNames(classes.logoContainer, `relative`)} href="/">
                    <Image
                        alt="logo"
                        layout="fill"
                        src={Logo} 
                    />
                </Link>
                <IconButton className="bg-black rounded-none text-white">
                    <Bars />
                </IconButton>
            </div>
        </div>
    );
};

export default Menu;