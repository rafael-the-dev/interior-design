import { useRouter } from "next/router";
import classNames from "classnames";
import { Typography } from "@mui/material";

import Link from "../link"

const DefaultHero = ({ children, title }) => {
    const { pathname } = useRouter();
    
    return (
        <section className={classNames("default-hero bg-center bg-no-repeat bg-cover flex flex-col px-5 sm:px-[10%]",
            { "default-hero--about": pathname === "/about" })}>
            <div className={classNames("flex grow items-center", { "items-center": pathname !== "/about" })}>
                {
                    children ?? (
                        <Typography 
                            component="h1"
                            className={classNames("text-center before:block before:text-red-600")}>
                            { title }
                        </Typography>
                    )
                }
            </div>
            <div className={classNames("flex items-center py-3 text-white", { "justify-end": pathname === "/about" })}>
                <Link className="text-lg text-white hover:text-red-600" href="/">Home</Link>
                <span className="mx-2">~</span>
                <span className="capitalize font-bold text-xl">
                    { pathname.replace("/", "")}
                </span>
            </div>
            <style jsx>
                {
                    `
                        .default-hero {
                            background-image: linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .3)), url(/images/resources/breadcrumb-bg.jpg);
                            height: 350px;
                        }

                        .default-hero--about {
                            height: 470px;
                        }
                    `
                }
            </style>
        </section>
    );
};

export default DefaultHero;